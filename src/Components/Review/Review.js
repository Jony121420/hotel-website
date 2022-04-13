import React from "react";
import "./Review.css"

const Review = (props) => {
  const { name, img, review, rating } = props.review;
  return (
 <div className="row single-review-container">
      <div className="card review" style={{ width: "18rem" }}>
     <div className="review-infos">
     <img src={img} className="card-img-top w-50 img first" alt="..." />
     <h5 className="card-title first">{name}</h5>
     </div>
      <div className="card-body">
        <div className="second">
        <h6>rating: {rating}</h6>
          <p className="card-text first">
           review: {review}
          </p>
           
       
        </div>
       
      </div>
    </div>
 </div>
  );
};

export default Review;
