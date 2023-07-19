"use client";
import bannerOne from "../public/images/banner/bannerOne.webp";
import bannerTwo from "../public/images/banner/bannerTwo.webp";
import bannerThree from "../public/images/banner/bannerThree.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import FadeIn from "./FadeIn";
const Banner = () => {
  return (
    <div className="bg-primeColor w-full rounded-bl-3xl rounded-br-3xl relative px-4">
      <Container>
        <div className="text-white  grid md:grid-cols-2 gap-20 font-titleFont place-items-center">
          <div className="flex flex-col gap-6 xl:gap-10">
            <FadeIn>
              <h1 className="text-3xl md:text-2xl mdl:text-3xl lgl:text-4xl xl:text-5xl font-semibold">
                Showcase your creativity
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-sm mdl:text-base tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                obcaecati, ut illum explicabo consequatur nostrum officiis
                assumenda. Suscipit accusamus aut, ullam, similique omnis
                laudantium impedit facilis quidem assumenda provident soluta, at
                tenetur mollitia blanditiis praesentium accusantium. Praesentium
                natus porro doloremque odio eos in, quas quos! Eum fugiat
                molestias quo ut!
              </p>
            </FadeIn>
            <FadeIn>
              <div className="w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                <input
                  className="w-full h-12 border-[1px] text-base text-gray-600 placeholder:tracking-wide border-gray-300 rounded-xl px-4 outline-none hover:border-primeColor focus-visible:border-primeColor duration-300"
                  type="text"
                  placeholder="Email"
                />
                <button className="w-full h-12 rounded-xl bg-black text-white uppercase font-medium text-sm tracking-wider hover:bg-green-950 cursor-pointer duration-300 group">
                  next
                </button>
              </div>
            </FadeIn>
          </div>
          <div className="w-full relative flex justify-center items-center gap-6">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center z-20"
            >
              <Image
                className="w-52 rounded-2xl object-cover "
                src={bannerOne}
                alt="bannerImg"
              />
            </motion.div>

            <div className="flex flex-col gap-7 z-20">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  className="w-52 rounded-2xl object-cover"
                  src={bannerTwo}
                  alt="bannerImg"
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="w-52 rounded-2xl object-cover"
                  src={bannerThree}
                  alt="bannerImg"
                />
              </motion.div>
            </div>
            <div className="w-72 h-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 blur-3xl opacity-80" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
