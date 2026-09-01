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

export interface ProjectCardData {
  key: string;
  title: string;
  context: string;
  summary: string;
  role: string;
  technologies: string[];
  image?: string;
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

export const projects: ProjectCardData[] = [
  {
    key: "sciendisPlatform",
    title: "WUNDERA Healthcare Platform",
    context: "Web · Mobile · White label · sciendis",
    summary:
      "Compatible WUNDERA® web and mobile products forming the foundation for white-label healthcare solutions, including native eGK workflows.",
    role: "Senior Frontend Developer · Frontend Team Lead",
    technologies: ["TypeScript", "React", "React Native", "Expo", "SQLite", "Vite"],
    image: sciendisWebAppDashboard,
    featured: true,
  },
  {
    key: "sciendisEgk",
    title: "Expo FHC NFC Module",
    context: "WUNDERA native integration · sciendis",
    summary:
      "A native module integrated into WUNDERA Mobile for securely reading German electronic health cards through Swift and Kotlin.",
    role: "Technical Owner · Native Mobile Developer",
    technologies: [
      "Expo",
      "Swift",
      "C++",
      "Kotlin",
      "NFC",
      "PACE",
      "Cryptography",
    ],
    visualWords: ["Read", "Secure", "Connect"],
    featured: true,
  },
  {
    key: "sciendisCardlink",
    title: "Online Pharmacy & CardLink",
    context: "Independent pharmacy app · sciendis",
    summary:
      "An independent Expo pharmacy app with a local native CardLink module built directly as part of the application codebase.",
    role: "Technical Project Owner · Mobile Developer",
    technologies: ["Expo Modules", "React Native", "WebView", "Swift", "Android", "FHIR"],
    visualWords: ["Web", "Native", "eRx"],
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
      "Led frontend architecture, planning, reviews and mentoring across healthcare web and mobile products",
      "Built a shared TypeScript platform for WUNDERA®, Wundumsorglos® and white-label customer solutions",
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
      "Sciendis develops WUNDERA® as compatible web and mobile applications for patient, wound-care, staffing, order and supply workflows. WUNDERA also provided the product foundation for individually branded white-label solutions, while Wundumsorglos® and other customer applications reused parts of the same shared platform.",
    period: "2024–2026",
    role: "Frontend Team Lead · Architecture Owner",
    focus: ["Web and mobile", "White-label platform", "Frontend architecture", "Synchronization"],
    stack: [
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Redux",
      "Kysely",
      "SQLite",
      "Strapi",
      "Vite",
    ],
    sections: [
      {
        eyebrow: "Challenge",
        title: "One product foundation, multiple branded solutions",
        body: "WUNDERA’s web and mobile applications formed the basis for individually branded white-label products. The variants shared healthcare workflows, interface components, data-access patterns and CMS integrations, but still needed room for customer-specific behavior and presentation.",
      },
      {
        eyebrow: "Approach",
        title: "A shared TypeScript platform",
        body: "I established an internal monorepo with shared React and React Native component libraries, Kysely-based SQLite repositories and a reusable REST integration for Strapi. Product teams could build on consistent foundations while retaining customer-specific customization.",
        points: [
          "Defined central frontend architecture and technical standards",
          "Standardized repository and read/write operations",
          "Led planning, reviews and mentoring across the frontend team",
          "Supported releases, production issues and technical client communication",
        ],
      },
      {
        eyebrow: "Web and mobile",
        title: "Compatible products with different data needs",
        body: "The React web application consumed server data directly. The React Native application needed structured local data and synchronization so healthcare workflows remained dependable on mobile devices. I generalized the synchronization layer so repositories followed consistent read, write and synchronization patterns.",
      },
      {
        eyebrow: "Modernization",
        title: "Updating the application foundations",
        body: "I upgraded Expo SDK 51 to 53, resolved the resulting compatibility issues and migrated structured local persistence to expo-sqlite. Redux and Redux Persist handled durable application state separately from the SQLite domain data. I also migrated a web application from Next.js to Vite.",
      },
      {
        eyebrow: "Native extension",
        title: "Integrating electronic health-card workflows",
        body: "The WUNDERA mobile application also integrated the Expo FHC NFC module I developed. It allowed patient information to be read securely from German electronic health cards and transferred into WUNDERA’s patient and wound-care workflows.",
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
    cardTitle: "Expo FHC NFC Module",
    cardText:
      "Integrated into the WUNDERA mobile application, the module replaces manual patient-data entry by reading German electronic health cards securely and making validated data available to patient and wound-care workflows.",
    period: "2024–2026",
    role: "Technical Owner · Native Mobile Developer",
    focus: ["Secure NFC", "Cross-platform native modules", "Patient workflows"],
    stack: [
      "Expo",
      "React Native",
      "Swift",
      "Kotlin",
      "PACE",
      "OpenHealthCardKit",
    ],
    sections: [
      {
        eyebrow: "Technical challenge",
        title: "One Expo API across two native implementations",
        body: "Expo did not provide the required secure eGK functionality. I designed a consistent JavaScript-facing module API while implementing the platform-specific NFC and cryptographic work natively.",
      },
      {
        eyebrow: "Implementation",
        title: "OpenHealthCardKit on iOS, PACE on Android",
        body: "On iOS, I integrated gematik’s OpenHealthCardKit in Swift. On Android, I implemented PACE authentication, cryptographic key exchange and secure NFC communication in Kotlin. I took substantial technical ownership from conception through productive integration.",
      },
    ],
  },
  sciendisCardlink: {
    mobileVids: [sciendisPharmacyCardLink],
    vidTitle: ["Retrieving an electronic prescription through CardLink"],
    cardTitle: "Online Pharmacy & CardLink",
    cardText:
      "This independent Expo application brought an existing web-based pharmacy shop to mobile and added native electronic-prescription functionality without rebuilding the shop as a native user interface.",
    period: "2024–2026",
    role: "Technical Project Owner · Mobile Developer",
    focus: [
      "Web/native integration",
      "Local Expo module architecture",
      "Electronic prescriptions",
      "Healthcare interoperability",
    ],
    stack: [
      "Expo",
      "React Native WebView",
      "Swift",
      "Android",
      "CardLink",
      "FHIR",
    ],
    sections: [
      {
        eyebrow: "Architecture",
        title: "Extending an existing shop across the web/native boundary",
        body: "I embedded the shop in a React Native WebView and implemented communication between the web application and native application code using injected JavaScript and WebView message events. This preserved the established shop while allowing it to request native CardLink operations.",
      },
      {
        eyebrow: "Native integration",
        title: "From CardLink to application-ready prescription data",
        body: "I connected the CardLink SDK through native Swift and Android modules. Prescription data returned as FHIR XML was parsed and transformed into a simplified JSON structure for further processing by the application. I accompanied the solution from conception through production integration.",
      },
      {
        eyebrow: "Module architecture",
        title: "Native module and application built together",
        body: "The custom Expo module lives directly inside the pharmacy application’s codebase. It is compiled together with the iOS and Android app instead of being published and installed as a separate npm package. This kept the CardLink bridge versioned with the product that consumes it and made native changes part of the same build and release process.",
      },
    ],
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
    period: "2017–2021",
    role: "Full-Stack Web Developer",
    focus: ["Platform modernization", "UI redesign", "Quality assurance"],
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "SCSS"],
    sections: [
      {
        eyebrow: "Platform work",
        title: "Modernizing event discovery across the stack",
        body: "I developed and maintained the Django/PostgreSQL platform across frontend and backend, redesigned core landing and event experiences and improved search and filtering. I also adapted the affiliate experience for Vattenfall and completed a full technology-stack upgrade.",
      },
      {
        eyebrow: "Beyond delivery",
        title: "Quality, onboarding and independent remote work",
        body: "My role also included quality assurance, supporting staff interviews and training new employees. During a ten-month stay abroad in 2020, I continued delivering independently across locations and time zones.",
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
      "ThorDrive WebViz made complex autonomous-vehicle testing workflows accessible through a browser-based engineering interface. The project combined a React engineering UI with Python and C++ ROS services so vehicle-testing tasks could be operated without relying solely on terminal workflows.",
    period: "2021–2023",
    role: "Software Engineer",
    focus: ["Engineering tooling", "ROS workflows", "Vehicle testing"],
    stack: ["React", "Python", "C++", "ROS", "rosbridge"],
    sections: [
      {
        eyebrow: "Challenge",
        title: "Turning ROS workflows into practical browser tools",
        body: "Autonomous-vehicle engineers depended on ROS messages, commands and rosbag tooling during testing. I extended the WebViz-based interface so these workflows could be understood and operated through purpose-built panels.",
      },
      {
        eyebrow: "My contribution",
        title: "A frontend connected to the robotics stack",
        body: "I visualized custom ROS messages and built interfaces for rosbag recording and playback, software updates and commands sent directly to test vehicles. React communicated through rosbridge with supporting Python and C++ services.",
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
      "ThorDrive’s Fleet Management System supported the daily operation of autonomous airport luggage vehicles. I led frontend development of the React application, which monitored vehicle health, location and work orders and provided administration tools for vehicles, workspaces, map zones and notifications. I implemented map interactions with Leaflet, worked with Redis for fast operational data access and integrated the frontend with a Java Spring Boot backend. I also developed the complementary React Native application used by airport ground workers to issue, start and complete vehicle work orders. Together, the web and mobile products turned autonomous-system data into practical operational workflows.",
    period: "2021–2023",
    role: "Frontend Lead Developer",
    focus: ["Frontend ownership", "Fleet operations", "Web and mobile"],
    stack: [
      "React",
      "React Native",
      "Leaflet",
      "Redis",
      "Java Spring Boot",
      "ROS",
    ],
    sections: [
      {
        eyebrow: "Operational problem",
        title: "Making autonomous fleets usable day to day",
        body: "Airport teams needed more than raw vehicle data: they needed monitoring, administration and work-order workflows that fit daily ground operations. The system translated autonomous-vehicle state into a practical product for both control-room and field users.",
      },
      {
        eyebrow: "Web application",
        title: "Frontend leadership for fleet monitoring",
        body: "I led frontend development of the React application for vehicle health, location and work orders. I implemented Leaflet map interactions and administration tools for vehicles, workspaces, map zones and notifications, integrating with a Java Spring Boot backend and Redis-backed operational data.",
      },
      {
        eyebrow: "Mobile application",
        title: "Work orders in the hands of ground workers",
        body: "I developed the complementary React Native application used by airport ground workers to issue, start and complete vehicle work orders. The mobile workflows connected field activity with the same fleet operation managed through the web product.",
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
      "The Chagos is a real-estate SaaS platform that helps interior construction projects evaluate product decisions against ESG goals. Within Teclead Ventures’ consulting and software-delivery environment, I supported the product from requirements and architecture through implementation. I developed dynamic React and Next.js interfaces, tRPC APIs and Prisma database schemas for project configuration, product selection and sustainability analysis. I also built administrative workflows for managing products and producers, with form validation through Zod. The work combined customer and product requirements with a typed full-stack architecture and practical implementation.",
    period: "2023–2024",
    role: "Full-Stack Developer & Consultant",
    focus: ["Requirements", "Typed architecture", "Sustainability workflows"],
    stack: ["React", "Next.js", "Node.js", "tRPC", "Prisma", "Zod"],
    sections: [
      {
        eyebrow: "Product flow",
        title: "From project configuration to an actionable ESG plan",
        body: "The platform helped interior construction projects evaluate products against sustainability goals. I developed the flow from project configuration and product selection through sustainability analysis and the resulting action plan.",
      },
      {
        eyebrow: "My contribution",
        title: "Requirements translated into a typed full-stack system",
        body: "Within Teclead’s consulting environment, I supported requirements and architecture as well as implementation. I built dynamic React/Next.js interfaces, tRPC APIs, Prisma schemas and Zod-validated administrative workflows for products and producers.",
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
      "Lotti is an AI-powered education product designed to help people over 50 navigate digital topics with confidence. The experience combines approachable conversations, suggested questions, follow-up prompts, speech-to-text and guided topic exploration. Working across consulting, requirements and implementation, I independently conceived and developed the complementary React Native application from the ground up, including its architecture, push notifications and mobile interaction patterns. I also contributed to the React and Next.js web product and integrated OpenAI APIs to generate helpful, motivating learning experiences.",
    period: "2023–2024",
    role: "React Native Lead Developer",
    focus: [
      "Independent mobile delivery",
      "Accessible AI",
      "Product architecture",
    ],
    stack: ["React Native", "Next.js", "Node.js", "TypeScript", "OpenAI"],
    sections: [
      {
        eyebrow: "Audience and product",
        title: "Making digital topics approachable through conversation",
        body: "Lotti helps people over 50 navigate digital life through approachable conversations, suggested questions, follow-up prompts, speech-to-text and guided topic exploration.",
      },
      {
        eyebrow: "Mobile ownership",
        title: "Designed and built independently from the ground up",
        body: "I conceived and developed the complementary React Native application, including its architecture, mobile interaction patterns, push notifications and speech-to-text experience. I also contributed to the React/Next.js product and integrated OpenAI APIs for generated learning materials.",
      },
    ],
    buttonCode: "",
  },
};
