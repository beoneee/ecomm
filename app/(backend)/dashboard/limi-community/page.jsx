import PageHeader from "@/components/backend/layout/PageHeader";
import TableActions from "@/components/backend/layout/TableActions";
import { Search, Trash2, Download } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        title="Limi Community Trainings"
        href="/dashboard/limi-community/new"
        linkTitle="Add Training"
      />
      <TableActions />

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
