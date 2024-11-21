import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: 110000,
      color: "bg-blue-300",
    },
    {
      period: "Yesterday Orders",
      sales: 150000,
      color: "bg-violet-400",
    },
    {
      period: "This Month",
      sales: 300000,
      color: "bg-fuchsia-300",
    },
    {
      period: "Last Month",
      sales: 400000,
      color: "bg-emerald-300",
    },
    {
      period: "All-time Orders",
      sales: 5000000,
      color: "bg-rose-400",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:text-sm md:text-base text-xs" >
      {orderStats.map((stat, i) => {
        return <LargeCard className="bg-stone-500" data={stat} key={i} />;
      })}
    </div>
  );
}
