import { fontProviders } from "astro/config";
import type { FontFamily } from "node_modules/astro/dist/assets/fonts/types";

const fonts: FontFamily[] = [
	{
		provider: fontProviders.google(),
		name: "Noto Sans",
		cssVariable: "--font-noto-sans",
	},
	{
		provider: fontProviders.local(),
		name: "Feast Of Flesh BB",
		cssVariable: "--font-angry",
		options: {
			variants: [
				{
					style: "normal",
					src: ["./src/assets/fonts/FEASFBRG.woff2"],
				},
				{
					style: "italic",
					src: ["./src/assets/fonts/FEASFBI_.woff2"],
				},
			],
		},
	},
	{
		provider: fontProviders.local(),
		name: "Lazy Dog",
		cssVariable: "--font-lazy-dog",
		options: {
			variants: [
				{
					style: "normal",
					src: ["./src/assets/fonts/lazy_dog.woff2"],
				},
			],
		},
	},
];

export default fonts;
