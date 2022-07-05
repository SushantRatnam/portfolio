import React from 'react';
import { ArrowUpIcon } from '../components/Icons';

function FooterLink({ children, href }) {
  return (
    <a className=" text-gradient" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="py-2 text-center shadow-inner bg-opacity-10 bg-prim-dark">
      <div className="p-2 mx-auto w-fit">
        <h2 className="mb-4 text-3xl text-center uppercase">Get in touch</h2>
        <p>
          I&apos;m always open to new opportunities and projects. <br />
          If you&apos;re looking for development help or have any queries at all, <br /> don&apos;t
          hesitate to <FooterLink href="mailto:sushant.ratnam@gmail.com">contact me</FooterLink>.
        </p>
        <div className="w-8 h-12 py-3 mx-auto">
          <ArrowUpIcon />
        </div>
        <p className="text-sm">
          Created with&nbsp;
          <FooterLink href="https://nextjs.org/">NextJs</FooterLink>&nbsp;&&nbsp;
          <FooterLink href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        </p>
      </div>
    </footer>
  );
}
