import React, { useMemo, useState } from "react";
import Testimoni from "../../components/Testimoni";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Layout from "../../components/Layout/Layout";
import Slider from "react-slick";
// import react slick
import Image from "next/image";
import Stars from "../../public/assets/Icon/stars.svg";
import ArrowBack from "../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/assets/Icon/eva_arrow-next-fill.svg";
import SeoHead from "../../components/SeoHead";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users?limit=5");
  const data = await res.json();
  console.log(data);
  return {
    props: { users: data.users },
  };
}

const settings = {
  dots: true,
  customPaging: function (i) {
    return (
      <a className="">
        <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
      </a>
    );
  },
  dotsClass: "slick-dots w-max absolute mt-20  ",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Index = ({ users }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div>
      <SeoHead title="Condesnippet" />
      <Layout>
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 ">
          <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full my-16"></div>
            <div className="flex flex-col w-full my-16" id="api">
              <ScrollAnimationWrapper>
                <motion.h3
                  variants={scrollAnimation}
                  className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm:w-9/12 lg:8/12 mx-auto"
                >
                  <div className="inline-block">
                    Static Site Generation{" "}
                    <Stars className="h-4 w-4 inline-block" />
                  </div>
                </motion.h3>

                <motion.p
                  variants={scrollAnimation}
                  className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-8/12"
                >
                  SSG (แนะนำ) - ตัว HTML จะถูก generate ตอน build time และจะถูก
                  reuse ทุกๆ Request
                </motion.p>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                <motion.div variants={scrollAnimation}>
                  <motion.div
                    variants={scrollAnimation}
                    custom={{ duration: 3 }}
                  >
                    <>
                      <Slider
                        {...settings}
                        arrows={false}
                        ref={setSliderRef}
                        className="flex items-stretch justify-items-stretch"
                      >
                        {users.map((item, index) => (
                          <Link href={"API/" + item.id} key={"link" + index}>
                            <div
                              className="px-3 flex items-stretch"
                              key={index}
                            >
                              <div className="border-2 border-gray-500 hover:border-teal-700 transition-all rounded-lg p-8 flex flex-col">
                                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                  <div className="flex order-2 xl:order-1">
                                    <Image
                                      src={item.image}
                                      height={50}
                                      width={50}
                                      alt="Icon People"
                                    />
                                    <div className="flex flex-col ml-5 text-left">
                                      <p className="text-lg text-black-600 capitalize">
                                        {item.firstName},{item.lastName}
                                      </p>
                                      <p className="text-sm text-black-500 capitalize">
                                        {/* {item.address.address}, */}
                                        {item.address.city},
                                        {item.address.postalCode}
                                      </p>
                                    </div>
                                  </div>
                                  {/* <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                                <p className="text-sm">{item.rating}</p>
                                <span className="flex ml-4">
                                  <Stars className="h-4 w-4" />
                                </span>
                              </div> */}
                                </div>
                                <p className="mt-5 text-left">
                                  “{item.company.title}”.
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </Slider>
                      <div className="flex w-full items-center justify-end">
                        <div className="flex flex-none justify-between w-auto mt-14">
                          <div
                            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-teal-700 border hover:bg-teal-700 hover:text-white-500 transition-all text-teal-700 cursor-pointer"
                            onClick={sliderRef?.slickPrev}
                          >
                            <ArrowBack className="h-6 w-6 " />
                          </div>
                          <div
                            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-teal-700 border hover:bg-teal-700 hover:text-white-500 transition-all text-teal-700 cursor-pointer"
                            onClick={sliderRef?.slickNext}
                          >
                            <ArrowNext className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    </>
                  </motion.div>
                </motion.div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="relative w-full mt-16">
                <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                  <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                    <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                      <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                        Subscribe Now for <br /> Get Special Features!
                      </h5>
                      <p>Let's subscribe with us and find the fun.</p>
                    </div>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                  </div>
                  <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                  ></div>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
