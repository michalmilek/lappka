import React, { useMemo } from "react";
import {
  Column,
  Table as TableT,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender,
  FilterFns,
} from "@tanstack/react-table";
import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";
import { Animal } from "./AnimalCards";

const Table = ({ animals }: { animals: Animal[] }) => {
  const data = useMemo(() => animals, [animals]);
  const columns = useMemo(
    () => [
      {
        HEADER: "ID",
        ACCESOR: "ID",
      },
      {
        HEADER: "Price",
        ACCESOR: "ID",
      },
      {
        HEADER: "Title",
        ACCESOR: "ID",
      },
      {
        HEADER: "sw",
        ACCESOR: "ID",
      },
    ],
    []
  );
  const tableInstance = useReactTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return <table className="border-t-2 border-b-2">Table</table>;
};

export default Table;
