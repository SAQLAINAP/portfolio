// import React from 'react';
import { ThreeDCard } from './ThreeDCard';

// Card data with web images
const cardData = [
  {
    title: "NewsPod",
    description: "Your personalized agent, catering you with the most precise and authentic information from across the globe. Freshly brought from Research Papers and Journals to Your Emails Everyday.",
    stack: "React, Express, Node, Flask, Python",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://github.com/SAQLAINAP/NewsPod",
  },
  {
    title: "BigMiles",
    description: "A full-stack web application designed to estimate the fuel cost for your journey. Select your car, enter your starting location, destination, and fuel price, and the app will calculate the estimated fuel costs and other expenses.",
    stack: "Mongo, Express, React, Node, Google Maps API",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
    link: "https://github.com/SAQLAINAP/BigMiles",
  },
  {
    title: "Vidtime",
    description: "YouTube Video and Playlist Downloader CLI. Easily retrieve comprehensive information about YouTube videos and playlists, and effortlessly download them to your local device with this Python-based script on CLI.",
    stack: "Python, Pytube, Tkinter",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    link: "https://github.com/SAQLAINAP/Vidtime",
  },
  {
    title: "Sherlock",
    description: "An intuitive web application designed to predict a person's gender and nationalities based on their name, by leveraging the power of APIs. Offers users a seamless experience to input a name and receive insightful predictions.",
    stack: "EJS, CSS, JS, Nationalize API, Genderize API",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://github.com/SAQLAINAP/Sherlock",
  },
  {
    title: "NoteChain",
    description: "A cutting-edge Web 3-powered platform where learners and creators unite. Create, share, and earn tokens for your curated course notes. Take quizzes, learn daily, and get rewarded! All decentralized.",
    stack: "Web3, Node, IPFS, OrbitDB, Express, React, FUNC, TONx API",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    link: "https://github.com/SAQLAINAP/NoteChain",
  },
  {
    title: "RandoNaGe",
    description: "Welcome to the Team Name Generator for Hackathons! This project is designed to help hackathon participants come up with creative and unique team names.",
    stack: "HTML, CSS, EJS, JS, JSON",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://github.com/SAQLAINAP/RandoNaGe",
  },
  {
    title: "DENSA",
    description: "Daily Email News Subscription App is a Python-based web application built with Flask. It allows users to subscribe with their email to receive daily news headlines via email. The app scrapes news from the web and provides it to you.",
    stack: "HTML, CSS, Node, Flask",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://github.com/SAQLAINAP/DENSA",
  },
];

export function ResponsiveCardGrid() {
  return (
    // Container with reduced vertical padding
    <div className="container mx-auto px-2 py-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center my-8 pt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            My Projects
        </h1>
      {/* Grid with reduced gap between rows and columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1">
        {cardData.map((card, index) => (
          <div key={index} className="w-full">
            <ThreeDCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

