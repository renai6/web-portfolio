import { link } from "fs";

export const experiences = [
  {
    company: "Grow Inc.",
    industry: ["Insurance Technology", "FinTech"],
    role: "Senior Software Engineer",
    period: "Feb 2025 - Present",
    stack: [
      "Java",
      "Node.js",
      "Auth0",
      "Koa.js",
      "JavaScript",
      "Styled-Components",
      "Tailwind",
      "Vue.js",
      "AWS",
    ],
    description: [
      "Developed and maintained Admin Dashboard insurance features, improving usability and reliability.",
      "Implemented conditional insurance properties and metrics calculations based on business rules.",
      "Built secure onboarding and authentication flows using Auth0.",
      "Led Node.js codebase upgrades improving performance and maintainability.",
      "Maintained insurance platforms for multiple providers with dynamic product requirements.",
    ],
  },
  {
    company: "Bounty Media",
    industry: ["Advertising & Marketing Technology", "SaaS Platforms"],
    role: "Senior Full Stack Developer",
    period: "Apr 2022 - Feb 2025",
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "MySQL",
      "AWS",
      "TypeScript",
    ],
    description: [
      "Developed a high-traffic voucher redemption platform handling 60,000 simultaneous users.",
      "Built analytics dashboards, webhook integrations, and consumer verification systems.",
      "Redesigned login interfaces, campaign builders, and admin pages.",
      "Optimized connection filter latency and implemented bulk voucher imports.",
    ],
  },
  {
    company: "Orchid",
    industry: ["E-commerce", "SaaS Platforms"],
    role: "Full Stack Developer",
    period: "Apr 2022 - Mar 2023",
    stack: ["React", "Next.js", "MongoDB", "Express.js", "Material UI"],
    description: [
      "Converted Excel-based material management workflows into scalable web applications.",
      "Built dashboards, recommendation systems, and artwork management interfaces.",
      "Implemented optimized list-based data fetching and responsive dashboards.",
    ],
  },
  {
    company: "EXCO IT Services",
    industry: ["SaaS Platforms"],
    role: "Senior Software Developer",
    period: "Aug 2019 - Aug 2022",
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize"],
    description: [
      "Mentored junior developers and enforced software quality standards.",
      "Built hotel, restaurant, and real estate management applications.",
      "Maintained budget estimation systems and property management platforms.",
    ],
  },
  {
    company: "Rightjob Solutions",
    industry: ["SaaS Platforms"],
    role: "Software Developer",
    period: "May 2017 - Aug 2019",
    stack: ["React", "Vue", "PHP", "MySQL", "WordPress"],
    description: [
      "Developed project management and budget estimation applications.",
      "Created company landing pages using WordPress.",
      "Performed testing and evaluation for new and existing applications.",
    ],
  },
];

export const projects = [
  {
    title: "Member Online (MOL)",
    link: "https://www.grow.inc/products-and-services/mol",
    year: "2026",
    description:
      "Insurance platform simplifying online member engagement and onboarding with secure authentication, synchronization systems, and scalable architecture.",
    tech: ["Vue.js", "Node.js", "Java", "Koa.js", "Styled Components", "AWS"],
  },
  {
    title: "Admin Online (AOL)",
    link: "https://www.grow.inc/products-and-services/aol",
    year: "2026",
    description:
      "Administrator dashboard platform providing real-time insurance operations management, metrics calculations, and advanced validation systems.",
    tech: ["Vue.js", "Node.js", "Java", "Koa.js", "Styled Components", "AWS"],
  },
  {
    title: "Raya POS",
    link: "https://github.com/renai6/raya-ui",
    year: "2026",
    description:
      "Modern offline-capable POS system for retail and canteen operations with inventory management, barcode scanning, receipt printing, and multi-branch scalability.",
    tech: [
      "React",
      "Tanstack React Query",
      "Tanstack Router",
      "NestJS",
      "Tailwind",
      "Shadcn",
      "Zustand",
    ],
  },
  {
    title: "PCG Paper Management System",
    link: "https://pcg-observer.vercel.app/auth",
    year: "2026",
    description:
      "A centralized Paper Management System designed for Local Government Units (LGUs) to streamline document handling, tracking, approval workflows, and records management across departments. The system enables efficient digital submission, routing, monitoring, and archiving of official documents, reducing paperwork, improving transparency, and accelerating government processes.",
    tech: ["Next.js", "React", "Node.js", "Tailwind", "Shadcn", "Zustand"],
  },
  {
    title: "Consumer Voucher Redemption",
    link: "https://www.linkedin.com/company/bountymedia/posts/?feedView=images",
    year: "2024",
    description:
      "High-traffic voucher redemption platform optimized for 60,000 concurrent users with analytics integrations and user verification systems.",
    tech: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "React Query",
      "Node.js",
      "Google APIs",
      "TypeScript",
    ],
  },
  {
    title: "Campaign Management Dashboard",
    link: "https://www.linkedin.com/company/bountymedia/posts/?feedView=images",
    year: "2024",
    description:
      "Dynamic admin dashboard and campaign builder with analytics, webhook integrations, and optimized filtering systems.",
    tech: ["React", "Node.js", "TypeScript", "Webhook APIs"],
  },
  {
    title: "Material Management System",
    year: "2023",
    description:
      "Migrated manual Excel-based workflows into a scalable web platform with recommendation systems and advanced dashboarding.",
    tech: ["React", "NestJS", "AWS", "TypeORM"],
  },
  {
    title: "Real Estate Management System",
    link: "https://ssrei.ch/",
    year: "2021",
    description:
      "Property management platform supporting office and commercial property evaluation, metrics calculations, and CSV import workflows.",
    tech: ["React", "Node.js", "MySQL", "Redux"],
  },
  {
    title: "Budget Estimation Tool",
    link: "https://careum.ch/en/home",
    year: "2019",
    description:
      "Budget estimation and management application with reporting modules, dashboards, import tools, and scalable API architecture.",
    tech: ["React", "Node.js", "MySQL", "Redux"],
  },
];

export const socials = [
  {
    name: "GitHub",
    link: "https://github.com/renai6/",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-gray-200"
        aria-hidden
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.11-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92.429.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raaeeli/",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-green-400"
        aria-hidden
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.966 0-1.75-.784-1.75-1.75 0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .966-.784 1.75-1.75 1.75zm13.5 10.3h-3v-4.5c0-1.074-.926-1.5-1.5-1.5-.574 0-1.5.426-1.5 1.5v4.5h-3v-9h3v1.25c.574-.87 1.926-1.25 2.5-1.25 1.5 0 3 1 3 3.5v5.5z" />
      </svg>
    ),
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/9038359/ayeksius",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-orange-400"
        aria-hidden
      >
        <path d="M17.817 20.452v-4.5h1.9v6.5h-13v-6.5h1.9v4.5h9.2z" />
        <path d="M7.376 17.998l8.332 1.64.418-1.886-8.332-1.64-.418 1.886z" />
        <path d="M8.508 14.39l7.696 3.292.792-1.85-7.696-3.292-.792 1.85z" />
        <path d="M10.356 10.396l6.614 4.878.992-1.345-6.614-4.878-.992 1.345z" />
        <path d="M16.24 6.063l-.854 1.674 4.02 2.053.854-1.673-4.02-2.054z" />
      </svg>
    ),
  },
];
