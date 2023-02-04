import typicalApplicationImage1 from "assets/images/typical-application-1.jpg";
import typicalApplicationImage2 from "assets/images/typical-application-2.jpg";
import typicalApplicationImage3 from "assets/images/typical-application-3.jpg";
import typicalApplicationImage4 from "assets/images/typical-application-4.jpg";
import Carousel from "react-material-ui-carousel";
import TypicalApplicationCarouselItem from "./TypicalApplicationCarouselItem";

function TypicalApplicationCarousel() {
  const carouselDatas = [
    {
      image: typicalApplicationImage1,
    },
    {
      image: typicalApplicationImage2,
    },
    {
      image: typicalApplicationImage3,
    },
    {
      image: typicalApplicationImage4,
    },
  ];
  return (
    <Carousel>
      {carouselDatas.map((item) => (
        <TypicalApplicationCarouselItem image={item.image} />
      ))}
    </Carousel>
  );
}

export default TypicalApplicationCarousel;
