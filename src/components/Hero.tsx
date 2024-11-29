import placeHolder from "../assets/images/PlaceHolder.jpg";
import ComputerPhone from "../assets/images/ComputerPhoneImage.png";
import heroDevices from "../assets/images/hero-devices.svg";
import a from "../assets/images/membership-website-infographic.png";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="text-center space-y-6 p-10">
        <h1 className="text-5xl font-semibold text-white font-eurostile">
          Lorem, Ipsum Dolor Sit Amet
        </h1>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col justify-center items-center space-y-4">
          <img
            className="rounded-full w-60 h-auto border-solid border-2"
            src={placeHolder}
            alt="Place holder image"
          />
          <a
            href="#contact"
            className="text-lg px-6 py-2 border-2 border-transparent rounded-full font-semibold hover:bg-Main hover:text-White"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="mt-24 flex justify-center w-full">
        <img src={a} alt="computer phone image" className="w-2/4 h-auto" />
      </div>

      <div className="w-full h-32 bg-Main p-0"></div>
    </section>
  );
}

export default Hero;
