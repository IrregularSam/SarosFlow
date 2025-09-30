import { useState } from "react";
import mock from "../data/mockTransactions.json";
export default function useDemoData(){
  const [demoMode] = useState(true);
  const mockTransactions = mock;
  const mockPositions = [
    {pair:"SOL/USDC", value:"$12,430", drft:"+2.4%", fees:"$128"},
    {pair:"BTC/USDC", value:"$8,200", drft:"-1.2%", fees:"$42"}
  ];
  return { demoMode, mockTransactions, mockPositions };
}
