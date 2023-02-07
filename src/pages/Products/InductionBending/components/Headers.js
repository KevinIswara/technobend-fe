import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import bgImage from "assets/images/induction-bending-header.jpg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-scroll";

function Headers() {
  return (
    <MKBox
      minHeight="90vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            API 5L/ASME B16.49 Induction Hot Bend
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            A precisely controlled and efficient piping bending technique
          </MKTypography>
          <MKBox mt={2}>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              <Link
                activeClass="information"
                to="information"
                spy
                smooth
                offset={50}
                duration={100}
              >
                Learn More
              </Link>
            </MKButton>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Headers;
