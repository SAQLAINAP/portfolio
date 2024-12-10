"use client";
// import React from "react";
import { StickyScroll } from "../../AceternityUI/Sticky-Scroll/sticky-scroll-reveal";

const content = [
  {
    title: "Software Development",
    description:
      "I can help you build great products on Web. I can top your application with the miracle of AI. I can assist you in building a great software product that will help you grow your business.",
    content: (
      <div
        className="h-full w-full flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Software Development"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Public Speaking",
    description:
      "I can manage huge crowds. My words speak louder than my actions. I can help you in public speaking and make you a great speaker. I can yap nonstop for hours and hours once I get started.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Public Speaking"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Team Management",
    description:
      "I can be the one who makes the way, leads the way and shows the way. I can help you in managing your team and make them work efficiently. I am more of a team player than a team leader.",
    content: (
      <div
        className="h-full w-full flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1553878988-8653a803436e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Team Management"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Tech Lover",
    description:
      "I ❤️ tech, especially the ones that are emerging. I love and wanna explore Quantum Computing, Blockchain, Nanotech, BioInformatics and many more paradigms.",
    content: (
      <div
        className="h-full w-full flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Tech Lover"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];


export function StickyScrollRevealDemo() {
  return (
    <div className="bg-black p-10">
      <StickyScroll content={content} />
    </div>
  );
}