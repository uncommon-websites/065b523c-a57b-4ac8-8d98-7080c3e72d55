<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
	{
		title: "Work at the boundary of AI and operations",
		description: "Shape autonomous systems trusted in aviation, maritime, and beyond. See the direct impact of your work on major global operations.",
		icon: IconBriefcase
	},
	{
		title: "Grow as we grow",
		description: "Join us at our inflection point—early team members influence how we scale, with high ownership and growth paths as the company expands.",
		icon: IconUsers
	},
	{
		title: "Compensation and real benefits",
		description: "Competitive salary, equity for early hires, health coverage, learning stipends, and a remote-first team culture that rewards results.",
		icon: IconHeart
	}
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Li Chen",
    position: "Engineering Manager",
    company: "Decision Systems Team",
    quote:
      "Joining GeoSpatios has pushed me professionally in the best ways. I now lead a team building AI for live aviation systems—something I never thought I’d get to do so early. The culture is fast, focused, and incredibly respectful.",
    image: "/generated/image-east-asian-woman-engineering-manager-smi.webp"
  },
  {
    name: "Marco Valentin",
    position: "Operations Associate",
    company: "Transport Systems Team",
    quote:
      "I’ve worked at big ops firms before, but this is totally different. Here, I’m solving real problems that hit airports and ports every day. Feedback is fast. The impact is immediate. That’s what makes it exciting.",
    image: "/generated/image-latino-male-operations-associate-dressed.webp"
  },
  {
    name: "Avery Okoro",
    position: "Product Designer",
    company: "Core UX Team",
    quote:
      "Design isn’t an afterthought here. I helped shape the entire experience for how operators interact with Geo-OS in real time. The support for new ideas—especially from folks who don’t fit the typical mold—has been real and refreshing.",
    image: "/generated/image-black-nonbinary-product-designer-looking.webp"
  }
];

	const processSteps = [
	{
		step: 1,
		title: "Apply online",
		description: "Send your resume, LinkedIn, or portfolio. If you have relevant project work, share that too."
	},
	{
		step: 2,
		title: "Intro conversation",
		description: "If we see a fit, we’ll invite you to a quick chat so you can learn about us and we can better understand your goals and strengths."
	},
	{
		step: 3,
		title: "Technical assessment",
		description: "Depending on the role, this may be a lightweight take-home project or a structured technical conversation focused on practical problem-solving."
	},
	{
		step: 4,
		title: "Final interviews with the team",
		description: "Meet a few colleagues and discuss how you'd approach real challenges we’re working through today. These conversations focus on working style, priorities, and concrete problem-solving—not abstract puzzle questions."
	},
	{
		step: 5,
		title: "Offer and onboarding",
		description: "If it’s a fit on both sides, we’ll move fast to get you started. You’ll receive clear documentation to help you hit the ground running from day one."
	}
];

	const values = [
	{
		icon: IconHeart,
		title: "High ownership, low ego",
		description: "Everyone ships. Titles come second to impact. We solve real problems in real time—together."
	},
	{
		icon: IconUsers,
		title: "Move at operational speed",
		description: "Momentum breeds insight. We value action, iteration, and learning as we go."
	},
	{
		icon: IconGlobe,
		title: "Truth over decoration",
		description: "Signal trumps noise. Outcomes matter more than presentation and we focus on what works in practice."
	}
];
</script>

<!-- Hero Section -->

<SecondaryHero
  title="Build autonomy. Shape tomorrow."
  subtitle="Join the team powering real-world AI impact."
  imageSrc="/generated/image-a-diverse-group-of-professionals-working.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
