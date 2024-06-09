import bacc1 from "./BACC/2.jpg";


import cip1 from "./CIP/1.jpg";
import cip2 from "./CIP/2.jpg";
import cip3 from "./CIP/3.jpg";

import foc1 from "./FOC/1.jpg";

import iseday1 from "./iseday/1.jpg";
import iseday2 from "./iseday/2.jpg";
import iseday3 from "./iseday/3.jpg";
import iseday4 from "./iseday/4.jpg";
import iseday5 from "./iseday/5.jpg";
import iseday6 from "./iseday/6.jpg";
import iseday7 from "./iseday/7.jpg";
import iseday8 from "./iseday/8.jpg";
import iseday9 from "./iseday/9.jpg";
import iseday10 from "./iseday/10.jpg";
import iseday11 from "./iseday/11.jpg";
import iseday12 from "./iseday/12.jpg";
import iseday13 from "./iseday/13.jpg";
import iseday14 from "./iseday/14.jpg";
import iseday15 from "./iseday/15.jpg";
import iseday16 from "./iseday/16.jpg";
import iseday17 from "./iseday/17.jpg";
import iseday18 from "./iseday/18.jpg";
import iseday19 from "./iseday/19.jpg";
import iseday20 from "./iseday/20.jpg";
import iseday21 from "./iseday/21.jpg";

import lasertag1 from "./lasertag/1.jpg";

import nightcycling1 from "./nightcycling/1.jpg";

import pageLinks from "../pageLinks";

import focposter from "./FOC/poster.jpg";

export const bacc = {
  name: "Business Analytics Case Competition",
  description:
    "NUS-ISE BACC, introduced in 2012, is an outreach effort by the NUS-ISEM department to engage the pre-university students in the growing field of business analytics and attract their interests in pursuing related fields in their higher education. Under this platform, students will be exposed to analytics and ISE concepts, and apply them in solving real-world case problem.",
  images: [bacc1],
};

export const cip = {
  name: "Community Involvement Projects",
  description:
    "Every year, the Club partners with external NGOs to give back to the community and make a difference. This provides our students with an opportunity to experience the joy of voluntary servitude.",
  images: [cip1, cip2, cip3],
};

export const iseday = {
  name: "ISE Day",
  description:
    "This is the day we take a break from lessons and gather for an afternoon of food and chilling! ISE Day is an annual two-part event. The first part consists of informative talks regarding VIP, SEP and NOC followed by a feedback and Q&A session with professors from the ISEM department. The second part is a get together sessions with food, games, giveaways, lucky draw and even performances!",
  images: [
    iseday1,
    iseday2,
    iseday3,
    iseday4,
    iseday5,
    iseday6,
    iseday7,
    iseday8,
    iseday9,
    iseday10,
    iseday11,
    iseday12,
    iseday13,
    iseday14,
    iseday15,
    iseday16,
    iseday17,
    iseday18,
    iseday19,
    iseday20,
    iseday21,
  ],
};

export const lasertag = {
  name: "ISE Laser Tag",
  description: "Placeholder",
  images: [lasertag1],
};

export const nightcycling = {
  name: "ISE Night Cycling",
  description:
    "The annual ISE Night Cycling event is a long time favourite of the ISE ungraduate community. It also serves as a platform for seniors to interact and welcome juniors into ISE!",
  images: [nightcycling1],
};

export const foc = {
  name: "ISE Freshman Orientation Camp",
  description:
    "Every year, we welcome new freshman into our ISE family with a bang! The 4D3N camp, held on the last week of July, serves to introduce freshman into University life, and provides them with a strong support network of seniors and peers to ease their transition into NUS.",
  images: [foc1],
};

export const welfareday = {
  name: "ISE Welfare Day",
  description:
    "The ISE Welfare Day is an initiative to show appreciation for students’ hard work and effort throughout the academic semester. It also serves to encourage and power students through for the upcoming final examinations. Stay tuned for giveaways, be it welfare pack, milk tea...!",
  images: [],
};

export const careertalk = {
  name: "ISE Industry and Career Talk",
  description:
    "ISE Industry and Career Talk is an annual event held in Semester 2 where different industries are invited to share about their company. This event aims to educate ISE undergraduates on how ISE can be applied to different industries and help them understand what companies expect from graduates.",
  images: [],
};

export const frontpage = [
  {
    name: "ISE Freshman Orientation Camp",
    description:
      "Every year, we welcome new freshman into our ISE family with a bang! The 4D3N camp, held on the last week of July, serves to introduce freshman into University life, and provides them with a strong support network of seniors and peers to ease their transition into NUS.",
    image: foc1,
    link: pageLinks.events.foc,
  },
  {
    name: "ISE Day",
    description:
      "This is the day we take a break from lessons and gather for an afternoon of food and chilling! ISE Day is an annual two-part event. The first part consists of informative talks regarding VIP, SEP and NOC followed by a feedback and Q&A session with professors from the ISEM department. The second part is a get together sessions with food, games, giveaways, lucky draw and even performances!",
    image: iseday1,
    link: pageLinks.events.day,
  },
  {
    name: "ISE Night Cycling",
    description:
      "The annual ISE Night Cycling event is a long time favourite of the ISE ungraduate community. It also serves as a platform for seniors to interact and welcome juniors into ISE!",
    image: nightcycling1,
    link: pageLinks.events.cycling,
  },
  {
    name: "ISE Laser Tag",
    description: "Placeholder",
    image: lasertag1,
    link: pageLinks.events.lasertag,
  },
  {
    name: "Community Involvement Projects",
    description:
      "Every year, the Club partners with external NGOs to give back to the community and make a difference. This provides our students with an opportunity to experience the joy of voluntary servitude.",
    image: cip1,
    link: pageLinks.events.cip,
  },
  {
    name: "ISE Industry and Career Talk",
    description:
      "ISE Industry and Career Talk is an annual event held in Semester 2 where different industries are invited to share about their company. This event aims to educate ISE undergraduates on how ISE can be applied to different industries and help them understand what companies expect from graduates.",
    image: [], //update when pictures are in
    link: pageLinks.events.careertalk,
  },
  {
    name: "ISE Welfare Day",
    description:
      "The ISE Welfare Day is an initiative to show appreciation for students’ hard work and effort throughout the academic semester. It also serves to encourage and power students through for the upcoming final examinations. Stay tuned for giveaways, be it welfare pack, milk tea...!",
    image: [], //update when pictures are in
    link: pageLinks.events.welfare,
  },
  {
    name: "Business Analytics Case Competition",
    description:
      "NUS-ISE BACC, introduced in 2012, is an outreach effort by the NUS-ISEM department to engage the pre-university students in the growing field of business analytics and attract their interests in pursuing related fields in their higher education. Under this platform, students will be exposed to analytics and ISE concepts, and apply them in solving real-world case problem.",
    image: bacc1,
    link: pageLinks.events.bacc,
  },
  {
    name: "... and many more!",
    description: "We are always exploring new and exciting events for the ISE community! Stay tuned for more exciting events ;)",
  }
];

export const upcoming = [
  {
    name: "ISE Fresh Orientation Camp '24",
    poster: focposter,
    details: "Attention, Adventurer! ✨ Step into the extraordinary world of Aventura! ♣️♥️♦️♠️ Brace yourself for a thrilling journey filled with mysterious challenges, whimsical wonders, and unexpected twists. As part of this year's Freshman Orientation Camp, the ISE Club invites you to embark on an adventure like no other. The camp will be a 3 days physical programme at the NUS Kent Ridge Campus. ",
    link: "https://bit.ly/Aventura2024"
  }
]