import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Stories from "./components/sections/Stories";
import Team from "./components/sections/Team";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stories />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}
