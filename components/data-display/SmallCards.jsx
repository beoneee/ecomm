import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Today Orders",
      number: 500,
      iconBg: "bg-stone-500",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      number: 100,
      iconBg: "bg-violet-400",
      icon: Loader,
    },
    {
      title: "Orders Processing",
      number: 200,
      iconBg: "bg-indigo-800",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      number: 300,
      iconBg: "bg-teal-800",
      icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard key={i} data={data} />;
      })}
    </div>
  );
}
