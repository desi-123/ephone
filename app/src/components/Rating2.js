import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Rating({ value, text }) {
    return (
        <div>
        {[1, 2, 3, 4, 5].map((index) => {
            value >= index ?  (
            <span>
                <FaStar />
            </span>
            ) : value >= index - 0.5 ? (
            <span>
                <FaStarHalfAlt />
            </span>
            ) : (
            <FaRegStar />
            );
        })}
        <span>{text && text}</span>
        </div>
    );
}
export default Rating;
