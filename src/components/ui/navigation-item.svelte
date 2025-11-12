<script lang="ts">
	interface Props {
		item: {
			title: string;
			href: string;
			hevc: string;
			webm: string;
		};
		isCurrent: boolean;
	}

	const { item, isCurrent }: Props = $props();

	let video: HTMLVideoElement;

	function enter() {
		video.loop = true;
		video.play();
	}

	function exit() {
		video.loop = false;
	}
</script>

<a
	href={isCurrent ? null : item.href}
	class="flex flex-col align-middle items-center mb-8 hover:text-shadow-lg/50"
	onmouseenter={enter}
	onmouseleave={exit}
>
	<video
		bind:this={video}
		muted
		playsinline
		class="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain"
		data-current={isCurrent}
		autoplay={isCurrent ? true : undefined}
	>
		<source src={item.hevc} type="video/mp4; codecs='hvc1'" />
		<source src={item.webm} type="video/webm" />
		Your browser does not support the video tag.
	</video>

	<p
		class={[
			"text-lg md:text-xl lg:text-2xl xl:text-3xl",
			"text-center font-angry tracking-wider text-shadow-md/50",
			isCurrent ? "italic text-white/90 " : "",
		]}
	>
		{item.title}
	</p>
</a>
