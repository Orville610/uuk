import Link from "next/link";
import { FaHome, FaList ,FaFileInvoice, FaUser } from "react-icons/fa";

const sidebarLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/inventory", label: "Inventory", icon: <FaList/> },
  { href: "/allAccount", label: "All Account", icon: <FaUser/> },
  { href: "/invoice", label: "Transactions", icon: <FaFileInvoice/> },
];

export default function Sidebar() {
  return (
    <div className="bg-gray-200 p-4 space-y-4 w-64 h-screen fixed top-0 left-0 text-sky-600 pl-4 shadow-md">
      <ul className="mt-12">
        {sidebarLinks.map((link) => (
          <li key={link.href} className="py-2 my-2">
            <Link href={link.href} legacyBehavior>
              <a className="flex items-center justify-start text-xl">
                <span style={{ marginRight: "0.5rem" }}>{link.icon}</span>
                <p className="hover:underline">{link.label}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



