import React from "react";
import Test from "../../Public/Carousel/Carousel";
import img1 from "./../../../Images/3.jpg"

function SpecialOffers() {
    return(
        <div>
            <div className="text-center my-1">
                <span className="pr-2">
                    Thu / 18 September 2020 / 21:30
                </span>
                <span className="border-left pl-2">
                    21:30 / 1399 یکشنبه / 20 شهریور
               </span>
            </div>
            <img src={img1} className="img-fluid"/>

        </div>
    )
}

export default SpecialOffers;
