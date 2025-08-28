"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Video Streaming Website",
    description:
      "A video streaming website built with Next.js featuring secure authentication using JWT and cookies, a dashboard for uploading videos and thumbnails with ImageKitIO, and core functionalities like watching, liking/disliking videos, adding to watch later, and creating playlists.Project 1 description",
    image: "/images/project1.png",
    gitUrl: "https://github.com/Vansh2744/video-streaming",
    previewUrl: "https://video-streaming-mu.vercel.app",
  },
  {
    id: 2,
    title: "AI Gallery",
    description:
      "An AI-powered image generation website built with JWT-based authentication, featuring a search bar where users can enter prompts to generate images, and the ability to save generated images in a personal gallery.",
    image: "/images/project2.png",
    gitUrl: "https://github.com/Vansh2744/Ai-Gallery",
    previewUrl: "https://ai-gallery-frontend.onrender.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
