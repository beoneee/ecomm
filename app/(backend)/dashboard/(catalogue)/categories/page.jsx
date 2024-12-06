import PageHeader from "@/components/backend/layout/PageHeader";
import TableActions from "@/components/backend/layout/TableActions";
import { Search, Trash2, Download } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        title="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />
      <TableActions />

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
