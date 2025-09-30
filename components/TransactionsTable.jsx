import React from "react";
import { motion } from "framer-motion";

const Badge = ({type})=>{
  const map = {Rebalance:"bg-violet-500",Deposit:"bg-green-500",Withdraw:"bg-red-500"};
  return <span className={"px-2 py-1 rounded-full text-xs "+(map[type]||"bg-slate-500")}>{type}</span>
}

export default function TransactionsTable({transactions=[]}){
  if(!transactions.length) return <div className="text-slate-400">No transactions.</div>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead className="text-left text-slate-400 text-sm">
          <tr>
            <th className="pb-2">Type</th>
            <th className="pb-2">Pair</th>
            <th className="pb-2 text-right">Amount</th>
            <th className="pb-2 text-right">Status</th>
            <th className="pb-2 text-right">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t,i)=>(
            <motion.tr key={t.id} initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:i*0.05}}>
              <td className="py-3">{<Badge type={t.type} />}</td>
              <td className="py-3">{t.pair}</td>
              <td className="py-3 text-right font-medium">{t.amount}</td>
              <td className="py-3 text-right">
                <span className={"px-2 py-1 rounded-full text-xs " + (t.status==="Success"?"bg-green-600":"bg-yellow-600")}>{t.status}</span>
              </td>
              <td className="py-3 text-right text-slate-400">{t.date}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
