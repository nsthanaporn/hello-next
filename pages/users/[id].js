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
import ButtonOutline from "../../components/misc/ButtonOutline";
import Link from "next/link";
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const data = await res.json();
  const paths = data.users.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/users/" + id);
  const data = await res.json();
  console.log(data);
  return {
    props: { user: data },
  };
}
export default function APIDetail({ user }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div>
      <SeoHead title="Condesnippet" />
      <Layout>
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 mt-20">
          <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full">
              <ScrollAnimationWrapper>
                <motion.h3
                  variants={scrollAnimation}
                  className="text-sm sm:text-sm lg:text-sm font-normal text-black-600 leading-relaxed"
                >
                  Let's identify the ideal user for you and approach them with
                  enthusiasm and positivity.
                </motion.h3>
              </ScrollAnimationWrapper>
              <div>
                <ScrollAnimationWrapper className="flex justify-center mt-10">
                  <motion.div
                    variants={scrollAnimation}
                    className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                      <Image
                        src={user.image}
                        width={145}
                        height={165}
                        alt="Free Plan"
                      />
                    </div>
                    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                      {user.lastName}, {user.firstName}
                    </p>
                    <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                      <li className="relative check custom-list my-2">
                        Age: {user.age}
                      </li>
                      <li className="relative check custom-list my-2">
                        Weight: {user.weight}
                      </li>
                      <li className="relative check custom-list my-2">
                        Height: {user.height}
                      </li>
                      <li className="relative check custom-list my-2">
                        BloodGroup: {user.bloodGroup}
                      </li>
                    </ul>
                    <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                      <p className="text-sm text-black-600 text-center mb-4 ">
                        {user.university}
                      </p>
                      <Link href={"/API"}>
                        <ButtonOutline>Back</ButtonOutline>
                      </Link>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
