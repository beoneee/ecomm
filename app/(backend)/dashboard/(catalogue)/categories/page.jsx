import PageHeader from "@/components/backend/layout/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import React from "react";

import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function page() {
  const categories = await getData("categories");
  return (
    <div>
      <PageHeader
        title="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />

      <div className="py-0 ">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
