import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Horizon College Demo",
  description: "A responsive college website demo built with Next.js.",
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  {
    label: "Admissions",
    href: "/admissions",
    submenu: [
      { label: "Undergraduate", href: "/admissions/undergraduate" },
      { label: "Postgraduate", href: "/admissions/postgraduate" },
    ],
  },
  { label: "Departments", href: "/departments" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo">
          New <span>Horizon</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div key={item.label} className="nav__item">
              <Link href={item.href} className="nav__link">
                {item.label}
              </Link>
              {item.submenu ? (
                <div className="nav__submenu" role="menu">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="submenu__link"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer__inner">
        <div>
          <h2 className="footer__title">New Horizon College</h2>
          <p>
            Modern campus, strong industry links, and a hands-on engineering
            experience designed to launch the next generation of innovators.
          </p>
        </div>

        <div>
          <h3 className="footer__title">Quick links</h3>
          <ul className="footer__list">
            <li>
              <Link href="/about" className="footer__link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="footer__link">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/programs" className="footer__link">
                Programs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li>+91 98805 34935</li>
            <li>admissions@newhorizonindia.edu</li>
            <li>New Horizon Knowledge Park, Bellandur Main Road</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <p className="footer__copyright">
          © 2026 New Horizon College Demo. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
