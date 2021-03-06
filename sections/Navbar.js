function NavItem({ href, children }) {
  return (
    <a
      className="mx-2 my-3 text-base font-bold uppercase transition-all sm:mx-4 text-gradient hover:text-prim-dark"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header>
      <nav id="navbar" className="absolute top-0 left-0 flex">
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#experience">Experience</NavItem>
      </nav>
    </header>
  );
}
