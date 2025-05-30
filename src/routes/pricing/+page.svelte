<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Alina Summers",
      position: "Head of Airport Ops",
      company: "Lancesa Air",
      quote:
        "GeoSpatios has replaced five disconnected dashboards with a single cockpit view. Our tarmac coordinators respond in seconds, not minutes.",
      image:
        "/generated/image-a-professional-headshot-of-a-white-woman.webp"
    },
    {
      name: "Karsten Valo",
      position: "VP Maritime Systems",
      company: "Norbluf Logistics",
      quote:
        "Our vessels reroute around typhoons automatically before our central command even starts issuing plans. That kind of foresight is operations gold.",
      image:
        "/generated/image-a-professional-headshot-of-a-northern-eu.webp"
    },
    {
      name: "Seth Murai",
      position: "CTO",
      company: "Columna Insurance Technologies",
      quote:
        "We integrated our Geo-OS SDK in three days. Real-time risk scoring now feeds direct to underwriters.",
      image:
        "/generated/image-a-professional-headshot-of-a-japanese-am.webp"
    }
  ]}
/>

<CallToAction
  title="See the results in your operations"
  subtitle="Book your custom demo today"
  description="GeoSpatios powers mission-critical teams to make the right decision every time—no guesswork, no delays. Experience the impact of AI-powered digital humans in aviation, maritime, logistics, and energy."
  imageSrc="/generated/image-a-happy-professional-in-an-aviation-cont.webp"
  callsToAction={[
    {
      href: '/book-demo',
      label: 'Book your demo',
      variant: 'primary',
    },
    {
      href: '/contact',
      label: 'Contact sales',
      variant: 'secondary',
    },
  ]}
/>
