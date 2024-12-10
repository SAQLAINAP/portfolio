import { FocusCards } from "../../AceternityUI/Focus-Cards/focus-cards";
export function FocusCardsDemo() {
  const cards = [
    { title: "Python", src: "../../../../public/images/focus-card/python.png" },
    { title: "C", src: "../../../../public/images/focus-card/c-lang.png" },
    { title: "C++", src: "../../../../public/images/focus-card/cpp.png" },
    { title: "Java", src: "../../../../public/images/focus-card/java.png" },
    { title: "HTML", src: "../../../../public/images/focus-card/html.png" },
    { title: "CSS", src: "../../../../public/images/focus-card/css.png" },
    { title: "JavaScript", src: "../../../../public/images/focus-card/javascript.png" },
    { title: "Node.js", src: "../../../../public/images/focus-card/node.png" },
    { title: "React", src: "../../../../public/images/focus-card/react.png" },
    { title: "Express.js", src: "../../../../public/images/focus-card/nextjs.svg" },
    { title: "Flask", src: "../../../../public/images/focus-card/flask.svg" },
    { title: "MongoDB", src: "../../../../public/images/focus-card/mongodb.png" },
    { title: "MySQL", src: "../../../../public/images/focus-card/mysql.png" },
    { title: "Git", src: "../../../../public/images/focus-card/git.png" },
    { title: "GitHub", src: "../../../../public/images/focus-card/github.png" },
    { title: "Docker", src: "../../../../public/images/focus-card/docker.png" },
    { title: "Kubernetes", src: "../../../../public/images/focus-card/kubernetes.png" },
    { title: "Figma", src: "../../../../public/images/focus-card/figma.png" },
    { title: "Wix", src: "../../../../public/images/focus-card/wix.png" },
    { title: "WordPress", src: "../../../../public/images/focus-card/wordpress.png" },
  ];

  return <FocusCards cards={cards} />;
}

