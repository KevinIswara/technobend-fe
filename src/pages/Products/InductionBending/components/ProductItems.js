import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import ImgsViewer from "react-images-viewer";
import ProductItem from "./ProductItem";

function ProductItems({ items }) {
  const [currImg, setCurrImg] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = items.map(({ image, name }) => ({
    src: `data:image/jpeg;base64,${image}`,
    caption: name,
  }));

  const handleImageClick = (index) => {
    setIsOpen(true);
    setCurrImg(index);
  };

  const handleImageClose = () => {
    setIsOpen(false);
  };

  const gotoNextImg = () => {
    setIsOpen(true);
    const index = currImg + 1;
    setCurrImg(index);
  };

  const gotoPrevImg = () => {
    setIsOpen(true);
    const index = currImg - 1;
    setCurrImg(index);
  };

  const renderData = items.map(({ image, name, description: imageDescription }, index) => (
    <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
      <ProductItem
        image={image}
        name={name}
        description={imageDescription}
        onClick={handleImageClick}
        index={index}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={3}>
      <ImgsViewer
        imgs={images}
        isOpen={isOpen}
        onClickPrev={gotoPrevImg}
        onClickNext={gotoNextImg}
        onClose={handleImageClose}
        currImg={currImg}
      />
      {renderData}
    </Grid>
  );
}

ProductItems.propTypes = {
  items: PropTypes.arrayOf({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItems;
