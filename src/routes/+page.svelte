<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import FullScreenTestimonials from "$lib/components/layout/FullScreenTestimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import LogoGrid from "$lib/components/layout/LogoGrid.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import ZigZagFeatures from "$lib/components/layout/ZigZagFeatures.svelte";
	import ContactForm from "$lib/components/layout/ContactForm.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import FAQ from "$lib/components/layout/FAQ.svelte";
	import FullScreenScrollFeatures from "$lib/components/layout/FullScreenScrollFeatures.svelte";
</script>

<CustomerCardHero
	centered={true}
	title="Cool operations you can trust"
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
		"https://logo.clearbit.com/delta.com",
		"https://logo.clearbit.com/maersk.com",
		"https://logo.clearbit.com/united.com",
		"https://logo.clearbit.com/cosco.com"
	]}
/>

<LogoGrid
	title="Partners across critical industries"
	logoUrls={[
		"https://logo.clearbit.com/boeing.com",
		"https://logo.clearbit.com/airbus.com",
		"https://logo.clearbit.com/ge.com",
		"https://logo.clearbit.com/rolls-royce.com",
		"https://logo.clearbit.com/lockheedmartin.com",
		"https://logo.clearbit.com/raytheon.com",
		"https://logo.clearbit.com/honeywell.com",
		"https://logo.clearbit.com/thalesgroup.com",
		"https://logo.clearbit.com/safran-group.com"
	]}
/>

<Summary
	title="What we do"
	text="GeoSpatios builds AI-powered digital humans that turn real-time data into autonomous decisions for mission-critical operations. Our platform helps frontline teams in air, sea, and land operate faster, safer, and with more certainty."
/>

<Features
	title="Platform capabilities"
	subtitle="AI-powered features that transform how mission-critical operations work"
	features={[
		{
			title: "Real-time data fusion",
			description:
				"Combine weather, traffic, and operational data into a single decision-making engine."
		},
		{
			title: "Autonomous routing",
			description: "AI agents optimize paths and routes in real-time based on changing conditions."
		},
		{
			title: "Predictive analytics",
			description: "Forecast operational challenges before they impact your mission."
		},
		{
			title: "Risk assessment",
			description: "Continuous hazard monitoring and automated risk scoring."
		},
		{
			title: "Decision automation",
			description: "AI digital humans make split-second operational decisions."
		},
		{
			title: "Multi-domain operations",
			description: "Unified platform for air, sea, and land operations."
		}
	]}
/>

<FullScreenScrollFeatures
	title="Advanced capabilities"
	subtitle="Experience our platform's powerful features through immersive demonstrations"
	features={[
		{
			title: "Real-time data processing",
			description:
				"Process millions of data points from weather, traffic, and operational systems in real-time. Our AI engines analyze patterns and anomalies to provide instant insights for critical decision-making across all operational domains.",
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&crop=center"
		},
		{
			title: "Autonomous decision engine",
			description:
				"AI digital humans make split-second operational decisions based on comprehensive data analysis. From flight routing to maritime navigation, our autonomous systems handle complex scenarios with precision and reliability.",
			image:
				"https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=2718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Predictive risk assessment",
			description:
				"Advanced machine learning models predict potential hazards and operational challenges before they occur. Our system continuously monitors conditions and provides early warnings to prevent incidents and optimize performance.",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&crop=center"
		},
		{
			title: "Multi-domain coordination",
			description:
				"Seamlessly coordinate operations across air, sea, and land domains. Our unified platform ensures consistent decision-making and communication between different operational environments and teams.",
			image:
				"https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1600&h=900&fit=crop&crop=center"
		}
	]}
/>

<FullScreenTestimonials
	testimonials={[
		{
			name: "Dr. Sarah Mitchell",
			position: "Practice Manager",
			company: "Riverside Medical Centre",
			quote:
				"In our airport ops center, GeoSpatios AI simplified vectoring decisions and trimmed our average ground turnaround by 18 minutes per flight. That’s 7,500+ hours saved per month across the fleet.",
			image:
				"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=1600&fit=crop&crop=center"
		},
		{
			name: "James Thompson",
			position: "Clinical Director",
			company: "North London Health Network",
			quote:
				"Since implementing GeoSpatios in our seaport authority’s control system, real-time hazard incidents have dropped by 22%. Risk alerts are faster and more context-aware than anything we had before.",
			image:
				"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&h=1600&fit=crop&crop=center"
		},
		{
			name: "Dr. Priya Patel",
			position: "GP Partner",
			company: "Westfield Surgery",
			quote:
				"At our energy grid operations center, GeoSpatios enabled smarter load balancing and failure predictions. We’re now saving over $190,000 in monthly operational overhead.",
			image:
				"https://plus.unsplash.com/premium_photo-1664475477169-46b784084d4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww"
		}
	]}
/>

