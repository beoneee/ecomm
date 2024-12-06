"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import {
  Bolt,
  BuildingIcon,
  ChevronDownCircle,
  ChevronRight,
  CircleChevronUp,
  CircleDollarSignIcon,
  Compass,
  LayoutDashboard,
  LayoutGrid,
  LogOut,
  LucideExternalLink,
  Slack,
  Truck,
  UserCircle2Icon,
  Users,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const sidebarLinks = [
    {
      title: "Customers",
      icon: UserCircle2Icon,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: Compass,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Staffs",
      icon: Users,
      href: "/dashboard/staffs",
    },
    {
      title: "Limi Community",
      icon: BuildingIcon,
      href: "/dashboard/limi-community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSignIcon,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Bolt,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: LucideExternalLink,
      href: "/",
    },
  ];
  const catalogueLinks = [
    {
      title: "Products",
      icon: UserCircle2Icon,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: Warehouse,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: Truck,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: Users,
      href: "/dashboard/banners",
    },
  ];
  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm:mt-0 dark:bg-black  bg-white space-y-6 w-60 h-screen text-black dark:text-white font-bold fixed left-0 top-0 shadow-md z-50 overflow-y-scroll" : "mt-20 sm:mt-0 hidden sm:block dark:bg-black  bg-white space-y-6 w-60 h-screen text-black dark:text-white font-bold fixed left-0 top-0 shadow-md z-50 overflow-y-scroll "
      }
    >
      <Link
        onClick={() => setShowSidebar(false)}
        className="py-4 px-4 flex justify-center "
        href="/dashboard"
      >
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-full"
        />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 border-l-4 border-purple-700 text-purple-700 px-6 py-2 "
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>

        {/* Catalogue */}
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
            <button className="flex items-center space-x-6  py-2 ">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronDownCircle /> : <CircleChevronUp />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 pl-6 bg-slate-100 dark:bg-neutral-900 text-sm rounded-lg py-3  ">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3  border-purple-700 text-purple-700  py-2 "
                      : "flex items-center space-x-3 py-2"
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href === pathname
                  ? "flex items-center space-x-3 border-l-4  border-purple-700 text-purple-700  px-6 py-2 "
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        {/* End Catalogue */}

        <div className="px-6 py-2 ">
          <button className="bg-purple-400 rounded-md flex items-center space-x-3 px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
