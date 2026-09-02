import nutritionplanner from "../../images/explain.mp4";
import jabe from "../../images/jabe.png";
import poilei_cookies from "../../images/poilei_cookies.png";
import glowingkids from "../../images/glowingkids.png";
import pscore_abuse from "../../images/pscore_abuse.png";
import pscore_digital from "../../images/pscore_digital.png";
import pscore_seminar from "../../images/pscore_seminar.png";
import pscore_workshop from "../../images/pscore_workshop.png";
import pscoreedu_register from "../../images/pscoreedu_register.png";
import pscoreedu_1 from "../../images/pscoreedu_1.png";
import pscoreedu_2 from "../../images/pscoreedu_2.png";
import munscr from "../../images/munscr.png";
import modelunsf from "../../images/modelunsf.png";
import twotickets_redesign from "../../images/twotickets_redesign.png";
import twotickets_filter from "../../images/twotickets_filter.png";
import twotickets_vattenfall_4 from "../../images/twotickets_vattenfall_4.png";
import webBagRecorder from "../../images/webBagRecorder.mp4";
import webBagPlayer from "../../images/webBagPlayer.mp4";
import webUpdater from "../../images/webUpdater.mp4";
import webBagPlayerPoster from "../../images/webBagPlayer_poster.png";
import webBagRecorderPoster from "../../images/webBagRecorder_poster.png";
import webUpdaterPoster from "../../images/webUpdater_poster.png";
import fmsDashboard from "../../images/fms_dashboard.mp4";
import fmsAdminZones from "../../images/fms_admin_zones.png";
import fmsAdminNotify from "../../images/fms_admin_notify.png";
import fmsMobileWO from "../../images/mobile_WO.png";
import fmsMobileWODetail from "../../images/mobile_WO_detail.png";
import fmsMobileGSE from "../../images/mobile_GSE.png";
import fmsMobileFS from "../../images/mobile_FS.png";
import fmsMobileWOStart from "../../images/mobile_startWO.png";
import mobileLottiChat from "../../images/mobile_lotti_chat.png";
import mobileLottiChat2 from "../../images/mobile_lotti_chat2.png";
import mobileLottiAllChats from "../../images/mobile_lotti_allChats.png";
import lottiExplore from "../../images/lotti_explore.png";
import mobileLottiSTT from "../../images/mobile_lotti_stt.mp4";
import chagos1 from "../../images/chagos1.png";
import chagos2 from "../../images/chagos2.png";
import chagos3 from "../../images/chagos3.png";
import lottiThumbnail from "../../images/lotti_small.png";
import chagosThumbnail from "../../images/chagos_smal.png";
import fmsThumbnail from "../../images/fms_small.png";
import webVisualizerThumbnail from "../../images/webVisualizer_small2.png";
import twoticketsThumbnail from "../../images/twotickets_small.png";
import sciendisPharmacyCardLink from "../../images/sciendis-pharmacy-cardlink.mov";
import sciendisWebAppDashboard from "../../images/sciendis-web-app1.png";
import sciendisWebAppPatient from "../../images/sciendis-web-app2.png";
import sciendisWebAppUsers from "../../images/sciendis-web-app3.png";
import sciendisNfcIntegration from "../../images/sciendis-integration-nfc-module.mov";
import sciendisNfcScan from "../../images/sciendis-nfc-module-integration1.png";
import sciendisNfcResult from "../../images/sciendis-nfc-module-integration2.png";
import sciendisMobileApp from "../../images/sciendis-mobile-app.mov";
import sciendisMobileDashboard from "../../images/sciendis-mobile-app1.png";
import sciendisMobilePatient from "../../images/sciendis-mobile-app2.png";
import sciendisMobileWound from "../../images/sciendis-mobile-app3.png";
import sciendisCardLinkConnect from "../../images/sciendis-cardlink1.png";
import sciendisCardLinkCart from "../../images/sciendis-cardlink2.png";

export interface ProjectCardData {
  key: string;
  slug: string;
  title: string;
  context: string;
  summary: string;
  role: string;
  technologies: string[];
  image?: string;
  imageDisplay?: "cover" | "contain" | "contain-full";
  mediaKind?: "web" | "mobile";
  visualWords?: string[];
  featured: boolean;
}

export interface ExperienceData {
  period: string;
  company: string;
  location: string;
  title: string;
  description: string;
  highlights?: string[];
}