<ZigZagFeatures
	title="How we transform healthcare delivery"
	subtitle="Our remote GP workforce integrates seamlessly with your existing systems to deliver clinical excellence at scale"
	features={[
		{
			title: "Seamless integration with NHS systems",
			description:
				"Our remote GPs work directly within your existing NHS-approved clinical systems. No workflow changes, no training required—just immediate access to qualified medical professionals when you need them most.",
			imageSrc:
				"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=3428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageAlt: "Healthcare professional working on computer systems"
		},
		{
			title: "24/7 coverage with global expertise",
			description:
				"Leverage time zone differences to provide round-the-clock GP coverage. Our UK GMC-registered doctors, many former UK and Australian GPs, deliver consistent clinical quality regardless of the hour.",
			imageSrc:
				"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
			imageAlt: "Medical professionals working in different time zones"
		},
		{
			title: "Flexible staffing that scales with demand",
			description:
				"From single GP practices to large NHS providers, our contractor model adapts to your needs. Scale up during peak periods, maintain coverage during staff shortages, all while reducing overhead costs by up to 60%.",
			imageSrc:
				"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center",
			imageAlt: "Healthcare team collaboration and planning"
		},
		{
			title: "Clinical administration excellence",
			description:
				"Our GPs handle complex clinical administration tasks—interpreting blood tests, document reviews, medical certifications—with the same expertise as your in-house team, but at a fraction of the cost.",
			imageSrc:
				"https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center",
			imageAlt: "Medical documentation and clinical review process"
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your mission-critical operations"
	useCases={[
		{
			title: "Autonomous flight operations",
			description:
				"Respond to weather, reroute aircraft, and automate dispatch decisions instantly with AI digital humans in the control room.",
			image: "/generated/image-a-team-of-airport-ground-staff-engaged-i.webp",
			link: {
				href: "/use-cases/autonomous-flight-operations",
				label: "Learn more"
			}
		},
		{
			title: "Maritime logistics coordinator",
			description:
				"Optimize port calls and shipping traffic by automating vessel routing and real-time hazard management—boosting safety at sea.",
			image: "/generated/image-a-bustling-harbor-scene-with-diverse-per.webp",
			link: {
				href: "/use-cases/maritime-logistics-coordinator",
				label: "Learn more"
			}
		},
		{
			title: "Grid & energy command automation",
			description:
				"Balance the grid, predict outages, and automate contingency planning with AI digital agents in the operations center.",
			image: "/generated/image-a-busy-energy-control-room-filled-with-p.webp",
			link: {
				href: "/use-cases/grid-energy-command-automation",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />

<FAQ
	title="Frequently asked questions"
	subtitle="Everything you need to know about our autonomous operations platform"
	faqs={[
		{
			question: "How does the AI make autonomous decisions?",
			answer:
				"Our AI digital humans process real-time data from multiple sources including weather, traffic, and operational systems. They use advanced machine learning models to analyze patterns, predict outcomes, and make split-second decisions based on safety protocols and operational efficiency parameters."
		},
		{
			question: "What industries can benefit from GeoSpatios?",
			answer:
				"We serve mission-critical operations across aviation (airlines, airports, air traffic control), maritime (shipping, ports), ground logistics, space operations, energy grid management, and insurance. Any industry requiring real-time operational decisions can benefit from our platform."
		},
		{
			question: "How quickly can we see results after implementation?",
			answer:
				"Most clients see immediate improvements in decision speed and accuracy. Within the first month, typical results include 15% reduction in delays, 4.5% reduction in fuel costs, and 20% reduction in hazard encounters. Full optimization usually occurs within 90 days."
		},
		{
			question: "Is the platform secure for mission-critical operations?",
			answer:
				"Absolutely. GeoSpatios is built with enterprise-grade security and compliance standards. We work with government agencies and critical infrastructure operators, ensuring our platform meets the highest security requirements for sensitive operational data."
		},
		{
			question: "How does GeoSpatios integrate with existing systems?",
			answer:
				"Our platform is designed for seamless integration with existing operational systems. We provide APIs and SDKs that connect with your current infrastructure, requiring minimal workflow changes while maximizing the value of your existing data investments."
		},
		{
			question: "What kind of support do you provide during implementation?",
			answer:
				"We provide comprehensive support including dedicated implementation specialists, training for your team, 24/7 technical support, and ongoing optimization consultations. Our goal is to ensure smooth adoption and maximum value realization from day one."
		}
	]}
/>

<CallToAction
	title="Operations don’t have to be chaos"
	subtitle="The edge in mission-critical decisions, every time"
	description="GeoSpatios creates AI-powered digital humans to make faster, safer, and more accurate decisions for frontline teams—in the air, on the ground, and at sea. Close loops in real time and automate operational calls where they matter most."
	imageSrc="/generated/image-a-cheerful-airport-operations-leader-exu.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Request a demo",
			variant: "primary"
		}
	]}
/>

<ContactForm />
