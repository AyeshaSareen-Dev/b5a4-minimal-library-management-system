import * as motion from "motion/react-client";
import React from "react";
import { Link } from "react-router";
import LoadingAnim from "../../assets/anim/not-found.json";
import Lottie from "react-lottie";
import { FaHome } from "react-icons/fa";

export default function ErrorLayout() {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4">
      <Lottie
        style={{ width: "50vw", height: "fit-content", maxWidth: "400px" }}
        options={{
          loop: true,
          autoplay: true,
          animationData: LoadingAnim,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        // className="max-w-64 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-1/2 border rounded-xl border-gray-300"
      />
      <h1 className="text-sm md:text-base lg:text-xl font-bold text-center text-blue-500">
        <span className="text-primary">Oops! You seem lost in the</span>{" "}
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          H
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.067, repeat: Infinity },
          }}
        >
          i
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.133, repeat: Infinity },
          }}
        >
          m
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.2, repeat: Infinity },
          }}
        >
          a
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.267, repeat: Infinity },
          }}
        >
          l
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.333, repeat: Infinity },
          }}
        >
          a
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.4, repeat: Infinity },
          }}
        >
          y
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.467, repeat: Infinity },
          }}
        >
          a
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.533, repeat: Infinity },
          }}
        >
          s
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, 4, -4, 0],
            transition: { duration: 1.5, delay: 0.6, repeat: Infinity },
          }}
        >
          .
        </motion.span>
      </h1>

      <Link to="/">
        <button className="btn btn-primary">
          <FaHome className="size-5 mr-2" />
          Back to Home
        </button>
      </Link>
    </section>
  );
}