export interface ProjectDetailData {
  imgs?: string[];
  imgTitle?: string[];
  mobileImgs?: string[];
  mobileImgTitle?: string[];
  vids?: string[];
  mobileVids?: string[];
  poster?: string[];
  vidTitle?: string[];
  cardTitle: string;
  cardText: string;
  period?: string;
  role?: string;
  focus?: string[];
  stack?: string[];
  sections?: Array<{
    eyebrow: string;
    title: string;
    body: string;
    points?: string[];
  }>;
  buttonWebsite?: string;
  buttonCode?: string;
  buttonAffiliate?: string;
}

const projectStacks: Record<string, string[]> = {
  sciendisPlatform: [
    "React",
    "React Native",
    "Expo",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "Storybook",
    "Vite",
    "Next.js",
    "Kysely",
    "SQLite",
    "Strapi",
  ],
  sciendisEgk: [
    "Expo",
    "Expo Modules",
    "React Native",
    "Swift",
    "Kotlin",
    "C++",
    "NFC",
    "OpenHealthCardKit",
  ],
  sciendisCardlink: [
    "Expo",
    "Expo Modules",
    "React Native",
    "React Native WebView",
    "Swift",
    "Android",
    "CardLink SDK",
    "FHIR",
  ],
  FMS: [
    "React",
    "React Native",
    "Leaflet",
    "Java Spring Boot",
    "Redis",
    "ROS",
  ],
  webVisualizer: ["React", "Python", "C++", "ROS", "rosbridge"],
  lotti: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "OpenAI",
  ],
  theChagos: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "tRPC",
    "Prisma",
    "Zod",
  ],
  twotickets: ["Python", "Django", "PostgreSQL", "JavaScript", "SCSS"],
  ngoWork: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
};

export const projects: ProjectCardData[] = [
  {
    key: "sciendisPlatform",
    slug: "wundera-healthcare-platform",
    title: "WUNDERA Healthcare Platform",
    context: "Web · Mobile · White label · sciendis",
    summary:
      "Compatible WUNDERA® web and mobile products supported by privately versioned packages shared across white-label healthcare applications.",
    role: "Senior Frontend Developer · Frontend Team Lead",
    technologies: projectStacks.sciendisPlatform,
    image: sciendisWebAppDashboard,
    imageDisplay: "contain-full",
    mediaKind: "web",
    featured: true,
  },
  {
    key: "sciendisEgk",
    slug: "expo-nfc-module",
    title: "Expo NFC Module",
    context: "WUNDERA native integration · sciendis",
    summary:
      "A native module integrated into WUNDERA Mobile for securely reading German electronic health cards through Swift and Kotlin.",
    role: "Technical Owner · Native Mobile Developer",
    technologies: projectStacks.sciendisEgk,
    image: sciendisNfcScan,
    imageDisplay: "contain",
    mediaKind: "mobile",
    featured: true,
  },
  {
    key: "sciendisCardlink",
    slug: "online-pharmacy-cardlink",
    title: "Online Pharmacy & CardLink",
    context: "Independent pharmacy app · sciendis",
    summary:
      "An independent Expo pharmacy app with a local native CardLink module built and released with the application.",
    role: "Technical Project Owner · Mobile Developer",
    technologies: projectStacks.sciendisCardlink,
    image: sciendisCardLinkCart,
    imageDisplay: "contain",
    mediaKind: "mobile",
    featured: true,
  },
  {
    key: "FMS",
    slug: "fleet-management-system",
    title: "Fleet Management System",
    context: "Autonomous mobility · ThorDrive",
    summary:
      "A web and mobile system for monitoring autonomous airport luggage vehicles and coordinating their daily work orders.",
    role: "Frontend Lead Developer",
    technologies: projectStacks.FMS,
    image: fmsThumbnail,
    imageDisplay: "contain-full",
    mediaKind: "web",
    featured: true,
  },
  {
    key: "webVisualizer",
    slug: "thordrive-webviz",
    title: "ThorDrive WebViz",
    context: "Autonomous mobility · ThorDrive",
    summary:
      "A browser-based engineering interface that turned complex ROS workflows into practical tools for testing and operating autonomous vehicles.",
    role: "Software Engineer",
    technologies: projectStacks.webVisualizer,
    image: webVisualizerThumbnail,
    imageDisplay: "contain-full",
    mediaKind: "web",
    featured: true,
  },
  {
    key: "lotti",
    slug: "lotti-ai",
    title: "Lotti.ai",
    context: "AI-enabled education · Teclead Ventures",
    summary:
      "An approachable AI-powered web and mobile product delivered in a consulting environment, helping people over 50 navigate digital life.",
    role: "React Native Lead Developer",
    technologies: projectStacks.lotti,
    image: lottiThumbnail,
    imageDisplay: "contain-full",
    mediaKind: "web",
    featured: true,
  },
  {
    key: "theChagos",
    slug: "the-chagos",
    title: "The Chagos",
    context: "Real-estate SaaS · Teclead Ventures",
    summary:
      "A typed full-stack SaaS platform developed from requirements to implementation, helping construction projects make more sustainable product decisions.",
    role: "Full-Stack Developer",
    technologies: projectStacks.theChagos,
    image: chagosThumbnail,
    featured: false,
  },
  {
    key: "twotickets",
    slug: "twotickets",
    title: "TwoTickets.de",
    context: "Culture platform · TwoTickets.de",
    summary:
      "A Germany-wide event calendar and city-explorer club, combining Django platform development with UI modernization, QA and team support.",
    role: "Full-Stack Web Developer",
    technologies: projectStacks.twotickets,
    image: twoticketsThumbnail,
    featured: false,
  },
  {
    key: "ngoWork",
    slug: "ngo-human-rights-projects",
    title: "NGO & Human Rights Projects",
    context: "PSCORE · Education · Conferences",
    summary:
      "Websites supporting human-rights advocacy, education and international conferences focused on North Korea and reunification.",
    role: "Web Developer · Digital Contributor",
    technologies: projectStacks.ngoWork,
    image: pscore_digital,
    featured: false,
  },
];

