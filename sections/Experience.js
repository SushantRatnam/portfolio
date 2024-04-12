import React from 'react';
import { Section } from '../components/Section';
import Badge from '../components/Badge';

function JobCard({ job, children }) {
  return (
    <div className="pb-8 mx-4 md:mx-8 md:text-center sm:text-left">
      <h2 className="text-2xl">{job.position}</h2>
      <h3 className="text-xl text-gradient">{job.company}</h3>
      <h4 className="mb-2 font-semibold leading-6 text-gray-500">{job.duration}</h4>
      {job.badgeNames.map((name) => (
        <Badge name={name} key={name} />
      ))}
      <p className="mt-2 leading-8">{children}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <Section anchor="experience">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-8 text-3xl text-center uppercase">Experience</h2>
        <JobCard
          job={{
            company: 'Zeta (Directi)',
            position: 'Senior Software Engineer',
            duration: 'July 2021 - Present',
            badgeNames: ['Vue', 'Typescript', 'NodeJs', 'ExpressJs', 'Jest'],
          }}
        >
          My role includes development of multi-tenant back-office solutions tailored for banks and
          fintech enterprises. We use VueJs with Buefy to create UI interfaces which are reusable
          using our internal component library system. Lerna is used to manage the monorepo and its
          dependencies
        </JobCard>
        <JobCard
          job={{
            company: 'Blackhawk Network',
            position: 'Software Engineer',
            duration: 'June 2020 - July 2021',
            badgeNames: ['ReactJs', 'Javascript', 'NextJs', 'Ecommerce'],
          }}
        >
          As a Software Engineer(Frontend), I was responsible for the development and maintainance
          of our internal CMS which is used to create ecommerce websites for our clients. It helped
          us to create multi tenant websites where SEO was of utmost importance. We leveraged SSR
          and SSG capabilities of NextJs to create best in class performance.
        </JobCard>
        <JobCard
          job={{
            company: 'Capgemini',
            position: 'Software Engineer',
            duration: 'September 2018 - June 2020',
            badgeNames: ['Javascipt', 'ReactJs', 'Bootstrap', 'JQuery'],
          }}
        >
          As a junior dev, My role was to take inputs from the client and translate that to
          technical requirements. I create UI for any new features and also improve the existing
          functionality using ReactJs.
        </JobCard>
      </div>
    </Section>
  );
}
