// import React from 'react';
import { AnimatedCertifications } from "./animated-testimonials";
import cs50xCertificatePic from "../../../../../portfolio/public/images/testimonials/CS50x.png";
import masterCardPic from "../../../../../portfolio/public/images/testimonials/mastercard.png";
import csharpPic from "../../../../../portfolio/public/images/testimonials/csharp_certification.jpg";
import IBMPic from "../../../../../portfolio/public/images/testimonials/cybersecurity-fundamentals.png";
import pwcPic from "../../../../../portfolio/public/images/testimonials/pwc.png";

export function AnimatedTestimonialsDemo() {
  const certifications = [
    {
      quote:
        "I have completed the renowned CS50 certification aimed at teaching the fundamentals of computer science to all the people kicking off their journey in Tech.",
      name: "CS50X by Harvard",
      date: "Dec-2022",
      src: cs50xCertificatePic
    },
    {
      quote:
        "This certification focused on understanding computer science concepts in-depth with real-world problem-solving.",
      name: "CS50 UT by Harvard",
      date: "Feb-2023",
      src: cs50xCertificatePic // Ensure this is the correct image
    },
    {
      quote:
        "Learned the fundamentals of C# programming, enhancing my skills in object-oriented programming and software development.",
      name: "C# by FreeCodeCamp and Microsoft",
      date: "2024",
      src: csharpPic
    },
    {
      quote:
        "Acquired foundational knowledge of cybersecurity, including threat analysis, risk management, and security frameworks.",
      name: "Cybersecurity Fundamentals by IBM SkillsBuild",
      date: "2022",
      src: IBMPic
    },
    {
      quote:
        "Participated in a hands-on virtual case experience, tackling cybersecurity challenges faced by modern businesses.",
      name: "Cybersecurity Virtual Case Experience on Forage by PwC",
      date: "2023",
      src: pwcPic
    },
    {
      quote:
        "Enhanced my understanding of cybersecurity practices through a comprehensive virtual experience program.",
      name: "Cybersecurity Virtual Experience Program on Forage by MasterCard",
      date: "2022",
      src: masterCardPic
    },
  ];

  return (
    <AnimatedCertifications
      certifications={certifications}
      autoplay={true} // Ensure the AnimatedCertifications component supports this prop
    />
  );
}