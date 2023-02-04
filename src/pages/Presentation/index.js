import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Highlights from "pages/Presentation/sections/Highlights";
import Information from "pages/Presentation/sections/Information";
import routes from "routes";
import footerRoutes from "footer.routes";
import Headers from "./sections/Headers";
import TypicalApplication from "./sections/TypicalApplication";

function Presentation() {
  return (
    <>
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar routes={routes} transparent relative />
      </MKBox>
      <Headers />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Highlights />
        <Information />
      </Card>
      <TypicalApplication />
      <MKBox pt={2} mt={3}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
