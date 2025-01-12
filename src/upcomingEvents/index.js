import BACC from "../upcomingEvents/BACC.JPG";
import ISEDay from "../upcomingEvents/ISEDay.jpg";
import NightCycling from "../upcomingEvents/NightCycling.jpg";
import WelfareDay from "../upcomingEvents/WelfareDay.jpg";
import CIP from "../upcomingEvents/CIP.jpg";
import FOC from "../upcomingEvents/FOC.jpg";
import SpecialEvents from "../upcomingEvents/SpecialEvents.jpg";
import AlumniSeries from "../upcomingEvents/AlumniSeries.jpg";
import upcomingbanner from "../upcomingEvents/banner.png";

export const upcomingTimeline = [
    {
        title: "Alumni Series",
        date: "November 2024",
        specifics: "Week 12",
        picture: AlumniSeries,
        route: "/iseday",
    },
    {
        title: "ISE Welfare Day",
        date: "November 2024",
        specfics: "Week 12-13",
        picture: WelfareDay,
        route: "/welfareday",
    },
    {
        title: "Night Cycling",
        date: "December 2024",
        specfics: "Winter Vacation",
        picture: NightCycling,
        route: "/isenightcycling",
    },

    {
        title: "Semester 2",
        date: "",
        specfics: "",
        picture: "",
        route: "",
    },
    {
        title: "Community Involvement Project",
        date: "January 2024",
        specfics: "Recess Week",
        picture: CIP,
        route: "/cip",
    },
    {
        title: "ISE Day",
        date: "Feburary 2025",
        specfics: "",
        picture: ISEDay,
        route: "/iseday",
    },
    {
        title: "Business Analytics Case Competition",
        date: "Feburary 2025",
        specfics: "Recess week",
        picture: BACC,
        route: "/nusisebacc",
    },
    {
        title: "ISE Welfare Day",
        date: "April 2025",
        specfics: "Week 12-13",
        picture: WelfareDay,
        route: "/welfareday",
    },
    {
        title: "Special Events",
        date: "May 2025",
        specfics: "Summer Vacation",
        picture: SpecialEvents,
        route: "/specialevents",
    },
    {
        title: "Freshman Orientation Camp",
        date: "June/July 2025",
        specfics: "Summer Vacation",
        picture: FOC,
        route: "/isefoc",
    },
];

export const upcomingEvent = {
    title: " ISE CIP",
    description: `Hey, ISE fam!
Kick off the new year by making a meaningful impact with our ISE CIP: Seniors' Home Visit! 💖 Join us for an afternoon of fun activities, heartfelt conversations, and unforgettable moments as we spread joy to the seniors at SASCO@HongSan. 🌟
📅 Date: 18 January 2025
🕒 Time: 12:30 PM - 15:30 PM
📍 Location: SASCO@HongSan
This is your chance to give back to the community and make a difference! Together, we’ll bring smiles to their faces through games, interactions, and meaningful connections.
`,
    banner: upcomingbanner,
    link: ["https://forms.office.com/r/84aeL5VZ77"],
};
