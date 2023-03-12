import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/induction-bending-information.jpg";

function ProductRange() {
  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={2}>
        <MKBox
          component="img"
          src={bgImage}
          alt="Product range"
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: bgImage,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          Product range
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            O.D. : 2” – 52”
          </MKTypography>
          <MKTypography variant="body2" component="p" color="text">
            Radius : 3D – 10D
          </MKTypography>
          <MKTypography variant="body2" component="p" color="text">
            Degree : 1-180deg
          </MKTypography>
        </MKBox>
      </MKBox>
    </Card>
  );
}

export default ProductRange;
