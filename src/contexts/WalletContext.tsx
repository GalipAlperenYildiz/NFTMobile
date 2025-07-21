import React, { createContext, ReactNode, useContext } from 'react';

type WalletContextType = {
  connected: boolean;
  connect: () => void;
};

const WalletContext = createContext<WalletContextType>({
  connected: false,
  connect: () => {},
});

export function WalletProvider({ children }: { children: ReactNode }) {
  // ileride state ekleyeceğiz
  const connect = () => {
    console.log('📡 connect called');
  };
  return (
    <WalletContext.Provider value={{ connected: false, connect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
