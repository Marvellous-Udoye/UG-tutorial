"use client"

import Link from "next/link";
import { useState } from "react";

const Navlinks = () => {
  const paths = ['/', '/about', '/services', '/resources', '/contact']
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (link: string) => {
    setActiveLink(link)
  };

  const linkStyle = 'cursor-pointer font-medium text-base tracking-[1px] leading-6 p-2 border-b-[1px] border-b-white hover:text-[#a40eff] hover:border-b-[#a40eff] transition linear duration-300';

  return (
    <ul className="hidden lg:flex gap-[25px]">
      {paths.map((link: string) => (
        <Link href={link} key={link}>
          <li
            className={`${activeLink === link ? 'text-[#a40eff] border-b-[#a40eff]' : ''} ${linkStyle}`}
            onClick={() => handleClick(link)}
          >
            {link.charAt(1).toUpperCase() + link.slice(2) || 'Home'}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navlinks;
