import { type ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "@/components/ui/data-table";
import ColumnSortButton from "@/components/ui/data-table/ColumnSortButton.svelte";
import ViewCertificate from "./ViewCertificate.svelte";

type StudentData = {
	id: string;
	name: string;
	team: string;
	college: string;
};

const columns: ColumnDef<StudentData>[] = [
	{
		accessorKey: "id",
		header: "",
		cell: ({ getValue }) => {
			const id = getValue<string>();
			return renderComponent(ViewCertificate, { url: `/certificate/${id}` });
		},
	},
	{
		accessorKey: "name",
		header: ({ column }) =>
			renderComponent(ColumnSortButton, {
				columnTitle: "Name",
				sortDirection: column.getIsSorted(),
				onclick: () => {
					const currentSort = column.getIsSorted();
					if (currentSort === false) {
						column.toggleSorting(false); // Set to ascending
					} else if (currentSort === "asc") {
						column.toggleSorting(true); // Set to descending
					} else {
						column.clearSorting(); // Clear sorting (back to unsorted)
					}
				},
			}),
	},
	{
		accessorKey: "team",
		header: ({ column }) =>
			renderComponent(ColumnSortButton, {
				columnTitle: "Team",
				sortDirection: column.getIsSorted(),
				onclick: () => {
					const currentSort = column.getIsSorted();
					if (currentSort === false) {
						column.toggleSorting(false); // Set to ascending
					} else if (currentSort === "asc") {
						column.toggleSorting(true); // Set to descending
					} else {
						column.clearSorting(); // Clear sorting (back to unsorted)
					}
				},
			}),
	},
	{
		accessorKey: "college",
		header: ({ column }) =>
			renderComponent(ColumnSortButton, {
				columnTitle: "College",
				sortDirection: column.getIsSorted(),
				onclick: () => {
					const currentSort = column.getIsSorted();
					if (currentSort === false) {
						column.toggleSorting(false); // Set to ascending
					} else if (currentSort === "asc") {
						column.toggleSorting(true); // Set to descending
					} else {
						column.clearSorting(); // Clear sorting (back to unsorted)
					}
				},
			}),
	},
];

export { columns };
export type { StudentData };
