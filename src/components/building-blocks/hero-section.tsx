"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 md:px-48">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight leading-3 text-[54px]">
            <span className="text-primary">Bridging</span> gap
            <br />
            between <span className="text-primary">people</span>
            <br />
            and <span className="text-primary underline">applications</span>.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Hello there! 👋 I&apos;m AbdulQahar, a full stack software engineer
            passionate about creating elegant solutions to complex problems.
          </p>
          <p className="text-lg sm:text-xl font-semibold mb-6">
            Full Stack Engineer
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <Link
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Medium
              </Button>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[16rem] md:h-[30rem] lg:w-96 lg:h-[30rem]">
            <Image
              src="/me.png"
              alt="AbdulQahar"
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
