import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export default function About() {
    return (
        <div>
            <Header/>
            <br />
            <br />
            <p className="aboutMe"><b>About Me :</b></p>
            <p className="about">I study in the IT Initiative, arranged by the Honorable Governor Sindh, at the Governor House in Karachi, Pakistan. Before the announcement of this course I had learned and had acquired some skills over the languages of HTML, CSS and JavaScript. In the first quarter of this IT Course, I learned TypeScript and By the Grace of Allah Almighty, got 90 percentile in the quiz. Now we're learning NextJS along with Tailwind CSS. Hopefully, by the end of this quarter we'll be knowing a lot about GenAI, Metaverse and Web 3.0 </p>
            <br />
            <Footer/>
        </div>
    )
}