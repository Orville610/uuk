import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/PT. TEKNO JAYA - SOAL UUK KELAS XI.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Tekno Jaya Logo"
            className="w-[150px] h-7 object-cover object-position-center rounded-md"
          />
        </Link>
        <button className="md:hidden" onClick={handleToggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link href="/about">
            <p className="hover:underline">About</p>
          </Link>
          <Link href="/products">
            <p className="hover:underline">Products</p>
          </Link>
          <Link href="/contact">
            <p className="hover:underline">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

