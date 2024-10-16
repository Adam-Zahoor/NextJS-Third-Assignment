import React from "react";
import Link from "next/link";
import Home from "@/app/home/page";

export default function Header() {
    return (
        <div className="header">
            <Link href={"/home"}><div className="nameButton"><b>ADAM</b></div></Link>
            
            <ul className="headerButtons">
                <Link href={"/home"}><li>Home</li></Link>
                <Link href={"/portfolio"}><li>Portfolio</li></Link>
                <Link href={"/about-us"}><li>About Us</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div>
    );
}