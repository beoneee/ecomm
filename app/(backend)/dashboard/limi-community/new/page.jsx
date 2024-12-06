import NewTrainingForm from "@/components/data-display/NewTrainingForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const categoriesData= await getData('categories')
 
  const categories = categoriesData.map((category)=>{
    return{
      id: category.id,
      title:category.title
    }
  })
  return <NewTrainingForm categories={categories} />;
}
