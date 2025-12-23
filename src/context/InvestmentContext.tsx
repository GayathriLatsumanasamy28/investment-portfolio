import React, { createContext, useContext, useState } from "react";

/* ---------- Types ---------- */
export type Investment = {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
};

type InvestmentContextType = {
  investments: Investment[];
  addInvestment: (investment: Investment) => void;
};

/* ---------- Context ---------- */
const InvestmentContext = createContext<InvestmentContextType | undefined>(
  undefined
);

/* ---------- Provider ---------- */
export function InvestmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [investments, setInvestments] = useState<Investment[]>([]);

  const addInvestment = (investment: Investment) => {
    setInvestments((prev) => [...prev, investment]);
  };

  return (
    <InvestmentContext.Provider value={{ investments, addInvestment }}>
      {children}
    </InvestmentContext.Provider>
  );
}

/* ---------- Hook ---------- */
export function useInvestments() {
  const context = useContext(InvestmentContext);
  if (!context) {
    throw new Error(
      "useInvestments must be used inside InvestmentProvider"
    );
  }
  return context;
}
