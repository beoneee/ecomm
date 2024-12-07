import Breadcrumb from "@/components/frontend/Breadcrumb";
import React from "react";
import Image from "next/image";
import { Minus, Plus, Send, Share2, ShoppingCart, Tag } from "lucide-react";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const category = await getData("/categories/6751f735ab46237bac281153");
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Image
            src="/tops.jpg"
            alt="tops"
            width={556}
            height={556}
            className="w-full"
          />
        </div>
        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-3xl font-semibold">zun</h2>
            <button>
              <Share2 />
            </button>
          </div>
          <div className="border-b border-gray-500">
            <p className="py-2 ">
              LIMITED EDITION: Tsubaki Sweater – Biểu Tượng của Tình Yêu Bất Quy
              Tắc Trong văn hóa Nhật Bản, hoa Tsubaki (hoa trà) là một biểu
              tượng
            </p>
            <div className="flex items-center gap-8 mb-4">
              <p>sku:12233333</p>
              <p className="bg-purple-300 py-1.5 px-4 rounded-full text-slate-900">
                <b>Stock</b>:230
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4">
              <h4 className="text-2xl">UGX50000</h4>
              <del className="text-slate-400 text-sm">244444</del>
            </div>
            <p className="flex items-center ">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span>save 50% right now</span>
            </p>
          </div>
          <div className="flex justify-between items-center py-6">
            <div className=" rounded-xl border boder-gray-400 flex gap-3 items-center ">
              <button className="border-r boder-gray-500 py-2 px-4">
                <Minus />
              </button>
              <p className="flex-grow py-2 px-4">2</p>
              <button className="border-l boder-gray-500 py-2 px-4">
                <Plus />
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-purple-300 px-4 py-2 rounded-md text-white">
              <ShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        <div className=" col-span-3 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
          <h2 className="bg-slate-100 py-3 px-6 font-semibold border-b boder-gary-300 ">
            DELIVERY % RETURNS
          </h2>
          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-purple-400 text-slate-50 items-center gap-3">
              <span>Zunz Express</span>
              <Send />
            </div>
            <div className="py-3 text-slate-100 border-b border-gray-500">
              Eligible for Free
              <Link href="#">View Details</Link>
            </div>
            <h2 className="text-slate-200 py-2">Choose your Location</h2>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 px-4 my-8 rounded p-4">
        <h2 className="mb-4 text-xl font-semibold text-slate-400 ml-3">
          ACCESSORY{" "}
        </h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
}
