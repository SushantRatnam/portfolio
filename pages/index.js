import Experience from '../sections/Experience';
import Footer from '../sections/Footer';
import Intro from "../sections/intro/Intro";
import Navbar from "../sections/Navbar";
import Projects from '../sections/Projects';
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
     <Experience />
      <Footer />
    </main>
  );
}
