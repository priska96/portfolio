import nutritionplanner from '../../images/explain.mp4';
import jabe from '../../images/jabe.png';
import poilei_cookies from '../../images/poilei_cookies.png';
import glowingkids from '../../images/glowingkids.png';
import pscore_abuse from '../../images/pscore_abuse.png';
import pscore_digital from '../../images/pscore_digital.png';
import pscore_seminar from '../../images/pscore_seminar.png';
import pscore_workshop from '../../images/pscore_workshop.png';
import pscoreedu_register from '../../images/pscoreedu_register.png';
import pscoreedu_1 from '../../images/pscoreedu_1.png';
import pscoreedu_2 from '../../images/pscoreedu_2.png';
import munscr from '../../images/munscr.png';
import modelunsf from '../../images/modelunsf.png';
import twotickets_redesign from '../../images/twotickets_redesign.png';
import twotickets_filter from '../../images/twotickets_filter.png';
import twotickets_vattenfall_4 from '../../images/twotickets_vattenfall_4.png';
import webBagRecorder from '../../images/webBagRecorder.mp4';
import webBagPlayer from '../../images/webBagPlayer.mp4';
import webUpdater from '../../images/webUpdater.mp4';
import webBagPlayerPoster from '../../images/webBagPlayer_poster.png';
import webBagRecorderPoster from '../../images/webBagRecorder_poster.png';
import webUpdaterPoster from '../../images/webUpdater_poster.png';


