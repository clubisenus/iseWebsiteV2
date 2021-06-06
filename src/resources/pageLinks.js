/*
central record of websites we link to
makes it easier to set relative links
xyz: domain+"xyz"
*/

let domain = process.env.PUBLIC_URL + '/#/'
//event pages
let pageLinks = {
    signUps: {
        day: "https://orgsync.com/134642/forms/370677",
        night: "https://docs.google.com/forms/d/e/1FAIpQLSfLIVUp2zXMl7CkCYZ-g0b1RpYPy10xh3aGUhwf1K2hv2EyXA/viewform?usp=sf_link",
        cycling: "https://bit.ly/isenightcycling19"
    },
    external: {
        instagram: "https://www.instagram.com/nus_ise/",
        facebook: "https://www.facebook.com/pg/NUSISEClub/",
        linkedin: "https://www.linkedin.com/company/14617038/",
        email: "mailto:club.ise.nus@gmail.com"
    },
    internal: {
        domain,
        about: domain + "about",
        mc18: domain + "18mc",
		mc19: domain + "19mc",
        blog: domain + "blog",
        bio:domain + "bio",
        shop: domain + "shop",
        sponsors: domain + "sponsorship",
        contact: domain + "contact"
    },
    events: {
        foc: domain + "isefoc",
        day: domain + "iseday",
        night: domain + "isenight",
        cycling: domain + "isenightcycling",
        welfare: domain + "welfare",
        cip: domain + "cip",
        careertalk: domain + "careertalk",
        bacc: "https://nusiseclub.com/bacc"
    }
}
export default pageLinks