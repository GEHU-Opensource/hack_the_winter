// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import fonts from "./fonts";
import mdx from "@astrojs/mdx";
import lenis from "astro-lenis";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
	site: "https://hack.gehubhimtal.in/",
	integrations: [
		mdx(),
		lenis(),
		icon(),
		svelte(),
		playformCompress({ Image: false, SVG: false }),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts,
		svgo: true,
	},
});
