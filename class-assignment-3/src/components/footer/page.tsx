import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footerButtons">
                <Link href={"/home"}><li>Home</li></Link>
                <Link href={"/portfolio"}><li>Portfolio</li></Link>
                <Link href={"/about-us"}><li>About Us</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div>
    )
}