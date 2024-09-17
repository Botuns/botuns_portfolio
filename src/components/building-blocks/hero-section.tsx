"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-[700] mb-4 leading-tight leading-3 text-[54px]">
            Bridging gap
            <br />
            between people
            <br />
            and applications.
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Hello there 👋, I&apos;m AbdulQahar.I&apos;m a full stack software
            engineer passionate about creating elegant solutions to complex
            problems.
          </p>
          <p className="text-xl font-semibold mb-6">Full Stack Engineer</p>
          <div className="flex space-x-4 mb-8">
            <Link
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Medium</Button>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-[30rem]">
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
