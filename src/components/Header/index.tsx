import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-opacity-10">
        <div className="container-fluid">
          <Link href="/">
            <span className="navbar-brand">
              <img height={80} src="/forge_react.png" />
              <span className="fw-bold">Forge Next</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