export const experience: ExperienceData[] = [
  {
    period: "Aug 2024 — Sep 2026",
    company: "sciendis GmbH",
    location: "Leipzig · Remote",
    title: "Senior Frontend Developer · Frontend Team Lead",
    description:
      "My biggest professional milestone so far: leading frontend delivery across sciendis’ own healthcare products and customer-specific white-label solutions while remaining hands-on in architecture, web, mobile and native development.",
    highlights: [
      "Led frontend architecture, planning, reviews and mentoring across healthcare web and mobile products",
      "Built and privately published versioned TypeScript packages consumed by WUNDERA®, Wundumsorglos® and white-label applications",
      "Owned native Gematik integrations spanning eGK NFC, PACE and CardLink from concept to production",
    ],
  },
  {
    period: "Oct 2023 — Apr 2024",
    company: "Teclead Ventures GmbH",
    location: "Berlin",
    title: "Full-Stack Developer & Consultant",
    description:
      "Combined hands-on software development with management consulting in a company delivering architecture, technology coaching and digital products for enterprise clients. My work covered requirements, implementation and software architecture across real-estate SaaS and AI-enabled education.",
    highlights: [
      "Translated product and consulting requirements into typed web, mobile and full-stack architectures",
      "Built React/Next.js features and APIs for a real-estate sustainability platform",
      "Independently designed and delivered Lotti’s React Native application from the ground up",
    ],
  },
  {
    period: "Jul 2021 — Aug 2023",
    company: "ThorDrive Co. Ltd.",
    location: "Seoul",
    title: "Software Engineer",
    description:
      "Built engineering and operational interfaces at the intersection of frontend development, mobile workflows and autonomous systems.",
    highlights: [
      "Led frontend development of a fleet management system for autonomous airport luggage vehicles",
      "Built the complementary React Native workflows used by airport ground workers",
      "Connected browser-based React tooling with Python/C++ ROS services for vehicle testing",
    ],
  },
  {
    period: "Oct 2017 — Mar 2021",
    company: "TwoTickets.de GmbH & Co. KG",
    location: "Berlin",
    title: "Full-Stack Web Developer",
    description:
      "Developed and maintained the frontend and backend of a Germany-wide event calendar and city-explorer club. The role also included UI implementation, quality assurance, recruiting support and ten months of independent remote work from abroad.",
    highlights: [
      "Developed and modernized the Django/PostgreSQL platform across frontend and backend",
      "Redesigned core discovery, event and affiliate experiences with HTML, SCSS and JavaScript",
      "Contributed to QA, recruiting and onboarding while working independently across locations",
    ],
  },
];

