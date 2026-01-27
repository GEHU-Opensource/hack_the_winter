<script lang="ts" generics="TData, TValue">
import {
	type ColumnDef,
	type ColumnFiltersState,
	type SortingState,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
} from "@tanstack/table-core";
import { createSvelteTable, FlexRender } from "@/components/ui/data-table";
import type { StudentData } from "./helpers";

interface Props<TData, TValue> {
	filter?: keyof TData & string;
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

const { filter, data, columns }: Props<TData, TValue> = $props();

let sorting = $state<SortingState>([]);
let columnFilters = $state<ColumnFiltersState>([]);

const table = createSvelteTable({
	get data() {
		return data;
	},
	columns,
	getCoreRowModel: getCoreRowModel(),
	getFilteredRowModel: getFilteredRowModel(),
	getSortedRowModel: getSortedRowModel(),
	onSortingChange: (updater) => {
		sorting = typeof updater === "function" ? updater(sorting) : updater;
	},
	onColumnFiltersChange: (updater) => {
		columnFilters =
			typeof updater === "function" ? updater(columnFilters) : updater;
	},
	state: {
		get sorting() {
			return sorting;
		},
		get columnFilters() {
			return columnFilters;
		},
	},
});
</script>

<!-- Filter -->
{#if filter}
    <div class="w-full flex flex-row justify-center items-center gap-2">
        <span>Search:</span>
        <input
            type="text"
            placeholder={filter}
            value={(table
                .getColumn(filter)
                ?.getFilterValue() as string) ?? ""}
            onchange={(e) => {
                table
                    .getColumn(filter)
                    ?.setFilterValue(e.currentTarget.value);
            }}
            oninput={(e) => {
                table
                    .getColumn(filter)
                    ?.setFilterValue(e.currentTarget.value);
            }}
            class="max-w-sm px-4 py-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
{/if}
  

<table class="w-full">
    <thead class="w-full">
        {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
            <tr class="last:min-w-full">
                {#each headerGroup.headers as header (header.id)}
                    <th >
                        {#if !header.isPlaceholder}
                            <FlexRender
                                content={header.column.columnDef.header}
                                context={header.getContext()}
                            />
                        {/if}
                    </th>
                {/each}
            </tr>
        {/each}
    </thead>
    <tbody class="w-full">
        {#each table.getRowModel().rows as row (row.id)}
            
                <tr>
                    {#each row.getVisibleCells() as cell (cell.id)}
                        <td class="font-lazy-dog">
                            
                                <FlexRender
                                    content={cell.column.columnDef.cell}
                                    context={cell.getContext()}
                                />
                            
                        </td>
                    {/each}
                    
                </tr>
            
        {:else}
            <tr>
                <td colspan={columns.length} class="h-24 text-center">No results.</td>
            </tr>
        {/each}
    </tbody>
</table>
