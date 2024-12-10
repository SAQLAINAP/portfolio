import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./image-slider";
import Typewriter from 'typewriter-effect';
import styled, { keyframes } from 'styled-components';

// Import images from the feature-head folder
import astronautImg from "../../../../public/images/feature-head/astronaut.jpg";
import jokerImg from "../../../../public/images/feature-head/joker.jpg";
import sapinstaImg from "../../../../public/images/feature-head/sapinsta.jpg";
import spidermanImg from "../../../../public/images/feature-head/spiderman.jpg";
import nmit from "../../../../public/images/feature-head/Saqlain_nmit.jpg";
// import shangrila from "../../../../public/images/feature-head/Saqlain_shangri.jpg";
import Saplabs from "../../../../public/images/feature-head/Saqlain_sap.jpg"; 

// Define the keyframes for the marquee effect
const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Define the styled components
const TypewriterContainer = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 5.75rem;
  }
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to bottom, #fafafa, #d4d4d4);
  padding: 1rem 0;
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeText = styled.div`
  display: inline-block;
  animation: ${marqueeAnimation} 10s linear infinite;
`;

export function ImagesSliderDemo() {
  const images = [
    astronautImg,
    jokerImg,
    sapinstaImg,
    spidermanImg,
    nmit,
    // shangrila,
    Saplabs,
   ];

  return (
    <ImagesSlider className="h-screen" images={images} autoplay={true} overlay={true}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <TypewriterContainer>
          <Typewriter
            options={{
              strings: ['Hey There', 'My Name is', 'Saqlain Ahmed P'],
              autoStart: true,
              loop: true,
              cursor: '|',
              delay: 75,
            }}
          />
        </TypewriterContainer>
        <MarqueeContainer>
          <MarqueeText>
            <span style={{ color: 'gold' }}>Welcome to My Portfolio!!</span>
          </MarqueeText>
        </MarqueeContainer>
      </motion.div>
    </ImagesSlider>
  );
}