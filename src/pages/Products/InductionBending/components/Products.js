import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import data from "pages/Products/InductionBending/data/inductionBendingDatas";
import ProductItem from "./ProductItem";

function Products() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, description: imageDescription }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <ProductItem image={image} name={name} description={imageDescription} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));
  return <Container sx={{ mt: 6 }}>{renderData}</Container>;
}

export default Products;
