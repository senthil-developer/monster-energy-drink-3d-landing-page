import { IoMail, IoLogoGithub } from "react-icons/io5";

type Link = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export const Footer = () => {
  return (
    <footer className="flex gap-3 bg-[#ff0000]">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.icon}
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </footer>
  );
};

const links: Link[] = [
  { label: "Github", href: "/", icon: <IoLogoGithub className="size-10" /> },
  { label: "Email", href: "/about", icon: <IoMail className="size-10" /> },
];
