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
  title: "ISE Night Cycling",
  description: `Hey, ISE fam! The countdown is on—just less than ONE WEEK left to sign up for an unforgettable night cycling experience! 🚴‍♂️✨ Wrap up the semester with our annual ISE Night Cycling adventure, where we'll ride through scenic trails, create amazing memories, and celebrate the end of finals together! 🎉
📅 Date: 5-6 December 2024
🕘 Time: 9pm to 6am
📍 Meet-Up: GoCycling @ East Coast Park C4
🗺️ Route: ECP ➔ Changi Jurassic Mile ➔ Marina Barrage 
💲 Fee: $18/pax (or $5 if you bring your own bike!)
`,
  banner: upcomingbanner,
  link: ["https://nus.campuslabs.com/engage/submitter/form/start/662448"],
};