export const data = {
    nutritionplanner: {
        vids: [nutritionplanner],
        cardTitle: "Meal Plan Generator",
        cardText: "The goal of this project was to create an algorithm to generate personalised meal plans, " +
            "based on the users' input and to output them in a calendar overview as well as export them in a pdf " +
            "file. These meal plans support typical diets and eating habits  and provide a suitable nutrition " +
            "intake. To create the meal plans and to choose the right  foods in a healthy measurement, an " +
            "optimization problem was set up and solved by linear programming. The focus was more set on the " +
            "logic instead on the design, which is why the page has only minimal styling to make it usable. " +
            "Besides Django (Python) jQuery, CSS and Bootstrap  were used to  implement this website."
    },
    jabe: {
        imgs: [jabe],
        cardTitle: "JABE",
        cardText: "The JABE is a Japanese restaurant I created the website for and maintained for some time. " +
            "This eight month project is a static and plain HTML, CSS and jQuery website. It is solely used to " +
            "present the restaurant, therefore the whole ordering process is outsourced. Besides I integrated " +
            "the Facebook tracking pixel for marketing services.",
    },
    poilei: {
        imgs: [poilei_cookies],
        cardTitle: "Poilei",
        cardText: "Poilei is an Italian shoe shop using Shopify. Since I maintain the page I mostly fix " +
            "minor errors in the front-end and edit the layout for the pages as well as integrate tracking " +
            "pixels like like the ones from Google or Facebook and added a cookies banner.",
        buttonWebsite: 'https://poilei.com',
        buttonCode: ''
    },
    glowingkids: {
        imgs: [glowingkids],
        cardTitle: "GlowingKids",
        cardText: "GlowingKids is a Shopify online shop selling children clothing. I maintain the front-end and " +
            "adjust layouts of the pages. Besides I wrote a Python script to update the product database " +
            "entries in terms of SEO matters.",
        buttonWebsite: 'https://glowingkids.de',
        buttonCode: 'https://github.com/priska96/glowingkids/blob/master/main.py'
    },
    pscore: {
        imgs: [pscore_abuse, pscore_digital, pscore_workshop, pscore_seminar],
        cardTitle: "PSCORE",
        cardText: "PSCORE stands for People for Successful Corean REunification and is an NGO that fights for " +
            "human rights in North Korea and helps North Korean defectors. I adjust the pages, ensure " +
            "the usability and fix errors as well as design and add new pages. The content pages that I created " +
            "are 'Child Abuse', 'Digital Life & Digital Rights', 'Online Seminar' and 'Online Workshop'.",
        buttonWebsite: 'http://pscore.org/home',
        buttonCode: ''
    },
    pscoreedu: {
        imgs: [pscoreedu_1, pscoreedu_2, pscoreedu_register],
        cardTitle: "PSCORE EDU",
        cardText: "The education page from PSCORE is a WordPress website to provide tutoring classes for " +
            "North Korean defectors. Students and tutors register on the page and are matched. I mostly update " +
            "the 'Successful Tutoring Experiences' section. Besides, I added a PHP script to add the registration" +
            "date to the database and make it visible in the WordPress admin overview.",
        buttonCode: 'https://github.com/priska96/pscore/blob/master/member_registration_date.php'
    },
    munscr: {
        imgs: [munscr],
        cardTitle: "MUNSCR",
        cardText: "MUNSCR stands for Model United Nations for Successful Corean Reunification. It is an on going " +
            "project between PSCORE and me. The MUNSCR conference is held once a year and therefore is updated each year." +
            " It is a WordPress website that I designed and developed from scratch and continuously maintain.",
        buttonWebsite: 'http://munscr.com',
        buttonCode: ''

    },
    modelunsf: {
        imgs: [modelunsf],
        cardTitle: "ModelUNSF",
        cardText: "Model United Nations Strategic Framework Conference (Model UNSF) is a 3-day multinational youth-led " +
            "conference that PSCORE organized in 2021 and 2023. It is a WordPress website that I designed and developed " +
            "from scratch and maintain.",
        buttonWebsite: 'http://munscr.com',
        buttonCode: ''

    },
    twotickets: {
        imgs: [twotickets_redesign, twotickets_filter, twotickets_vattenfall_4],
        cardTitle: "TwoTickets.de",
        cardText: "TwoTickets.de sells memberships to its users. Registered members can win a pair of tickets for any " +
            "event, whose organizer collaborates with TwoTickets.de. I maintain the back- and the front-end in terms " +
            "of bug fixing and adding new features. My main projects were a redesign of landing and event pages, " +
            "optimizing the filter and search functions, a redesign of the iFrame version for an affiliate " +
            "company (Vattenfall) and a current tech-stack update project. " +
            "This website is build with Django in the back-end and Sass and jQuery in the front-end." ,
        buttonAffiliate: 'https://vattenfall.de/freikarten',
    },
    webVisualizer: {
        vids: [webBagRecorder, webBagPlayer, webUpdater],
        poster: [webBagRecorderPoster, webBagPlayerPoster, webUpdaterPoster],
        vidTitle: ["rosbag record", "rosbag play", "Version Manager"],
        cardTitle: "ThorDrive WebViz",
        cardText: "A GUI for self-driving cars to check their status and simplify testing procedures. " +
            "This web application uses the opensource code from the cruise-automation webViz git. I added features to " +
            "provide a GUI for the ROS commands " +
            "<a href='http://wiki.ros.org/rosbag/Commandline#rosbag_record' target='_blank'>'rosbag record'</a> " +
            "and <a href='http://wiki.ros.org/rosbag/Commandline#rosbag_play' target='_blank'>'rosbag play'</a>. " +
            "Furthermore, I added a functionality to update/downgrade our code bases as well as an HMI to send commands" +
            " to the self-driving car. This web application uses Python and C++ in the back-end and React in the " +
            "front-end. The communication with the vehicles is established via ros messages that can be sent and " +
            "received via the webViz. Compared to the original webViz from cruise-automation that only plays ros " +
            "bag files, ThorDrive's webViz connects to a rosbridge server to allow more interactions with the vehicles.",
        buttonCode: 'https://github.com/cruise-automation/webviz',
    },
    FMS: {
        imgs: [twotickets_redesign, twotickets_filter, twotickets_vattenfall_4],
        cardTitle: "TwoTickets.de",
        cardText: "TwoTickets.de sells memberships to its users. Registered members can win a pair of tickets for any " +
            "event, whose organizer collaborates with TwoTickets.de. I maintain the back- and the front-end in terms " +
            "of bug fixing and adding new features. My main projects were a redesign of landing and event pages, " +
            "optimizing the filter and search functions, a redesign of the iFrame version for an affiliate " +
            "company (Vattenfall) and a current tech-stack update project. " +
            "This website is build with Django in the back-end and Sass and jQuery in the front-end." ,
        buttonAffiliate: 'https://vattenfall.de/freikarten',
    }
};