export const data: Record<string, ProjectDetailData> = {
  sciendisPlatform: {
    imgs: [sciendisWebAppDashboard, sciendisWebAppPatient, sciendisWebAppUsers],
    imgTitle: [
      "WUNDERA dashboard and analytics",
      "Digital patient record",
      "User and license management",
    ],
    mobileImgs: [
      sciendisMobileDashboard,
      sciendisMobilePatient,
      sciendisMobileWound,
    ],
    mobileImgTitle: [
      "Mobile dashboard and synchronization status",
      "Mobile patient and wound overview",
      "Mobile wound-report workflow",
    ],
    mobileVids: [sciendisMobileApp],
    poster: [sciendisMobileDashboard],
    vidTitle: ["WUNDERA mobile healthcare workflows"],
    cardTitle: "WUNDERA Healthcare Platform",
    cardText:
      "WUNDERA® is a healthcare product ecosystem spanning compatible web, mobile and customer-specific white-label applications. I led frontend architecture and hands-on development across these products, supported by a shared platform of privately versioned TypeScript packages.",
    period: "2024–2026",
    role: "Frontend Team Lead · Architecture Owner",
    focus: [
      "Web and mobile",
      "White-label platform",
      "Frontend architecture",
      "Shared TypeScript monorepo",
    ],
    stack: projectStacks.sciendisPlatform,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Shared capabilities across independent products",
        body: "WUNDERA’s web and mobile applications and its individually branded white-label products needed many of the same UI components, data-access patterns, CMS integrations and mobile capabilities. At the same time, each product retained its own workflows, branding and release cycle.",
      },
      {
        eyebrow: "Approach",
        title: "A privately versioned TypeScript platform",
        body: "I established a dedicated monorepo and published its packages privately within the company’s npm organization. It provided a shared technical foundation without coupling the consuming applications to a single codebase or release process.",
        points: [
          "Shared React and React Native component libraries, with Storybook for UI development and documentation",
          "Kysely-based SQLite repositories and consistent read/write patterns",
          "A reusable synchronization package for WUNDERA Mobile and white-label apps",
          "A generic REST integration for Strapi-managed content",
        ],
      },
      {
        eyebrow: "Implementation",
        title: "Adoption across web, mobile and white-label applications",
        body: "I designed the central packages and supported their adoption while continuing to evolve the consuming products. This included upgrading Expo SDK 51 to 53, migrating structured mobile persistence to expo-sqlite, separating Redux Persist state from SQLite domain data and migrating a web application from Next.js to Vite. Alongside implementation, I owned technical planning, architecture decisions, reviews and mentoring for the frontend team.",
      },
      {
        eyebrow: "Outcome",
        title: "Shared foundations without shared release constraints",
        body: "WUNDERA and its white-label applications could adopt reusable capabilities through explicit package versions while remaining independently branded and released. Common improvements were maintained centrally instead of being implemented separately in every product. Native eGK functionality built for WUNDERA is presented in the dedicated Expo NFC case study.",
      },
    ],
  },
  sciendisEgk: {
    mobileImgs: [sciendisNfcScan, sciendisNfcResult],
    mobileImgTitle: [
      "Native NFC prompt ready to scan an electronic health card",
      "Patient form populated with data read from the electronic health card",
    ],
    mobileVids: [sciendisNfcIntegration],
    poster: [sciendisNfcScan],
    vidTitle: [
      "Integrating the cross-platform Expo NFC module into the healthcare application",
    ],
    cardTitle: "Expo NFC Module",
    cardText:
      "I developed a cross-platform Expo module that reads German electronic health cards securely and exposes validated patient data through a typed API. The module was integrated into WUNDERA Mobile.",
    period: "2024–2026",
    role: "Technical Owner · Native Mobile Developer",
    focus: [
      "Secure NFC",
      "Cross-platform native modules",
      "Platform-specific NFC UX",
      "Patient workflows",
    ],
    stack: projectStacks.sciendisEgk,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Secure eGK functionality beyond Expo’s standard APIs",
        body: "Expo did not provide the required functionality for authenticating and reading German electronic health cards. The application needed one reliable interface while the underlying NFC and cryptographic behavior differed significantly between iOS and Android.",
      },
      {
        eyebrow: "Implementation",
        title: "One typed API, two native implementations",
        body: "I designed a consistent, typed API for the Expo application and implemented the platform-specific functionality natively. On iOS, I integrated gematik’s OpenHealthCardKit in Swift. On Android, I implemented PACE authentication, cryptographic key exchange and secure NFC communication in Kotlin.",
      },
      {
        eyebrow: "Android experience",
        title: "A custom NFC scanning flow for Android",
        body: "Unlike iOS, Android did not provide the system NFC scanning sheet required for this workflow. I therefore designed and implemented the application-level NFC bottom sheet myself, giving users a consistent place for scanning guidance and NFC state feedback while the native module handled communication with the card.",
      },
      {
        eyebrow: "Outcome",
        title: "From health card to patient workflow",
        body: "Integrated into WUNDERA Mobile, the module made validated eGK data available to existing patient and wound-care workflows and reduced the need to enter the same patient information manually.",
      },
    ],
    buttonCode: "https://github.com/gematik/ref-openhealthcardkit",
  },
  sciendisCardlink: {
    mobileImgs: [sciendisCardLinkConnect, sciendisCardLinkCart],
    mobileImgTitle: [
      "CardLink contact details and connection workflow",
      "Electronic prescription transferred into the pharmacy cart",
    ],
    mobileVids: [sciendisPharmacyCardLink],
    poster: [sciendisCardLinkConnect],
    vidTitle: ["Retrieving an electronic prescription through CardLink"],
    cardTitle: "Online Pharmacy & CardLink",
    cardText:
      "I developed an independent Expo pharmacy application that combined an existing web shop with native CardLink functionality for retrieving electronic prescriptions.",
    period: "2024–2026",
    role: "Technical Project Owner · Mobile Developer",
    focus: [
      "Web/native integration",
      "Local Expo module architecture",
      "Platform-specific NFC UX",
      "Electronic prescriptions",
      "Healthcare interoperability",
    ],
    stack: projectStacks.sciendisCardlink,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Adding native e-prescriptions without rebuilding the shop",
        body: "The existing pharmacy shop was web-based, while CardLink required native iOS and Android integration. The mobile product needed to connect both environments without duplicating the complete commerce interface in React Native.",
      },
      {
        eyebrow: "Architecture",
        title: "A WebView bridge with a local Expo module",
        body: "I embedded the shop in a React Native WebView and connected it to native application code through injected JavaScript and WebView message events. The custom Expo module lived inside the application codebase and was compiled, versioned and released together with the iOS and Android app rather than installed as a separate npm dependency.",
      },
      {
        eyebrow: "Implementation",
        title: "From native CardLink to application-ready data",
        body: "I integrated the CardLink SDK through Swift and Android code, transformed returned FHIR XML prescriptions into a simplified JSON structure and implemented the missing Android NFC bottom sheet for scanning guidance and state feedback.",
      },
      {
        eyebrow: "Outcome",
        title: "One product across web and native workflows",
        body: "The resulting application retained the established shopping experience while adding native electronic-prescription retrieval. Web, Expo and platform-specific changes could be developed and released together as one product.",
      },
    ],
  },
  nutritionplanner: {
    vids: [nutritionplanner],
    vidTitle: ["Personalized meal-plan generation and calendar workflow"],
    cardTitle: "Meal Plan Optimization",
    cardText:
      "My bachelor thesis combined mathematical optimization with a Django application to generate personalized meal plans from nutritional requirements and user preferences.",
    role: "Research · Full-Stack Development",
    focus: ["Optimization model", "Meal-plan generation", "Applied research"],
    stack: ["Python", "Django", "Linear Programming", "jQuery", "Bootstrap"],
    sections: [
      {
        eyebrow: "Challenge",
        title: "Turning nutritional constraints into meal plans",
        body: "I formulated meal-plan generation as a linear optimization problem. The model selected appropriate foods and quantities based on nutritional requirements, supported diets and individual eating preferences.",
      },
      {
        eyebrow: "Implementation",
        title: "Making the model usable through the web",
        body: "I implemented the application with Python and Django and presented generated plans in a calendar overview with PDF export. The interface remained deliberately simple because the primary focus of the thesis was the optimization logic.",
      },
    ],
  },
  ngoWork: {
    imgs: [pscore_digital, pscoreedu_register, munscr, modelunsf],
    imgTitle: [
      "Digital Life and Digital Rights information page",
      "PSCORE EDU student and tutor registration",
      "MUNSCR conference website",
      "ModelUNSF conference website",
    ],
    cardTitle: "NGO & Human Rights Projects",
    cardText:
      "I supported PSCORE’s human-rights, education and international-conference initiatives through a group of WordPress websites.",
    role: "Web Developer · Digital Contributor",
    focus: ["Human-rights communication", "Education", "Conference platforms"],
    stack: projectStacks.ngoWork,
    sections: [
      {
        eyebrow: "Context",
        title: "Digital platforms for advocacy and education",
        body: "PSCORE needed accessible websites for human-rights information, tutoring programs and recurring international conferences focused on North Korea and reunification.",
      },
      {
        eyebrow: "Contribution",
        title: "One contribution across several initiatives",
        body: "I created information pages, improved usability and maintained the main PSCORE website. For PSCORE EDU, I added a PHP extension supporting registration administration; for MUNSCR and ModelUNSF, I designed and developed dedicated conference websites from scratch.",
      },
    ],
  },
  jabe: {
    imgs: [jabe],
    imgTitle: ["JABE restaurant website"],
    cardTitle: "JABE",
    cardText:
      "The JABE is a Japanese restaurant I created the website for and maintained for some time. " +
      "This eight month project is a static and plain HTML, CSS and jQuery website. It is solely used to " +
      "present the restaurant, therefore the whole ordering process is outsourced. Besides I integrated " +
      "the Facebook tracking pixel for marketing services.",
  },
  poilei: {
    imgs: [poilei_cookies],
    imgTitle: ["Poilei cookie-consent implementation"],
    cardTitle: "Poilei",
    cardText:
      "Poilei is an Italian shoe shop using Shopify. Since I maintain the page I mostly fix " +
      "minor errors in the front-end and edit the layout for the pages as well as integrate tracking " +
      "pixels like like the ones from Google or Facebook and added a cookies banner.",
    buttonWebsite: "https://poilei.com",
    buttonCode: "",
  },
  glowingkids: {
    imgs: [glowingkids],
    imgTitle: ["GlowingKids online storefront"],
    cardTitle: "GlowingKids",
    cardText:
      "GlowingKids is a Shopify online shop selling children clothing. I maintain the front-end and " +
      "adjust layouts of the pages. Besides I wrote a Python script to update the product database " +
      "entries in terms of SEO matters.",
    buttonWebsite: "https://glowingkids.de",
    buttonCode: "https://github.com/priska96/glowingkids/blob/master/main.py",
  },
  pscore: {
    imgs: [pscore_abuse, pscore_digital, pscore_workshop, pscore_seminar],
    imgTitle: [
      "Child Abuse information page",
      "Digital Life and Digital Rights page",
      "Online Workshop page",
      "Online Seminar page",
    ],
    cardTitle: "PSCORE",
    cardText:
      "PSCORE stands for People for Successful Corean REunification and is an NGO that fights for " +
      "human rights in North Korea and helps North Korean defectors. I adjust the pages, ensure " +
      "the usability and fix errors as well as design and add new pages. The content pages that I created " +
      "are 'Child Abuse', 'Digital Life & Digital Rights', 'Online Seminar' and 'Online Workshop'.",
    buttonWebsite: "http://pscore.org/home",
    buttonCode: "",
  },
  pscoreedu: {
    imgs: [pscoreedu_1, pscoreedu_2, pscoreedu_register],
    imgTitle: [
      "Successful tutoring experiences",
      "PSCORE EDU tutoring content",
      "Student and tutor registration",
    ],
    cardTitle: "PSCORE EDU",
    cardText:
      "The education page from PSCORE is a WordPress website to provide tutoring classes for " +
      "North Korean defectors. Students and tutors register on the page and are matched. I mostly update " +
      "the 'Successful Tutoring Experiences' section. Besides, I added a PHP script to add the registration" +
      "date to the database and make it visible in the WordPress admin overview.",
    buttonCode:
      "https://github.com/priska96/pscore/blob/master/member_registration_date.php",
  },
  munscr: {
    imgs: [munscr],
    imgTitle: ["MUNSCR conference website"],
    cardTitle: "MUNSCR",
    cardText:
      "MUNSCR stands for Model United Nations for Successful Corean Reunification. It is an on going " +
      "project between PSCORE and me. The MUNSCR conference is held once a year and therefore is updated each year." +
      " It is a WordPress website that I designed and developed from scratch and continuously maintain.",
    buttonWebsite: "",
    buttonCode: "",
  },
  modelunsf: {
    imgs: [modelunsf],
    imgTitle: ["ModelUNSF conference website"],
    cardTitle: "ModelUNSF",
    cardText:
      "Model United Nations Strategic Framework Conference (Model UNSF) is a 3-day multinational youth-led " +
      "conference that PSCORE organized in 2021 and 2023. It is a WordPress website that I designed and developed " +
      "from scratch and maintain.",
    buttonWebsite: "",
    buttonCode: "",
  },
  twotickets: {
    imgs: [twotickets_redesign, twotickets_filter, twotickets_vattenfall_4],
    imgTitle: [
      "Landing and event page redesign",
      "Search and filter redesign",
      "Vattenfall affiliate experience redesign",
    ],
    cardTitle: "TwoTickets.de",
    cardText:
      "TwoTickets.de is a Germany-wide event-discovery platform. I worked across its Django/PostgreSQL backend and JavaScript/SCSS frontend while helping modernize the product and its development stack.",
    period: "2017–2021",
    role: "Full-Stack Web Developer",
    focus: ["Platform modernization", "UI redesign", "Quality assurance"],
    stack: projectStacks.twotickets,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Modernizing event discovery across the stack",
        body: "The established platform needed continued feature delivery alongside improvements to its user experience and aging technology stack.",
      },
      {
        eyebrow: "Contribution",
        title: "Full-stack delivery and platform modernization",
        body: "I maintained the Django/PostgreSQL application, redesigned landing, event, search and filtering experiences, adapted an affiliate flow for Vattenfall and completed a full stack upgrade. I also contributed to QA and onboarding and continued delivering independently during a ten-month stay abroad.",
      },
    ],
    buttonAffiliate: "https://vattenfall.de/freikarten",
  },
  webVisualizer: {
    vids: [webBagRecorder, webBagPlayer, webUpdater],
    poster: [webBagRecorderPoster, webBagPlayerPoster, webUpdaterPoster],
    vidTitle: ["rosbag record", "rosbag play", "Version Manager"],
    cardTitle: "ThorDrive WebViz",
    cardText:
      "I extended a WebViz-based engineering interface that made ROS and autonomous-vehicle testing workflows accessible from the browser.",
    period: "2021–2023",
    role: "Software Engineer",
    focus: ["Engineering tooling", "ROS workflows", "Vehicle testing"],
    stack: projectStacks.webVisualizer,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Turning ROS workflows into practical browser tools",
        body: "Autonomous-vehicle engineers depended on ROS messages, commands and rosbag tooling during testing. I extended the WebViz-based interface so these workflows could be understood and operated through purpose-built panels.",
      },
      {
        eyebrow: "Implementation",
        title: "A frontend connected to the robotics stack",
        body: "I visualized custom ROS messages and built interfaces for rosbag recording and playback, software updates and commands sent directly to test vehicles. React communicated through rosbridge with supporting Python and C++ services.",
      },
      {
        eyebrow: "Outcome",
        title: "Engineering workflows beyond the terminal",
        body: "Vehicle-testing tasks that previously depended on direct terminal interaction could be accessed through focused browser panels while remaining connected to the underlying ROS services and vehicle systems.",
      },
    ],
    buttonCode: "https://github.com/cruise-automation/webviz",
  },
  FMS: {
    imgs: [
      fmsAdminZones,
      fmsAdminNotify,
      fmsMobileWO,
      fmsMobileWODetail,
      fmsMobileWOStart,
      fmsMobileFS,
      fmsMobileGSE,
    ],
    imgTitle: [
      "Administration of airport map zones",
      "Configurable notification rules",
      "Mobile work-order overview",
      "Mobile work-order details",
      "Starting a vehicle work order",
      "Mobile fleet-status overview",
      "Ground-support equipment overview",
    ],
    vids: [fmsDashboard],
    poster: [],
    vidTitle: ["Dashboard - Monitoring view"],
    cardTitle: "Fleet Management System",
    cardText:
      "I led frontend development of ThorDrive’s web and mobile fleet-management products for operating autonomous airport luggage vehicles.",
    period: "2021–2023",
    role: "Frontend Lead Developer",
    focus: ["Frontend ownership", "Fleet operations", "Web and mobile"],
    stack: projectStacks.FMS,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Making autonomous fleets usable day to day",
        body: "Airport teams needed more than raw vehicle data: they needed monitoring, administration and work-order workflows that fit daily ground operations. The system translated autonomous-vehicle state into a practical product for both control-room and field users.",
      },
      {
        eyebrow: "Web implementation",
        title: "Frontend leadership for fleet monitoring",
        body: "I led frontend development of the React application for vehicle health, location and work orders. I implemented Leaflet map interactions and administration tools for vehicles, workspaces, map zones and notifications, integrating with a Java Spring Boot backend and Redis-backed operational data.",
      },
      {
        eyebrow: "Mobile implementation",
        title: "Work orders in the hands of ground workers",
        body: "I developed the complementary React Native application used by airport ground workers to issue, start and complete vehicle work orders. The mobile workflows connected field activity with the same fleet operation managed through the web product.",
      },
      {
        eyebrow: "Outcome",
        title: "One operational view from control room to airfield",
        body: "The React web application and React Native field workflows turned autonomous-system data into tools that airport teams could use for monitoring, administration and day-to-day vehicle work orders.",
      },
    ],
    buttonCode: "",
  },
  theChagos: {
    imgs: [chagos2, chagos3, chagos1],
    imgTitle: [
      "Construction project configuration",
      "Sustainability analysis and action plan",
      "Product and material selection",
    ],
    cardTitle: "The Chagos",
    cardText:
      "The Chagos is a real-estate platform for evaluating interior-construction decisions against ESG goals. I contributed across requirements, architecture and typed full-stack implementation.",
    period: "2023–2024",
    role: "Full-Stack Developer & Consultant",
    focus: ["Requirements", "Typed architecture", "Sustainability workflows"],
    stack: projectStacks.theChagos,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Turning sustainability goals into product decisions",
        body: "Interior-construction teams needed to move from project requirements and ESG goals to comparable products, a sustainability analysis and an actionable plan.",
      },
      {
        eyebrow: "Contribution",
        title: "Requirements translated into a typed full-stack system",
        body: "Within Teclead’s consulting environment, I developed the flow from project configuration and product selection through analysis and action planning. I implemented React/Next.js and Tailwind CSS interfaces, tRPC APIs, Prisma schemas and Zod-validated administration workflows for products and producers.",
      },
    ],
    buttonCode: "",
  },
  lotti: {
    imgs: [
      mobileLottiChat,
      mobileLottiChat2,
      mobileLottiAllChats,
      lottiExplore,
    ],
    imgTitle: [
      "Mobile conversation with Lotti",
      "AI-generated follow-up questions",
      "Mobile conversation history",
      "Guided topic exploration",
    ],
    mobileVids: [mobileLottiSTT],
    poster: [],
    vidTitle: ["Speech To Text Feature"],
    cardTitle: "Lotti.ai - Die KI für Ü50",
    cardText:
      "Lotti is an AI-powered education product designed to make digital topics approachable for people over 50. I independently designed and developed its complementary React Native application and contributed to the web product.",
    period: "2023–2024",
    role: "React Native Lead Developer",
    focus: [
      "Independent mobile delivery",
      "Accessible AI",
      "Product architecture",
    ],
    stack: projectStacks.lotti,
    sections: [
      {
        eyebrow: "Challenge",
        title: "Making digital topics approachable through conversation",
        body: "The product needed to make unfamiliar digital topics understandable without overwhelming its audience. Conversations, suggested questions and guided exploration provided a more approachable path into the material.",
      },
      {
        eyebrow: "Implementation",
        title: "Designed and built independently from the ground up",
        body: "I owned the React Native application from architecture through delivery, including mobile interaction patterns, push notifications and speech-to-text. I also worked on the React/Next.js product and integrated OpenAI APIs for conversations and generated learning material.",
      },
      {
        eyebrow: "Outcome",
        title: "A consistent learning experience across web and mobile",
        body: "The mobile application complemented the existing web experience with native interaction patterns while preserving Lotti’s conversational and accessible approach to AI-supported learning.",
      },
    ],
    buttonCode: "",
  },
};
