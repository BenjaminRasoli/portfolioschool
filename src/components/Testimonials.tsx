import { testimonials } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

function Testimonials() {
  return (
    <div id="testimonials" className="scroll-m-6 p-5 pt-[64px] zl:p-container text-center">
      <h1 className="text-h1">Testimonials</h1>
      <p className=" text-p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="my-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="py-8 px-8 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center min-h-[400px]">
              <div className="flex justify-center md:justify-start -mt-16">
                <img
                  alt={testimonial.author}
                  className="w-24 h-24 object-cover rounded-full border-2 border-indigo-500"
                  src={testimonial.imgSrc}
                />
              </div>
              <div className="mt-4 max-w-xl text-center overflow-y-auto max-h-[150px]">
                <h2 className="text-h2">{testimonial.title}</h2>
                <p className="mt-2 text-base">{testimonial.content}</p>
              </div>

              <div className="mt-4">
                <p className="text-h4">{testimonial.author}</p>
                <p className="text-sm">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
