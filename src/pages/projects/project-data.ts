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
import sciendisNfc from "../../images/sciendis-nfc.mov";
import sciendisWebAppDashboard from "../../images/sciendis-web-app1.png";
import sciendisWebAppPatient from "../../images/sciendis-web-app2.png";
import sciendisWebAppUsers from "../../images/sciendis-web-app3.png";

export interface ProjectCardData {
  key: string;
  title: string;
  context: string;
  summary: string;
  role: string;
  technologies: string[];
  image?: string;
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
  vids?: string[];
  mobileVids?: string[];
  poster?: string[];
  vidTitle?: string[];
  cardTitle: string;
  cardText: string;
  buttonWebsite?: string;
  buttonCode?: string;
  buttonAffiliate?: string;
}

export const projects: ProjectCardData[] = [
  {
    key: "sciendis",
    title: "Healthcare product ecosystem at sciendis",
    context: "Healthcare · 2024–2026",
    summary:
      "My biggest professional milestone so far: a shared platform architecture for WUNDERA®, Wundumsorglos® and customer-specific white-label healthcare applications.",
    role: "Senior Frontend Developer & Frontend Team Lead",
    technologies: [
      "React",
      "React Native",
      "Redux",
      "Expo",
      "Next.js",
      "Vite",
      "Swift",
      "C++",
      "Kotlin",
      "PACE",
      "Cryptography",
    ],
    image: sciendisWebAppDashboard,
    featured: true,
  },
  {
    key: "webVisualizer",
    title: "ThorDrive WebViz",
    context: "Autonomous mobility · ThorDrive",
    summary:
      "A browser-based engineering interface that turned complex ROS workflows into practical tools for testing and operating autonomous vehicles.",
    role: "Software Engineer",
    technologies: ["React", "Python", "C++", "ROS", "rosbridge"],
    image: webVisualizerThumbnail,
    featured: true,
  },
  {
    key: "FMS",
    title: "Fleet Management System",
    context: "Autonomous mobility · ThorDrive",
    summary:
      "A web and mobile system for monitoring autonomous airport luggage vehicles and coordinating their daily work orders.",
    role: "Frontend Lead Developer",
    technologies: ["React", "React Native", "Java", "Leaflet", "Redis", "ROS"],
    image: fmsThumbnail,
    featured: true,
  },
  {
    key: "lotti",
    title: "Lotti.ai",
    context: "AI-enabled education · Teclead Ventures",
    summary:
      "An approachable AI-powered web and mobile product delivered in a consulting environment, helping people over 50 navigate digital life.",
    role: "React Native Lead Developer",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "OpenAI",
      "TypeScript",
    ],
    image: lottiThumbnail,
    featured: true,
  },
  {
    key: "theChagos",
    title: "The Chagos",
    context: "Real-estate SaaS · Teclead Ventures",
    summary:
      "A typed full-stack SaaS platform developed from requirements to implementation, helping construction projects make more sustainable product decisions.",
    role: "Full-Stack Developer",
    technologies: ["React", "Next.js", "Node.js", "tRPC", "Prisma"],
    image: chagosThumbnail,
    featured: false,
  },
  {
    key: "twotickets",
    title: "TwoTickets.de",
    context: "Culture platform · TwoTickets.de",
    summary:
      "A Germany-wide event calendar and city-explorer club, combining Django platform development with UI modernization, QA and team support.",
    role: "Full-Stack Web Developer",
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "SCSS"],
    image: twoticketsThumbnail,
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
      "Led technical planning, task prioritization, delegation, code reviews and mentoring across time zones",
      "Established a TypeScript monorepo and central component library so WUNDERA®, Wundumsorglos® and white-label customer applications could share web, mobile, data and API foundations without duplicating code",
      "Built secure eGK NFC functionality with Swift, Kotlin, PACE authentication, cryptographic key exchange and gematik’s OpenHealthCardKit",
      "Modernized the mobile architecture from Expo SDK 51 to 53 and migrated local persistence to expo-sqlite",
      "Developed an Expo online-pharmacy app with WebView and native CardLink SDK integration for electronic prescriptions",
      "Supported releases, resolved production-critical issues and communicated directly with healthcare clients on complex technical questions",
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
      "Advised on software-development requirements and translated changing product needs into practical implementation plans",
      "Contributed to the conception and implementation of web, mobile and full-stack software architecture",
      "Worked with Node.js and Next.js across typed full-stack applications",
      "Developed dynamic UI components, tRPC APIs and Prisma database schemas for a real-estate SaaS platform",
      "Integrated OpenAI APIs to generate learning materials for an AI-powered education product",
      "Independently built the complementary React Native mobile application from the ground up",
      "Supported team-building activities and collaborated professionally with managers, developers and customers",
    ],
  },
  {
    period: "Jul 2021 — Aug 2023",
    company: "ThorDrive Co. Ltd.",
    location: "Seoul",
    title: "Software Engineer",
    description:
      "An important stepping stone into React and React Native development, working at the intersection of frontend engineering and autonomous systems.",
    highlights: [
      "Extended a WebViz-based React, Python and C++ application with visualization for custom ROS messages",
      "Built interfaces for rosbag record/play, software updates and sending ROS commands directly to test vehicles",
      "Led frontend development of a fleet management system for autonomous airport luggage vehicles",
      "Developed a complementary React Native app for airport ground workers to manage vehicle work orders",
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
      "Developed and maintained frontend and backend solutions with Python and Django",
      "Co-designed and implemented interfaces with HTML, SCSS and JavaScript, including landing pages, event pages, search and filtering",
      "Participated in quality assurance and helped maintain reliable releases",
      "Completed a full technology-stack upgrade",
      "Supported staff interviews and trained new employees",
      "Worked remotely and independently from abroad for ten months in 2020",
    ],
  },
];

