"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative text-center py-20 bg-gradient-to-tr from-gray-900 via-blue-700 to-purple-900 text-white overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20 blur-2xl"
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative text-4xl md:text-5xl font-extrabold mb-6 z-10"
          >
            Empowering Kids to <span className="text-yellow-400">Learn and Thrive</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative text-lg md:text-xl mb-10 max-w-3xl mx-auto z-10"
          >
            Transform education into an exciting journey, blending creativity with engagement.
          </motion.p>
          <div className="relative flex justify-center space-x-6 z-10">
            <Link href="/sign-up" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get Started"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-96 h-96">
                <Image
                  src="/circle.png"
                  alt="Decorative circle image representing learning"
                  className="rounded-full shadow-2xl"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
            <div className="space-y-8">
              <FeatureCard
                icon="/explore.jpeg"
                title="Explore"
                description="Dive into diverse learning activities that are fun and interactive."
              />
              <FeatureCard
                icon="/discover.png"
                title="Discover"
                description="Enable kids to unlock their potential through creative tools."
              />
              <FeatureCard
                icon="/interact.png"
                title="Interact"
                description="Foster skills and confidence with engaging activities."
              />
            </div>
          </div>
        </section>

        {/* Educational Approach Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
              Our Educational Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ApproachCard
                title="Innovative Learning"
                content="We use interactive content, games, and visual storytelling to make education more engaging."
              />
              <ApproachCard
                title="Skill Development"
                content="Beyond academics, we focus on cognitive skills, problem-solving, and creativity."
              />
              <ApproachCard
                title="Personalized Experience"
                content="Each child learns differently, and our platform adapts to individual learning styles."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.02 }}
    className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
    tabIndex="0"
  >
    <Image src={icon} alt={`${title} icon`} width={64} height={64} />
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);
const ApproachCard = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
    tabIndex="0"
  >
    <h3 className="text-gray-900 font-bold text-xl mb-4">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </motion.div>
);

export default Body;
