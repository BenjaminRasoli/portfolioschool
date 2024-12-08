import placeHolder from "../assets/images/PlaceHolder.jpg";
import ComputerPhone from "../assets/images/membership-website-infographic.png";

function Hero() {
  return (
    <section className="ssm:p-container ssm:pb-0 flex flex-col justify-center items-center w-full">
      <div className="text-center space-y-6 p-10">
        <h1 className="text-h1 font-eurostile">Lorem, Ipsum Dolor Sit Amet</h1>
        <p className="text-p">
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

      <div className="mt-24 flex justify-center w-full ssm:px-10 px-5">
        <img
          src={ComputerPhone}
          alt="computer phone image"
          className="w-auto h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
