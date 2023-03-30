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
        HEADER: "ID",
        ACCESOR: "ID",
      },
      {
        HEADER: "ID",
        ACCESOR: "ID",
      },
      {
        HEADER: "ID",
        ACCESOR: "ID",
      },
    ],
    []
  );
  /* const tableInstance = useReactTable({}) */
  return <div className="border-t-2 border-b-2">Table</div>;
};

export default Table;
