import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "csv-parse/sync";

const certificates = defineCollection({
	schema: z.object({
		id: z.string(),
		team: z.string(),
		name: z.string(),
		college: z.string(),
		finalists: z.boolean().optional().default(false),
		position: z.number().optional(),
	}),
	loader: file("content/certificates.csv", {
		parser: (content) => {
			const records: any[] = parse(content, {
				columns: true,
				skip_empty_lines: true,
			});
			return records.map((row) => ({
				id: encodeURIComponent(
					`${row.team_name.toLowerCase().replace(/\s+/g, "-")}-${row.name.toLowerCase().replace(/\s+/g, "-")}`,
				),
				team: row.team_name,
				name: row.name,
				college: row.college,
				finalists: String(row.finalists) === "YES",
				position:
					row.position === "NIL" ? undefined : parseInt(row.position, 10),
			}));
		},
	}),
});

export const collections = { certificates };
