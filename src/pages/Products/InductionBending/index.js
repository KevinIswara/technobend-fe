import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import footerRoutes from "footer.routes";
import routes from "routes";
import Headers from "./components/Headers";
import Information from "./components/Information";
import Products from "./components/Products";

function InductionBending() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent relative sticky />
      <Headers />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Divider sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
        <Products />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default InductionBending;
