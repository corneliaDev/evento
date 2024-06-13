"use client";

import React from "react";
import H1 from "../src/components/h1";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Header2() {
  const pathName = usePathname();
  return (
    <header className="border-b border-white/10 h-14 px-3 sm:px-9">
      <nav className="h-full">
        <ul className="flex justify-between h-full py-6 px-10">
          {routes.map((route) => (
            <li
              className={clsx(
                " hover:text-accent transition-all flex items-center relative ",
                {
                  "text-white": pathName === route.href,
                  "text-white/50": pathName !== route.href,
                }
              )}
              key={route.href}
            >
              <Link href={route.href}>{route.name}</Link>
              {pathName === route.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-[-15px]"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
