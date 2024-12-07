import Breadcrumb from "@/components/frontend/Breadcrumb";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* CART1 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/tops.jpg"
                  width={249}
                  height={249}
                  alt="all text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>DUNZZZZZ</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className=" rounded-xl border boder-gray-400 flex gap-3 items-center ">
                <button className="border-r boder-gray-500 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">2</p>
                <button className="border-l boder-gray-500 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4>$200.00</h4>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
            {/* CART2 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/tops.jpg"
                  width={249}
                  height={249}
                  alt="all text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>DUNZZZZZ</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className=" rounded-xl border boder-gray-400 flex gap-3 items-center ">
                <button className="border-r boder-gray-500 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">2</p>
                <button className="border-l boder-gray-500 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4>$200.00</h4>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          {/* COUPONS FORM */}
          <div className="flex items-center gap-2 py-8">
          <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2" placeholder="Enter Coupon"/>
          <button className="shrink-0 py-2.5 px-4 rounded-lg bg-purple-400 ">Apply Coupon</button>
          </div>
        </div>
        <div className="col-span-4 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden hidden p-5 dark:text-slate-100 font-bold">
          <h2 className="text-2xl pb-3">Cart Total</h2>
          <div className="flex items-center justify-between  border-b pb-6 border-slate-500">
            <span>Subtotal </span>
            <span>$22</span>
          </div>
          <div className="flex items-center justify-between pb-4 mt-2">
            <span>Tax </span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between pb-4">
            <span>Shipping </span>
            <span>$10</span>
          </div>
          <p className="border-b pb-6 border-slate-500 text-slate-400 font-normal">metvcllllllllllllllllllllllll</p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Total </span>
            <span>$100000</span>
          </div>
          <Link href="#" className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal"> Continue to Payment</Link>
        </div>
      </div>
    </div>
  );
}
