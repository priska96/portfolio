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
    title: "Healthcare applications at sciendis",
    context: "Healthcare · 2024–2026",
    summary:
      "My biggest professional milestone so far: cross-platform healthcare products, shared architecture and secure NFC communication with German electronic health cards.",
    role: "Senior Frontend Developer & Frontend Team Lead",
    technologies: [
      "React",
      "React Native",
      "Expo",
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
    technologies: ["React", "React Native", "Java", "Leaflet", "ROS"],
    image: fmsThumbnail,
    featured: true,
  },
  {
    key: "lotti",
    title: "Lotti.ai",
    context: "AI-enabled education · Teclead Ventures",
    summary:
      "An approachable AI-powered web and mobile companion helping people over 50 navigate digital life.",
    role: "React Native Lead Developer",
    technologies: ["React Native", "Next.js", "OpenAI", "TypeScript"],
    image: lottiThumbnail,
    featured: true,
  },
  {
    key: "theChagos",
    title: "The Chagos",
    context: "Real-estate SaaS · Teclead Ventures",
    summary:
      "A SaaS platform helping interior construction projects make more sustainable product decisions.",
    role: "Full-Stack Developer",
    technologies: ["React", "Next.js", "tRPC", "Prisma"],
    image: chagosThumbnail,
    featured: false,
  },
  {
    key: "twotickets",
    title: "TwoTickets.de",
    context: "Culture platform · TwoTickets.de",
    summary:
      "Platform modernization, new search experiences and a complete technology-stack upgrade.",
    role: "Full-Stack Web Developer",
    technologies: ["Python", "Django", "JavaScript", "SCSS"],
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
      "My biggest professional milestone so far: leading frontend delivery while expanding from React Native into architecture, native iOS and Android development, secure communication and applied cryptography.",
    highlights: [
      "Led technical planning, task prioritization, delegation, code reviews and mentoring across time zones",
      "Established a TypeScript monorepo with shared React and React Native components, a Kysely-based SQLite data layer and reusable Strapi REST integration",
      "Built secure eGK NFC functionality with Swift, Kotlin, PACE authentication, cryptographic key exchange and OpenHealthCardKit",
      "Modernized the mobile architecture from Expo SDK 51 to 53 and migrated local persistence to expo-sqlite",
      "Developed an Expo online-pharmacy app with WebView and native CardLink integration for electronic prescriptions",
    ],
  },
  {
    period: "Oct 2023 — Apr 2024",
    company: "Teclead Ventures GmbH",
    location: "Berlin",
    title: "Full-Stack Developer & Consultant",
    description:
      "Built products across real-estate SaaS and AI-enabled education using React, Next.js and React Native.",
    highlights: [
      "Developed dynamic UI components, tRPC APIs and Prisma database schemas for a real-estate SaaS platform",
      "Integrated OpenAI APIs to generate learning materials for an AI-powered education product",
      "Independently built the complementary React Native mobile application from the ground up",
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
      "Developed and modernized a Python and Django culture platform while supporting the onboarding of new developers.",
    highlights: [
      "Redesigned landing and event pages and improved search and filtering",
      "Completed a full technology-stack upgrade",
      "Supported onboarding and training of new developers",
    ],
  },
];

