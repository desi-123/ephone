import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa'
function Rating({value, text}) {
  return (
    <div>
      {value >= 1 ? 
        <span>
          <FaStar />
        </span> : 
        value >= 0.5 ?
        <span>
          <FaStarHalfAlt />
        </span> : 
          <FaRegStar />
      }
      {value >= 2 ? 
        <span>
          <FaStar />
        </span> : 
        value >= 1.5 ?
        <span>
          <FaStarHalfAlt />
        </span> : 
          <FaRegStar />
      }
      {value >= 3 ? 
        <span>
          <FaStar />
        </span> : 
        value >= 2.5 ?
        <span>
          <FaStarHalfAlt />
        </span> : 
          <FaRegStar />
      }
      {value >= 4 ? 
        <span>
          <FaStar />
        </span> : 
        value >= 3.5 ?
        <span>
          <FaStarHalfAlt />
        </span> : 
          <FaRegStar />
      }
      {value >= 5 ? 
        <span>
          <FaStar />
        </span> : 
        value >= 4.5 ?
        <span>
          <FaStarHalfAlt />
        </span> : 
          <FaRegStar />
      }
      <span>{text && text}</span>
    </div>
  )
}
export default Rating


