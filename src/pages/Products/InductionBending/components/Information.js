import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ProductRange from "./ProductRange";

function Information() {
  return (
    <MKBox className="information" id="information" component="section" pt={10} pb={7}>
      <Container>
        <MKTypography variant="h3" fontWeight="bold">
          Induction Heating
        </MKTypography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <MKBox mb={3}>
              <MKTypography variant="body2">
                Induction heating is a controllable heat source, and in combination with appropriate
                bending methods, can give a consistent material properties and dimensional effects
                for a wide range of pipe materials – including low and high yield carbon steels,
                alloy steels, stainless steels, Cr-Ni alloys & titanium.
              </MKTypography>
            </MKBox>
            <MKBox mb={3}>
              <MKTypography variant="body2">
                It is both a shaping and heat treatment process. Induction heating is utilized to
                generate a narrow circumferential heat band in the pipe during the bending process.
                This technique enables bending of large diameter and heavy wall pipe with relatively
                little force.
              </MKTypography>
            </MKBox>
            <MKBox mb={3}>
              <MKTypography variant="body2">
                Aim of induction bending is that the end results of integrity (material properties
                and defects) and dimensions are achieved as agreed. This requires advanced process
                control over the principal manufacturing parameters of temperature, speed and
                cooling rate, as well as the important start and stop procedures.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <ProductRange />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
