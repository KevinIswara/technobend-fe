import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ProductItem({ image, name, description, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="10rem"
      maxHeight="10rem"
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    >
      <MKBox
        component="img"
        src={`data:image/jpeg;base64,${image}`}
        alt={name}
        width="100%"
        minHeight="10rem"
        maxHeight="10rem"
        sx={{ objectFit: "cover" }}
      />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      <Tooltip title={name} placement="top">
        {imageTemplate}
      </Tooltip>
      {name || description ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography variant="h6" fontWeight="bold">
              {name}
            </MKTypography>
          )}
          {description && (
            <MKTypography variant="button" fontWeight="regular" color="secondary">
              {description}
            </MKTypography>
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductItem;
