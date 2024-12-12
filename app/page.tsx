"use client"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

export default function Home() {

  return (
    <>
    <div className="bg-primary">
      <Navbar/>
      <Login/>
    </div>
    </>
  );
}

