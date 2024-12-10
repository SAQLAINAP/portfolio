import { AnimatedTestimonialsDemo } from "./components/AceternityUI/animated-testimonials/animated-testimonialcomponent";
// import { BentoGridDemo } from "./components/AceternityUI/bento-grid/bento-gridcomponent";
import { FocusCardsDemo } from "./components/AceternityUI/Focus-Cards/focus-card-component"
import FooterComponent from "./components/AceternityUI/footer/footer-component";
import { ImagesSliderDemo } from "./components/AceternityUI/Image-Slider/image-slidercomponent"
import { StickyScrollRevealDemo } from "./components/AceternityUI/Sticky-Scroll/sticky-scroll-revealcomponent"
import { TextRevealCardPreview } from "./components/AceternityUI/text-reveal-card/text-reveal-component";
import { TimelineDemo } from "./components/AceternityUI/Timeline/timelinecomponent";
import { ResponsiveCardGrid } from "./components/AceternityUI/Three-D-Card/ResponsiveCardGrid";
// import { ExpandableCardDemo } from "./components/AceternityUI/Expandable/expandable-cardcomponent";
// import MaskText from "./components/AceternityUI/text-mask/TextMask";
// import GithubHeatmap from "./components/GithubHeatmap";
import './index.css';
function App() {
  

  return (
    <div>
      <ImagesSliderDemo />
      <StickyScrollRevealDemo />
      <FocusCardsDemo />
      {/* <BentoGridDemo /> */}
      <ResponsiveCardGrid />
      <TimelineDemo />
      <AnimatedTestimonialsDemo />
      <TextRevealCardPreview/>
      <FooterComponent />
      {/* <GithubHeatmap/> */}
      {/* <MaskText
        originalText="Thanks for visiting my portfolio!"
        revealText="Hey Stalker!!"
      /> */}
    </div>
  );
}

export default App
