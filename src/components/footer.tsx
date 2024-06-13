import Link from "next/link";
import path from "path";

export default function Footer() {
  const routes = [
    { path: "/terms-condition", name: "Terms & Conditions" },
    { path: "/privacy-policy", name: "Privacy Policy" },
  ];
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2050 ByteGrad. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path} className="inline-block mx-2">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
