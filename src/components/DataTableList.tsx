"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronUp,
  LucideChevronFirst,
  LucideChevronLast,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { ThemeToggle } from '@/components/ui/ThemeToggle'
// import { downloadToExcel } from '@/lib/xlsx'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[] | TData;
  paginationAndInput: boolean;
}

export function DataTableList<TData, TValue>({
  columns,
  data,
  paginationAndInput,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isRendering, setIsRendering] = useState(true);
  // setIsRendering(paginationAndInput);

  useEffect(() => {
    setIsRendering(paginationAndInput);
  }, [paginationAndInput]);
  const memoizedData = useMemo(() => {
    return Array.isArray(data) ? data : [data];
  }, [data]);
  // const dataArray = Array.isArray(data) ? data : [data];
  console.log("data desde datatablelist:", memoizedData);

  const table = useReactTable({
    data: memoizedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // new
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      {isRendering && (
        <div className="flex items-center py-4">
          <Input
            placeholder="Procura o remédio"
            value={
              (table.getColumn("name_drug")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) => {
              table.getColumn("name_drug")?.setFilterValue(event.target.value);
            }}
            className="max-w-sm"
          />

          {/* <ThemeToggle className='ml-4' /> */}

          {/*Column visibility dropdown btn*/}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-4">
                Perzonalizar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  // as long as it's not the actions column, we can toggle visibility
                  if (column.id !== "actions")
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Button onClick={() => downloadToExcel()} className="ml-4">
                    Export to Excel
                </Button> */}
        </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-my-neutral">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows?.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      // className={`${isRendering ? "px-7" : "px-0"}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No results</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {isRendering && (
        <div>
          <div>
            <div className="flex items-center justify-end space-x-2 gap-4 py-4">
              <div className="text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-4">
                    Show {table.getState().pagination.pageSize}{" "}
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {/* Pagination control goes here */}
                  {[10, 25, 50].map((pageSize) => (
                    <DropdownMenuCheckboxItem
                      key={pageSize}
                      checked={
                        table.getState().pagination.pageSize === pageSize
                      }
                      onCheckedChange={(value) => {
                        if (value) {
                          table.setPageSize(pageSize);
                        }
                      }}
                    >
                      Show {pageSize}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <LucideChevronFirst />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <LucideChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <LucideChevronRight />
              </Button>
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <LucideChevronLast />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
