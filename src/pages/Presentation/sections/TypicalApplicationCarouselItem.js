import MKBox from "components/MKBox";
import PropTypes from "prop-types";

function TypicalApplicationCarouselItem({ image }) {
  return (
    <MKBox
      component="img"
      src={image}
      borderRadius="lg"
      shadow="md"
      minWidth="100%"
      maxWidth="100%"
      height="auto"
      position="relative"
    />
  );
}

TypicalApplicationCarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default TypicalApplicationCarouselItem;
