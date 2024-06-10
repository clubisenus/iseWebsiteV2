import { Description } from "@material-ui/icons";
import email from "./email.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import telegram from "./telegram.svg";

export const socials = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/nus_ise/",
    description: "Follow for fun posts and club event updates!"
  },{
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/company/nus-ise-club/",
    description: "View our club’s history and achievements!"
  },
  {
    name: "Telegram",
    icon: telegram,
    link: "https://t.me/ISE2425",
    description: "Join our cohort's channel to connect with your coursemates! "
  },
  
  {
    name: "Email",
    icon: email,
    link: "mailto:club.ise.nus@gmail.com",
    description: "Questions or sponsorship offers? Drop us an email here!"
  },
];
