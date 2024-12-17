"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<SortableColumn column={column} title="Title"/>)
  },
  {
    accessorKey: "logoUrl",
    header: "Market Logo",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="logoUrl"/>)
  },
    // {
    //   accessorKey: "description",
    //   header: "Description",
    //   cell: ({ row }) => {
    //       const description = row.getValue("description");

    //       return (
    //        <div className="line-clamp-1">
    //          {description}
    //        </div>
    //       );
    //     },
    // },
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt"/>)
      
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const market = row.original;
      return (
        <ActionColumn
          row={row}
          title="Market"
          editEndpoint={`markets/update/${market.id}`}
          endpoint={`markets/${market.id}`}
        />
      );
    },
  },
];