export const data: Record<string, ProjectDetailData> = {
  sciendis: {
    imgs: [sciendisWebAppDashboard, sciendisWebAppPatient, sciendisWebAppUsers],
    imgTitle: [
      "Wundumsorglos dashboard and analytics",
      "Digital patient record",
      "User and license management",
    ],
    mobileVids: [sciendisPharmacyCardLink, sciendisNfc],
    vidTitle: [
      "Retrieving an electronic prescription via CardLink",
      "Reading a German electronic health card via NFC",
    ],
    cardTitle: "Healthcare applications at sciendis",
    cardText:
      "Sciendis became my biggest professional milestone so far. As Senior Frontend Developer and Frontend Team Lead, I combined hands-on product development with architecture, technical planning, code reviews and mentoring. I developed and evolved React and React Native healthcare applications, including the Wundumsorglos web platform for patient, wound-care, staffing and order workflows. I established an internal TypeScript monorepo with shared components, a Kysely-based SQLite data layer and reusable REST integration for the Strapi CMS. I also expanded into native Swift and Kotlin development while building secure cross-platform NFC functionality for German electronic health cards, including PACE authentication, cryptographic key exchange and OpenHealthCardKit. Further work included upgrading Expo SDK 51 to 53, migrating persistence to expo-sqlite and developing an online-pharmacy application with native CardLink integration for electronic prescriptions.",
  },
  nutritionplanner: {
    vids: [nutritionplanner],
    cardTitle: "Meal Plan Generator",
    cardText:
      "The goal of this project was to create an algorithm to generate personalised meal plans, " +
      "based on the users' input and to output them in a calendar overview as well as export them in a pdf " +
      "file. These meal plans support typical diets and eating habits  and provide a suitable nutrition " +
      "intake. To create the meal plans and to choose the right  foods in a healthy measurement, an " +
      "optimization problem was set up and solved by linear programming. The focus was more set on the " +
      "logic instead on the design, which is why the page has only minimal styling to make it usable. " +
      "Besides Django (Python) jQuery, CSS and Bootstrap  were used to  implement this website.",
  },
  jabe: {
    imgs: [jabe],
    cardTitle: "JABE",
    cardText:
      "The JABE is a Japanese restaurant I created the website for and maintained for some time. " +
      "This eight month project is a static and plain HTML, CSS and jQuery website. It is solely used to " +
      "present the restaurant, therefore the whole ordering process is outsourced. Besides I integrated " +
      "the Facebook tracking pixel for marketing services.",
  },
  poilei: {
    imgs: [poilei_cookies],
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
    cardTitle: "MUNSCR",
    cardText:
      "MUNSCR stands for Model United Nations for Successful Corean Reunification. It is an on going " +
      "project between PSCORE and me. The MUNSCR conference is held once a year and therefore is updated each year." +
      " It is a WordPress website that I designed and developed from scratch and continuously maintain.",
    buttonWebsite: "http://munscr.com",
    buttonCode: "",
  },
  modelunsf: {
    imgs: [modelunsf],
    cardTitle: "ModelUNSF",
    cardText:
      "Model United Nations Strategic Framework Conference (Model UNSF) is a 3-day multinational youth-led " +
      "conference that PSCORE organized in 2021 and 2023. It is a WordPress website that I designed and developed " +
      "from scratch and maintain.",
    buttonWebsite: "http://munscr.com",
    buttonCode: "",
  },
  twotickets: {
    imgs: [twotickets_redesign, twotickets_filter, twotickets_vattenfall_4],
    cardTitle: "TwoTickets.de",
    cardText:
      "TwoTickets.de is a culture platform where members can win tickets for events from partner organizers. As a Full-Stack Web Developer, I developed and modernized the Python and Django application across both backend and frontend. My work included redesigning landing and event pages, improving search and filtering, adapting the affiliate experience for Vattenfall and completing a full technology-stack upgrade. I also supported the onboarding and training of new developers.",
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
    vids: [fmsDashboard],
    poster: [],
    vidTitle: ["Dashboard - Monitoring view"],
    cardTitle: "Fleet Management System",
    cardText:
      "ThorDrive's Fleet Management System supported the daily operation of autonomous airport luggage vehicles. I led frontend development of the React application, which monitored vehicle health, location and work orders and provided administration tools for vehicles, workspaces, map zones and notifications. I implemented map interactions with Leaflet and integrated the frontend with a Java Spring Boot backend. I also developed the complementary React Native application used by airport ground workers to issue, start and complete vehicle work orders. Together, the web and mobile products turned autonomous-system data into practical operational workflows.",
    buttonCode: "",
  },
  theChagos: {
    imgs: [chagos2, chagos3, chagos1],
    cardTitle: "The Chagos",
    cardText:
      "The Chagos is a real-estate SaaS platform that helps interior construction projects evaluate product decisions against ESG goals. I developed dynamic React and Next.js interfaces, tRPC APIs and Prisma database schemas for project configuration, product selection and sustainability analysis. I also built administrative workflows for managing products and producers, with form validation through Zod. The work combined product-facing UI development with typed full-stack implementation.",
    buttonCode: "",
  },
  lotti: {
    imgs: [
      mobileLottiChat,
      mobileLottiChat2,
      mobileLottiAllChats,
      lottiExplore,
    ],
    mobileVids: [mobileLottiSTT],
    poster: [],
    vidTitle: ["Speech To Text Feature"],
    cardTitle: "Lotti.ai - Die KI für Ü50",
    cardText:
      "Lotti is an AI-powered education product designed to help people over 50 navigate digital topics with confidence. The experience combines approachable conversations, suggested questions, follow-up prompts, speech-to-text and guided topic exploration. I independently developed the complementary React Native application from the ground up, including push notifications and mobile interaction patterns, while also contributing to the React and Next.js web product. The application integrated OpenAI APIs to generate helpful, motivating learning experiences.",
    buttonCode: "",
  },
};
