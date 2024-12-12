"use client"
import Navbarwithsearch from "@/app/components/NavbarWithSearch";
import Sidebar from "@/app/components/Siderbar";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 ">
                <Navbarwithsearch/>
                <h1>ALL USER</h1>
            </div>
        </div>
    );
}
