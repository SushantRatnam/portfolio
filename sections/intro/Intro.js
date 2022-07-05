import { Section } from "../../components/Section";
import { Icons } from "../../components/Icons";
import Link from "next/link";
// import Vanta from './Vanta';
// import { isMobile } from '../../utils';

export default function Intro() {
  return (
    <>
      {/* {!isMobile() && <Vanta />} */}
      <Section>
        <div className="flex min-h-screen mt-8 text-center md:mt-0">
          <div className="z-10 max-w-screen-sm m-auto mt">
            <hgroup>
              <h1 className="mt-4 text-3xl font-bold">Sushant Ratnam</h1>
              <h2 className="mt-2 text-xl font-bold text-gradient">
                Software developer
              </h2>
            </hgroup>
            <summary className="mx-6 mt-4 leading-8 ">
              <p className="p-4 text-lg opacity-70 font-semibold shadow-black shadow=[0_0_50]">
                Hello, I am a full stack web developer and have worked on
                creating awesome web applications and websites.
              </p>
              <p className="my-4 leading-8">
                Bases out of India, Currently I&apos;m working as a
                SDEII(Frontend) at{" "}
                <Link href="https://www.zeta.tech/in">
                  <a
                    className="font-semibold transition-all pointer-events-auto text-gradient hover:text-prim-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zeta Suite{" "}
                  </a>
                </Link>
                and am responsible for creating best in class employee benefit
                program and tools associated with it. What excites me about web
                development is the ever changing and continuously evolving
                landscape with awesome folks in the globally diversed comunity.
                I love Javascript including the wierd and hard parts 😁 and I
                use it in the browser as well as with nodeJs to create web apps
                that solves complex problems.
              </p>
            </summary>
            <Icons />
          </div>
        </div>
      </Section>
    </>
  );
}
