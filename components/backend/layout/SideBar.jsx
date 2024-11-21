import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png"
import { Bolt, Compass, LayoutDashboard, LayoutGrid, LucideExternalLink, Slack, Truck, UserCircle2Icon, Users, Warehouse } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="dark:bg-black bg-white space-y-6 w-52 text-black dark:text-white font-bold min-h-screen fixed left-0 top-0 shadow-md ">
      <Link className="px-6 py-4" href="#">
        <Image src={logo} alt="logo" width={100} height={100} className="w-full" />
      </Link>
      <div className="space-y-6 flex flex-col ">
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <Slack />
          <span>Catalogue</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <UserCircle2Icon />
          <span>Customers</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <Warehouse />
          <span>Markets</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <Compass  />
          <span>Farmers</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <Truck />
          <span>Orders</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <Users />
          <span>Staffs</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <Bolt />
          <span>Settings</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 border-l-4 border-white  px-6 py-2 ">
          <LucideExternalLink />
          <span>Online Store</span>
        </Link>
      </div>
    </div>
  );
}