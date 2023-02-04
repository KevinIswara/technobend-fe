/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import catalogue from "assets/images/catalogue.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <MKBox sx={{ perspective: "50rem" }}>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  borderRadius="lg"
                  width="100%"
                  position="relative"
                  zIndex={2}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { linearGradient, rgba },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.info.main, 0.5),
                        rgba(gradients.info.main, 0.5)
                      )}, url(${catalogue})`,
                    backgroundSize: "cover",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
                    <MKTypography variant="h2" color="white" my={2}>
                      <Icon>shopping_bag</Icon>
                    </MKTypography>
                    <MKTypography variant="h3" color="white" gutterBottom>
                      Check Our Catalogue Now!
                    </MKTypography>
                    <MKButton color="white">Download Catalogue</MKButton>
                  </MKBox>
                </MKBox>
              </Card>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Best Technologies"
                  description="We used high frequency induction bending for the best quality of pipe and BW fitting for more flexible route."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Best Result"
                  description="We can solve the most challenging problems with out high-end engineering solutions to pipeline routine designs."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Customer First"
                  description="We offer professional, high-quality, and trustworthy products & services"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Easy to apply"
                  description="Tell us what you need and we provide you the best design & materials selection for you to choose"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
