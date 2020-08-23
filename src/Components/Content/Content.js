import React from "react";
import Test from "../Public/Carousel/Carousel";
import PropTypes from "prop-types";
import MediaCard from "../Public/Card/Card";

function Content(props) {
    return(
        <div className=" container-fluid p-re" style={{marginTop: 30}}>
            {props.data === "salad" ?
                <MediaCard data={props.data}/> : <Test data={props.data} />
            }
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default Content;
