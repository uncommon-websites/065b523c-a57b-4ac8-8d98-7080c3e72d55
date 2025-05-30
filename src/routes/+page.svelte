<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={true}
  title="Autonomous operations you can trust"
  subtitle="Trusted by mission-critical teams worldwide to sense, predict, and act in real time—across air, sea, and land."
  customers={[
    {
      name: "Jessica Lee",
      position: "Airline Operations Manager",
      imageSrc: "/generated/image-a-female-airline-operations-manager-at-a.webp"
    },
    {
      name: "Carlos Fernandez",
      position: "Maritime Executive",
      imageSrc: "/generated/image-a-male-maritime-executive-at-a-seaport-s.webp"
    },
    {
      name: "Priya Sharma",
      position: "Ground Logistics Supervisor",
      imageSrc: "/generated/image-a-female-ground-logistics-supervisor-on-.webp"
    },
    {
      name: "James Walker",
      position: "Air Traffic Controller",
      imageSrc: "/generated/image-a-male-air-traffic-controller-in-a-contr.webp"
    },
    {
      name: "Emily Chen",
      position: "Aviation Dispatcher",
      imageSrc: "/generated/image-a-female-aviation-dispatcher-in-her-offi.webp"
    }
  ]}
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/delta.com',
		'https://logo.clearbit.com/maersk.com',
		'https://logo.clearbit.com/united.com',
		'https://logo.clearbit.com/cosco.com'
	]}
/>

<Summary
	title="What we do"
	text="GeoSpatios builds AI-powered digital humans that turn real-time data into autonomous decisions for mission-critical operations. Our platform helps frontline teams in air, sea, and land operate faster, safer, and with more certainty."
/>

<Testimonials
	testimonials={[
		{
			name: "Svenja Mayer",
			position: "Director of Airport Operations",
			company: "Eurolift Airways",
			quote: "In our airport ops center, GeoSpatios AI simplified vectoring decisions and trimmed our average ground turnaround by 18 minutes per flight. That’s 7,500+ hours saved per month across the fleet.",
			image: "/generated/image-a-female-airport-operations-leader-in-a-.webp"
		},
		{
			name: "Diego Morales",
			position: "Port Operations Director",
			company: "Terminal Pacifico Sur",
			quote: "Since implementing GeoSpatios in our seaport authority’s control system, real-time hazard incidents have dropped by 22%. Risk alerts are faster and more context-aware than anything we had before.",
			image: "/generated/image-a-male-port-director-in-a-seaport-comman.webp"
		},
		{
			name: "Anusha Mehra",
			position: "Senior Risk Officer",
			company: "Bharat Energy Network",
			quote: "At our energy grid operations center, GeoSpatios enabled smarter load balancing and failure predictions. We’re now saving over $190,000 in monthly operational overhead.",
			image: "/generated/image-a-female-senior-risk-officer-in-an-energ.webp"
		}
	]}
/>

<Features
	generating
	title="Features"
	subtitle="Some features"
	features={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings."
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors."
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption."
		}
	]}
/>

<UseCases
  title="Use Cases"
  subtitle="Real-world applications for your mission-critical operations"
  useCases={[
    {
      title: "Autonomous flight operations",
      description: "Respond to weather, reroute aircraft, and automate dispatch decisions instantly with AI digital humans in the control room.",
      image: "/generated/image-a-team-of-airport-ground-staff-engaged-i.webp",
      link: {
        href: "/use-cases/autonomous-flight-operations",
        label: "Learn more"
      }
    },
    {
      title: "Maritime logistics coordinator",
      description: "Optimize port calls and shipping traffic by automating vessel routing and real-time hazard management—boosting safety at sea.",
      image: "/generated/image-a-bustling-harbor-scene-with-diverse-per.webp",
      link: {
        href: "/use-cases/maritime-logistics-coordinator",
        label: "Learn more"
      }
    },
    {
      title: "Grid & energy command automation",
      description: "Balance the grid, predict outages, and automate contingency planning with AI digital agents in the operations center.",
      image: "/generated/image-a-busy-energy-control-room-filled-with-p.webp",
      link: {
        href: "/use-cases/grid-energy-command-automation",
        label: "Learn more"
      }
    }
  ]}
/>


<AboutTeaser />
<CallToAction
  title="Operations don’t have to be chaos"
  subtitle="The edge in mission-critical decisions, every time"
  description="GeoSpatios creates AI-powered digital humans to make faster, safer, and more accurate decisions for frontline teams—in the air, on the ground, and at sea. Close loops in real time and automate operational calls where they matter most."
  imageSrc="/generated/image-a-cheerful-airport-operations-leader-exu.webp"
  callsToAction={[{
    href: '/contact',
    label: 'Request a demo',
    variant: 'primary'
  }]}
/>
