import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { transact, Web3MobileWallet } from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import { APP_IDENTITY } from '../constants';

type WalletContextState = {
  publicKey?: PublicKey;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
};

const WalletContext = createContext<WalletContextState>({
  connect: async () => {},
  disconnect: async () => {}
});

const connection = new Connection(clusterApiUrl('devnet'));

export function WalletProvider({ children }: { children: ReactNode }) {
  const [publicKey, setPublicKey] = useState<PublicKey>();
  const [authToken, setAuthToken] = useState<string>();

  const connect = async () => {
    try {
      const { accounts, auth_token } = await transact((wallet: Web3MobileWallet) =>
        wallet.authorize({ chain: 'solana:devnet', identity: APP_IDENTITY })
      );
      setPublicKey(new PublicKey(accounts[0].address));
      setAuthToken(auth_token);
    } catch (e) {
      console.error(e);
    }
  };

  const disconnect = async () => {
    if (!authToken) return;
    try {
      await transact(w => w.deauthorize({ auth_token: authToken }));
      setPublicKey(undefined);
      setAuthToken(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WalletContext.Provider value={{ publicKey, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWalletContext = () => useContext(WalletContext);
