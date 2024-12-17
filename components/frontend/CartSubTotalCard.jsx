import Link from "next/link";
import React from "react";

export default function CartSubTotalCard({ subTotal }) {
  const shipping = 3;
  const tax = 0;
  const totalPrice = Number(subTotal) + Number(shipping) + Number(tax);
  return (
    <div className="md:col-span-4 col-span-full sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden h p-5 dark:text-slate-100 font-bold flex flex-col justify-between ">
      <h2 className="text-2xl pb-3">Cart Total</h2>
      <div className="flex items-center justify-between  border-b pb-6 border-slate-500">
        <span>Subtotal </span>
        <span>${subTotal}</span>
      </div>
      <div className="flex items-center justify-between pb-4 mt-2">
        <span>Tax </span>
        <span>${tax}</span>
      </div>
      <div className="flex items-center justify-between pb-4">
        <span>Shipping </span>
        <span>${shipping}</span>
      </div>
      <p className="border-b pb-6 border-slate-500 text-slate-400 font-normal">
      We only charge shipping fees when you have more than 2kg of items
      </p>
      <div className="flex items-center justify-between py-4 font-bold">
        <span>Total </span>
        <span>$ {totalPrice}</span>
      </div>
      <div className="mt-8">
      <Link
        href="/checkout"
        className="bg-purple-400 text-slate-900 rounded-lg py-3 px-6 font-normal"
      >
        Continue to Checkout
      </Link>
      </div>
    </div>
  );
}
