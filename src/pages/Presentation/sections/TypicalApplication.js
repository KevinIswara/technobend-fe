import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import bgImage from "assets/images/bg-typical-application.jpg";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import TypicalApplicationCarousel from "./TypicalApplicationCarousel";

function TypicalApplication() {
  const datas = [
    {
      title: "Transmission lines",
      description: "Providing the best oil, gas, water transmission lines.",
    },
    {
      title: "Boiler & ancillary piping",
      description: "We can provide all the ancillary equipment required for any boiler.",
    },
    {
      title: "Gathering stations, Process Piping & Drain lines",
      description: "Let us analyze and provide you the solutions.",
    },
    {
      title: "Pulp & Paper, Refineries, Petrochemicals & Power plants",
      description: "",
    },
    {
      title: "Firewater system, waste water treatment, & Plumbing",
      description: "",
    },
    {
      title: "Offshore Platform",
      description: "",
    },
  ];

  return (
    <MKBox
      display="flex"
      alignItems="center"
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      minHeight="90vh"
      width="100%"
    >
      <Container>
        <Grid container item xs={6} lg={12} sx={{ ml: { xs: 0, lg: 6 } }}>
          <Grid container item xs={12} lg={6}>
            <MKTypography variant="h1" color="white" mb={1}>
              Typical Application
            </MKTypography>
            <Grid item>
              <Grid container justifyContent="flex-start">
                {datas?.map((data) => (
                  <Grid item xs={12} md={6} pr={1}>
                    <MKBox mb={1}>
                      <DefaultInfoCard
                        title={data.title}
                        titleColor="white"
                        descriptionColor="light"
                        description={data.description}
                      />
                    </MKBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} lg={5}>
            <MKBox borderRadius="lg" shadow="md" width="100%" position="relative">
              <TypicalApplicationCarousel />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TypicalApplication;
