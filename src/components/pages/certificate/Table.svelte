<script lang="ts">
import DataTable from "@/components/pages/certificate/DataTable.svelte";
import { columns, type StudentData } from "./helpers";

interface Props {
	data: StudentData[];
}

const { data }: Props = $props();
</script>

<DataTable {data} {columns} filter="name"/>