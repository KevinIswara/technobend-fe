/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Icon from "@mui/material/Icon";
import InductionBending from "pages/Products/InductionBending";

const routes = [
  {
    name: "Products",
    icon: <Icon>dashboard</Icon>,
    route: "/products/induction-hot-bend",
    component: <InductionBending />,
    collapse: [
      {
        name: "API 5L/ASME B16.49 Induction Hot Bend",
        route: "/products/induction-hot-bend",
        component: <InductionBending />,
      },
      {
        name: "Ordering Information",
        route: "/products/order",
        component: <InductionBending />,
      },
      {
        name: "ASTM A234 BW Fittings",
        route: "/products/bw-fittings",
        component: <InductionBending />,
      },
    ],
  },
  {
    name: "Project List",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Onshore",
        href: "/",
      },
      {
        name: "Offshore Platform",
        href: "/",
      },
      {
        name: "Onshore Crude & Gas Transmission Pipeline",
        href: "/",
      },
      {
        name: "Powerplant",
        href: "/",
      },
      {
        name: "Refinery",
        href: "/",
      },
      {
        name: "Fertilizer Plant",
        href: "/",
      },
      {
        name: "General Industries",
        href: "/",
      },
    ],
  },
  {
    name: "manufacturing process",
    icon: <Icon>engineering</Icon>,
    href: "/",
  },
  {
    name: "testing & inspection",
    icon: <Icon>architecture</Icon>,
    href: "/",
    collapse: [
      {
        name: "Non Destructive Test",
        href: "/",
      },
      {
        name: "Destructive Test",
        href: "/",
      },
    ],
  },
  {
    name: "Others",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Technical",
        description: "All information about how we work.",
        href: "/",
      },
      {
        name: "Certification",
        description: "See our list of certificate.",
        href: "/",
      },
      {
        name: "Warranty",
        description: "Learn more about our warranty.",
        href: "/",
      },
      {
        name: "customer ref list",
        description: "Find out more about our customer.",
        href: "/",
      },
    ],
  },
];

export default routes;
