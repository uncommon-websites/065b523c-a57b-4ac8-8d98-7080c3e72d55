/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
        label: "Autonomous flight operations",
        href: "/use-cases/autonomous-flight-operations",
        image: "/generated/image-a-team-of-airport-ground-staff-engaged-i.webp",
        description: "Respond to weather, reroute aircraft, and automate dispatch decisions instantly with AI digital humans in the control room.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Maritime logistics coordinator",
        href: "/use-cases/maritime-logistics-coordinator",
        image: "/generated/image-a-bustling-harbor-scene-with-diverse-per.webp",
        description: "Optimize port calls and shipping traffic by automating vessel routing and real-time hazard management—boosting safety at sea.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Grid & energy command automation",
        href: "/use-cases/grid-energy-command-automation",
        image: "/generated/image-a-busy-energy-control-room-filled-with-p.webp",
        description: "Balance the grid, predict outages, and automate contingency planning with AI digital agents in the operations center.",
        showInNav: true,
        showInFooter: true
      }
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
