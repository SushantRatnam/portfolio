import { Section } from '../../components/Section';
import { Icons } from '../../components/Icons';
import Link from 'next/link';

export default function Intro() {
  return (
    <>
      <Section>
        <div className="flex min-h-screen mt-8 text-center md:mt-0">
          <div className="z-10 max-w-screen-sm m-auto mt">
            <hgroup>
              <h1 className="mt-4 text-3xl font-bold">Sushant Ratnam</h1>
              <h2 className="mt-2 text-xl font-bold text-gradient">Software developer</h2>
            </hgroup>
            <summary className="mx-6 mt-4 leading-8 ">
              <p className="p-4 text-lg opacity-70 font-semibold shadow-black shadow=[0_0_50]">
                Greetings!
                <br/>
                I am a passionate full-stack web developer dedicated to
                crafting remarkable web applications and websites.
              </p>
              <p className="my-4 leading-8">
                Currently stationed in India, I serve as a Senior Software Engineer at{' '}
                <Link href="https://www.zeta.tech/in">
                  <a
                    className="font-semibold transition-all pointer-events-auto text-gradient hover:text-prim-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zeta.{' '}
                  </a>
                </Link>
                My primary focus involves crafting and overseeing multi-tenant back-office solutions
                tailored for banks and fintech enterprises, while also spearheading the development
                of intuitive user interfaces crucial for daily operations. What drives my enthusiasm
                for web development is the ever-changing and dynamic landscape, enriched by the
                collaboration with talented individuals from diverse backgrounds worldwide. I find
                immense joy in unraveling the intricacies of JavaScript, embracing its
                eccentricities and complexities with a grin 😁. Whether it's within the browser or
                through Node.js, I harness the power of JavaScript to engineer web applications that
                tackle intricate challenges head-on.
              </p>
            </summary>
            <Icons />
          </div>
        </div>
      </Section>
    </>
  );
}
