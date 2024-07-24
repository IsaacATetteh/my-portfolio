"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";
import ShimmerButton from "./ShimmerButton";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4"
      >
        <h1 className="text-white  text-3xl  lg:text-6xl lg:leading-normal font-extrabold ">
          Hello, I&apos;m{" "}
        </h1>
        <h1 className=" mb-4 text-3xl  lg:text-6xl lg:leading-normal font-extrabold text-white text-center">
          <TypeAnimation
            sequence={["Isaac", 3000, "a Web Developer", 3000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="font-extralight text-xl text-center md:text-2xl dark:text-neutral-200 py-4 ">
          And a computer science graduate from the University of Kent.
        </div>
        <ShimmerButton></ShimmerButton>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
