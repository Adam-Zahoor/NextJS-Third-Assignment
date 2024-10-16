import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export default function Portfolio() {
    return (
        <div>
            <Header/>
            <br />
            <br />
            <br />
            <p className="skillName"><b>My Education :</b></p>
            <p className="education">I had completed my O'level journey in 2021. Currently, I'm doing Intermediate from Government National College, Karachi</p>
            <br />
            <br />
            <p className="skillName"><b>Skills :</b></p>
            <p className="skills">I can write the code in HTML, CSS, JavaScript and TypeScript. Currently, I'm learning to write the code in NextJS and Tailwind CSS</p>
            <br />
            <br />
            <p className="skillName"><b>Experience :</b></p>
            <p className="experience"> I currently have a little bit experience in writing the code in the languages I mentioned above but when I'll finish this IT Course along with some coding practice, by the Will of God, I'll be having a lot of experience about some new technologies</p>
            <br />
            <br />
            <Footer/>
        </div>
    )
}