import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

// const date = new Date().getFullYear();

export default {
  brand: {
    name: "TechnoBend",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/people/Technobend-Indonesia/100063777990557/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/technobend",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/technobend-indonesia-63617929/?originalSubdomain=id",
    },
  ],
  menus: [
    {
      name: "Event",
      items: [{ name: "All event", href: "https://www.creative-tim.com/presentation" }],
    },
    {
      name: "contact us",
      items: [
        { name: "Office", href: "https://www.creative-tim.com/terms" },
        { name: "Factory", href: "https://www.creative-tim.com/privacy" },
        { name: "Send us a message", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      &copy; 2023 Technobend | Induction Bend and BW Fitting Manufacturer, All right reserved.{" "}
    </MKTypography>
  ),
};
