"use client"
import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { ShoppingCart, User } from "lucide-react";
import HelpModal from "./HelpModal";
import CartCount from "./CartCount";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import UserAvatar from "../data-display/UserAvatar";

export default function Navbar() {
  const {data:session,status} =useSession()
  if(status === "loading"){
    return <p>Loading..</p>
  }
  return (
    <div className="bg-white dark:bg-slate-700">
      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
        <Link className="" href="/">
          <Image
            src={logo}
            alt="limifood logo"
            className="w-24"
            priority={true}
          />
        </Link>
        {/* SEARCH */}
        <div className="flex-grow">
          <SearchForm />
        </div>
        <div className="flex gap-8">
        {
          status === "unauthenticated"?(
            <Link
            href="/login"
            className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
          >
            <User />
            <span>Login</span>
          </Link>
          ):(
            <UserAvatar user={session?.user}/>
          )
        }
          <HelpModal />
         <CartCount/>
        </div>
      </div>
    </div>
  );
}
