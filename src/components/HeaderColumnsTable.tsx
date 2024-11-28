"use client";

import { Prescription } from "@/Types/user";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrescriptionDialog } from "./PrescriptionDialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

export const columnsTable: ColumnDef<Prescription>[] = [
  // {
  //     id: 'select',
  //     header: ({ table }) => (
  //         <Checkbox
  //             checked={
  //                 table.getIsAllPageRowsSelected() ||
  //                 (table.getIsSomePageRowsSelected() && 'indeterminate')
  //             }
  //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //             aria-label="Select all"
  //         />
  //     ),
  //     cell: ({ row }) => (
  //         <Checkbox
  //             checked={row.getIsSelected()}
  //             onCheckedChange={(value) => row.toggleSelected(!!value)}
  //             aria-label="Select row"
  //         />
  //     )
  // },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Código
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name_drug",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Remédio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    // header: "Status",
    header: ({ column }) => {
      const [selectedStatus, setSelectedStatus] = useState<string | undefined>(
        "all"
      );

      // Filter
      const handleFilter = (value: string) => {
        setSelectedStatus(value);
        column.setFilterValue(value === "all" ? undefined : value);
      };

      return (
        <Select onValueChange={handleFilter} value={selectedStatus}>
          <SelectTrigger className="w-[180px] bg-none border-transparent hover:bg-accent">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="PENDIENTE">PENDIENTE</SelectItem>
              <SelectItem value="USADA">USADA</SelectItem>
              <SelectItem value="EXPIRADO">EXPIRADO</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div
          className={`font-semibold ${
            status === "PENDIENTE"
              ? "text-my-started"
              : status === "USADA"
              ? "text-my-done"
              : "text-my-no-started"
          }`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantidade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de Expedição
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const created_at = row.getValue("created_at");
      const formatted_dob = new Date(created_at as string).toLocaleDateString();
      return <div className="font-medium">{formatted_dob}</div>;
    },
  },
  {
    accessorKey: "expires_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de Expiração
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const created_at = row.getValue("created_at");
      const formatted_dob = new Date(created_at as string).toLocaleDateString();
      return <div className="font-medium">{formatted_dob}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const prescriptionRow: Prescription = row.original;
      console.log(prescriptionRow); /* data row pass to card */
      return <PrescriptionDialog prescription={prescriptionRow} />;
    },
  },
];

export const columnsCardPrescription: ColumnDef<Prescription>[] = [
  {
    accessorKey: "name_drug",
    header: "Remédio",
  },
  {
    accessorKey: "quantity",
    header: "Quantidade",
  },
  {
    accessorKey: "expires_at",
    header: "Validade da prescrição",
    cell: ({ row }) => {
      const expires_at = row.getValue("expires_at");
      const formatted_dob = new Date(expires_at as string).toLocaleDateString();
      return <div className="font-medium">{formatted_dob}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div
          className={`font-semibold ${
            status === "PENDIENTE"
              ? "text-my-started"
              : status === "USADA"
              ? "text-my-done"
              : "text-my-no-started"
          }`}
        >
          {status}
        </div>
      );
    },
  },
];
