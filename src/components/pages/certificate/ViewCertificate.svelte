<script lang="ts">
import { Eye } from "lucide-svelte";

interface Props {
	url: string;
}

const { url }: Props = $props();
</script>

<a href={url} class="flex items-center justify-center w-full h-full text-white hover:text-blue-400">
    <Eye class="h-[2rem] w-[2rem]"/>
</a>