export const data: Record<string, ProjectDetailData> = {
  sciendis: {
    imgs: [sciendisWebAppDashboard, sciendisWebAppPatient, sciendisWebAppUsers],
    imgTitle: [
      "Wundera web app - dashboard and analytics",
      "Digital patient record",
      "User and license management",
    ],
    mobileVids: [sciendisNfc, sciendisPharmacyCardLink],
    vidTitle: [
      "Reading a German electronic health card via NFC and creating patient, wound and wound report entries",
      "Retrieving an electronic prescription via CardLink",
    ],
    cardTitle: "Healthcare product ecosystem at sciendis",
    cardText:
      "Sciendis develops and operates digital healthcare products such as WUNDERA® and Wundumsorglos®, as well as customer-specific solutions for established companies in healthcare and nursing. The product landscape includes cloud-based web and mobile applications built with technologies including React, Next.js and Vite that digitize patient, wound-care, staffing, order and supply workflows. WUNDERA® was available as a React web platform with a compatible React Native mobile application, and its foundations were also used to deliver individually branded white-label solutions for enterprise customers.<br/><br/>As Senior Frontend Developer and Frontend Team Lead, I was responsible for frontend architecture, technical standards and central modules across this product ecosystem. I designed an internal TypeScript monorepo and a shared component library so the company's own products and customer applications could reuse the same React and React Native components instead of duplicating implementations. The shared foundation also included a Kysely-based SQLite data layer with standardized repository and read/write operations, plus a generic REST integration for the Strapi CMS. This made product variants easier to maintain while preserving consistent behavior and allowing customer-specific customization.<br/><br/>Across the React and React Native applications, I worked with Redux for predictable shared state management and Redux Persist where application state needed to survive restarts. For the WUNDERA® mobile application, I upgraded Expo SDK 51 to 53, resolved the resulting migration issues and moved the structured local data layer to expo-sqlite for more reliable offline access. Redux Persist and expo-sqlite served different persistence needs: durable application state on one side and structured domain data on the other.<br/><br/>I also expanded into native Swift and Kotlin development while implementing secure cross-platform NFC communication with German electronic health cards. This included PACE authentication, cryptographic key exchange and gematik's OpenHealthCardKit. In an online-pharmacy project, I took substantial technical responsibility from conception through production integration and implemented native CardLink functionality for retrieving electronic prescriptions. Alongside product development and team leadership, I supported releases, investigated production-critical issues and communicated directly with customers on complex technical questions.",
  },
  nutritionplanner: {
    vids: [nutritionplanner],
    cardTitle: "Meal Plan Generator",
    cardText:
      "The goal of this project was to create an algorithm to generate personalised meal plans, " +
      "based on the users’ input and to output them in a calendar overview as well as export them in a pdf " +
      "file. These meal plans support typical diets and eating habits  and provide a suitable nutrition " +
      "intake. To create the meal plans and to choose the right  foods in a healthy measurement, an " +
      "optimization problem was set up and solved by linear programming. The focus was more set on the " +
      "logic instead on the design, which is why the page has only minimal styling to make it usable. " +
      "Besides Django (Python) jQuery, CSS and Bootstrap  were used to  implement this website.",
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
      "TwoTickets.de is a Germany-wide event calendar and city-explorer club that helps members discover new cultural, entertainment and sporting events and experience them in pairs. As a Full-Stack Web Developer, I developed and maintained frontend and backend solutions based on Python, Django and PostgreSQL. I co-designed and implemented the user interface with HTML, SCSS and JavaScript, including redesigned landing and event pages, improved search and filtering and an adapted affiliate experience for Vattenfall. I also participated in quality assurance and completed a full technology-stack upgrade.<br/><br/>Beyond product development, I supported staff interviews and trained new employees. During a ten-month stay abroad in 2020, I continued working for the company remotely and independently, taking responsibility for delivering my work across locations and time zones.",
    buttonAffiliate: "https://vattenfall.de/freikarten",
  },
  webVisualizer: {
    vids: [webBagRecorder, webBagPlayer, webUpdater],
    poster: [webBagRecorderPoster, webBagPlayerPoster, webUpdaterPoster],
    vidTitle: ["rosbag record", "rosbag play", "Version Manager"],
    cardTitle: "ThorDrive WebViz",
    cardText:
      "ThorDrive WebViz made complex autonomous-vehicle testing workflows accessible through a browser-based engineering interface. Building on the open-source WebViz platform, I added visualization for custom ROS messages and created GUI panels for rosbag record and play workflows, version updates and commands sent directly to test vehicles. The React frontend communicated with ROS through rosbridge, supported by Python and C++ services. This project was an important stepping stone into deeper React development while allowing me to apply my previous full-stack experience in an autonomous-systems environment.",
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
      "ThorDrive’s Fleet Management System supported the daily operation of autonomous airport luggage vehicles. I led frontend development of the React application, which monitored vehicle health, location and work orders and provided administration tools for vehicles, workspaces, map zones and notifications. I implemented map interactions with Leaflet, worked with Redis for fast operational data access and integrated the frontend with a Java Spring Boot backend. I also developed the complementary React Native application used by airport ground workers to issue, start and complete vehicle work orders. Together, the web and mobile products turned autonomous-system data into practical operational workflows.",
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
      "The Chagos is a real-estate SaaS platform that helps interior construction projects evaluate product decisions against ESG goals. Within Teclead Ventures’ consulting and software-delivery environment, I supported the product from requirements and architecture through implementation. I developed dynamic React and Next.js interfaces, tRPC APIs and Prisma database schemas for project configuration, product selection and sustainability analysis. I also built administrative workflows for managing products and producers, with form validation through Zod. The work combined customer and product requirements with a typed full-stack architecture and practical implementation.",
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
      "Lotti is an AI-powered education product designed to help people over 50 navigate digital topics with confidence. The experience combines approachable conversations, suggested questions, follow-up prompts, speech-to-text and guided topic exploration. Working across consulting, requirements and implementation, I independently conceived and developed the complementary React Native application from the ground up, including its architecture, push notifications and mobile interaction patterns. I also contributed to the React and Next.js web product and integrated OpenAI APIs to generate helpful, motivating learning experiences.",
    buttonCode: "",
  },
};
