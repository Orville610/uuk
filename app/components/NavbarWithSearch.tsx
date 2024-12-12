import Link from 'next/link';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import logo from '@/public/PT. TEKNO JAYA - SOAL UUK KELAS XI.png';
import Sidebar from './Siderbar';

const NavbarWithSearch = () => {
  return (<div>
    <nav className="bg-sky-700 text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <button className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Tekno Jaya Logo"
            className="w-[150px] h-7 object-cover object-position-center rounded-md"
          />
        </button>
        <div className="flex items-center space-x-4">
          <Link href="/about">
            <p className="hover:underline">About</p>
          </Link>
          <Link href="/products">
            <p className="hover:underline">Products</p>
          </Link>
          <Link href="/contact">
            <p className="hover:underline">Contact</p>
          </Link>
          <IoSearch className="w-6 h-6" />
        </div>
      </div>
    </nav>
    <Sidebar/>
    </div>
  );
};

export default NavbarWithSearch;

