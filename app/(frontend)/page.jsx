import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MartketList from "@/components/frontend/MartketList";
import { getData } from "@/lib/getData";
import Link from "next/link";

import React from "react";

export default async function page() {
  const categories = await getData('categories')
  return (
    <div className=" min-h-screen">
      <Hero />
      <MartketList />
     {categories.map((category,i)=>{
      return(
        <div className="py-8" key={i} > 
          <CategoryList category={category}/></div>
      )
     })}
      <CommunityTrainings/>
      <h2 className="text-4xl font-bold">Welcome to ZUNZX Mhzzzz</h2>

      <Link className="my-4 underline" href="/register-farmer">
        {" "}
        Become a farmer /Vendor/Supplier
      </Link>
    </div>
  );
}
