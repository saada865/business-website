import Carousel from "./Carousel";
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";

const slides = [
  {
    picture: img1,
    review: "Be genuine in your assessment, and proe.",
    name: "Peter Bennett",
  },
  {
    picture: img2,
    review: "For you,validates that y meet their needs.",
    name: "Skylar Bates",
  },
  {
    picture: img3,
    review: "When you reachheir testimonialyou value them.",
    name: "John Oliver",
  },
];

const CarouselParent = () => {
  return (
    <div className="bg-[#F5F5F5] p-10">
      <div className="flex justify-center items-center h-[500px] bg-neutral-200  rounded-2xl">
        <div className="">
          <Carousel autoSlide={true}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-black font-bold p-4"
              >
                <img
                  src={slide.picture}
                  alt=""
                  className="w-36 h-36 rounded-full mb-4"
                />
                <p className="lg:text-2xl italic mb-4">"{slide.review}"</p>
                <p className="text-sm">{slide.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselParent;
