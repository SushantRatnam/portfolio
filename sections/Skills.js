import React from 'react';
import Badge from '../components/Badge';
import { Section } from '../components/Section';

export default function Skills() {
  return (
    <Section anchor="skills">
      <div>
        <h2 className="mb-8 text-3xl text-center uppercase">Skills & interests</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <SkillSummary />
          <SkillBadges />
        </div>
      </div>
    </Section>
  );
}

function SkillSummary() {
  return (
    <div className="mx-4 mb-6 text-left lg:mb-0">
      <p>
        In addition to my daily tasks, I enjoy learning new technologies and tools which helps
        towards developer productivity. I am also interested in web accessibility and SEO
        optimization which have become really useful lately for most of the websites. I love using
        Javascript both on browser and server side but lately I am inclining towards Typescript
        because of the host of benefits it brings with it.
      </p>
      <p>
        Outside of work, I am frequently working on my side projects or reading and writing blog
        posts. I love listening to tech podcasts to keep myself updated with new technologies.
      </p>
    </div>
  );
}

function SkillBadges() {
  return (
    <div className="flex py-2 mx-4">
      <div className="flex flex-col w-fit min-w-fit">
        <SkillGroup
          title="Web"
          abbreviation="FE"
          skills={[
            'Javscript',
            'ReactJs',
            'NextJs',
            'Vue',
            'NodeJs',
            'ExpressJs',
            'CSS',
            'HTML',
            'Sass',
          ]}
        />
        <SkillGroup title="Tools" abbreviation="Tools" skills={['Git', 'FireBase']} />
      </div>
      <div className="hidden ml-2 sm:flex lg:hidden xl:flex">
        <div className="w-16"></div>
      </div>
    </div>
  );
}

function SkillGroup({ title, abbreviation, skills }) {
  return (
    <div className="flex p-1 px-2 mb-2 leading-10 border border-gray-300 rounded-xl ">
      <div className="items-center hidden ml-1 font-bold align-middle w-28 text-md text-gradient sm:inline ">
        {title}
      </div>
      <div className="items-center inline w-6 mr-1 font-bold text-md text-gradient sm:hidden">
        {abbreviation}:
      </div>
      {skills.map((skill) => (
        <Badge name={skill} key={skill} />
      ))}
    </div>
  );
}
