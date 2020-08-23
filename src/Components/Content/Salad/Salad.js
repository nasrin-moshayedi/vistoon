import React from "react";
import Test from "../../Public/Carousel/Carousel";
import img1 from "./../../../Images/3.jpg"
// import img2 from "./../../../Images/14.jpg"
import Content from "../Content";
import MediaCard from "../../Public/Card/Card";

const data = [
    {
        img: img1,
        title: "T-Bone Steak & Eggs",
        location: "A'la CarteAmericanMain Course",
        time: "4-6 Mins",
        cost: "16.99"
    },
    {
        img: img1,
        title: "Eggs Benedict",
        location: "A'la CarteAmericanMain Course",
        time: "5-7 Mins",
        cost: "13.48"
    },
    {
        img: img1,
        title: "T-Bone Steak & Eggs",
        location: "A'la CarteAmericanMain Course",
        time: "4-6 Mins",
        cost: "16.99"
    },
    {
        img: img1,
        title: "T-Bone Steak & Eggs",
        location: "A'la CarteAmericanMain Course",
        time: "4-6 Mins",
        cost: "16.99"
    }
];
function Salad() {
    return(
        <div className="container-fluid my-4">
            <div className="row">
                {data.map((i, index) => {
                    return (
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <MediaCard data={i.img} title={"salad"}/>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Salad;
