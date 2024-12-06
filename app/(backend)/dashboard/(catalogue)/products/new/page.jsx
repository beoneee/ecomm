import NewProductForm from "@/components/data-display/NewProductForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const farmerData = usersData.filter((user) => user.role === "FARMER");
  const farmers = farmerData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return <NewProductForm categories={categories} farmers={farmers} />;
}
