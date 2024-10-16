import Image from "next/image";
import image1 from "@/IMG_20231203_081533.jpg";

export default function Body() {
    return (
    <div className="info">
        <div className="information">
            <p className="infoAboutMe1">Hey Everyone,</p>
            <p className="infoAboutMe2">My name is Adam</p>

        </div>
        <div className="image">
            <Image className="myPic" src={image1} alt=""></Image>
        </div>
    </div>
    );
}