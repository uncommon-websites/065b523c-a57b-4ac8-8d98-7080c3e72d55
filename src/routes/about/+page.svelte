<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Own the outcome",
    description: "You are accountable for real-world impactnot just lines of code or models trained. Decisions here shape operations where speed, safety, or billions are on the line."
  },
  {
    title: "Operate on the critical path",
    description: "We tackle only the hardest, most consequential problems in autonomy. No busywork. No endless cycles. Always move system performance forward."
  },
  {
    title: "Push technical boundaries",
    description: "We leverage new science, not just best practices. If a model, system, or infrastructure can be 10x better, we find a way to ship it."
  },
  {
    title: "Act with urgency and rigor",
    description: "Mission-critical work demands both velocity and precision. We move fast, experiment, run at riskalways with deep ownership over quality."
  }
];
</script>

<SecondaryHero
	title="Autonomous intelligence for critical missions"
	subtitle="Real-time decisions. Safer, faster, and more reliable than human operators—across air, sea, and land."
	imageSrc="/generated/image-a-diverse-team-in-a-modern-office-settin.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"GeoSpatios started with a simple observation: mission-critical operations run on manual work and fragmented data, even when high-level analytics exist. Our founder saw that frontline teams—pilots, dispatchers, and operators—were making tough calls with radios and spreadsheets, putting safety and efficiency at risk. GeoSpatios was built to move decision-making to the edge, where it truly matters.",
		"Instead of just building dashboards, we created AI-powered digital humans that can sense, predict, and make decisions in real time. Our technology acts as an extra brain for operations across air, sea, and land, helping teams respond instantly to changing situations and reduce costly mistakes.",
		"In our first two months, we signed $850K in contracts with major airlines and partners, and our platform is powering critical operations with proven results. With over $50M in our sales pipeline, our mission is clear: automate every frontline operation and help organizations turn chaos into fast, confident, and safe action."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Meet the founders."
  subtitle="Built by scientists. Trusted by operators."
  stakeholders={[
    {
      name: "Zilin Dong",
      position: "Founder & CEO",
      bio: "Physics and computer science at Vanderbilt; built $850K ARR in 2 months; early supercomputing experience.",
      image: "/generated/image-a-professional-headshot-of-an-asian-male.webp"
    },
    {
      name: "James Qian",
      position: "Founding Engineer",
      bio: "Stanford CS; published first on LLMs for AVS; 350 citations by age 20.",
      image: "/generated/image-a-professional-headshot-of-a-young-asian.webp"
    },
    {
      name: "Dr. Yutian Pang",
      position: "System Engineer",
      bio: "Aerospace engineering, UT Austin; ex-Thales MLE; built NASA ATM AI from scratch.",
      image: "/generated/image-a-professional-headshot-of-an-asian-male.webp"
    }
  ]}
/>

<!-- No investors to display at this stage -->

<!-- CTA Section -->
<CallToAction
  title="Ready to push operational AI further?"
  subtitle="Build the future of autonomous frontline operations"
  description="Join GeoSpatios to architect digital humans for the world’s most critical missions—across air, sea, land, and beyond. Tackle unsolved infrastructure challenges. Scale technology where real-time performance is non-negotiable. Every decision you build changes the way industries run."
  imageSrc="/generated/image-a-diverse-group-of-engineers-collaborati.webp"
  callsToAction={[
    { href: '/careers', label: 'See open roles', variant: 'primary' },
    { href: '/contact', label: 'Connect with us', variant: 'secondary' },
  ]}
/>
