import { useState } from "react";
import './feedback.css'
// import MyButton from "../myButton/MyButton";
// import MyButton from "../myButtons2/MyButton2";

function Feedback() {

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
    };

    const resetResults = () => {
        setLikeCount(0);
        setDislikeCount(0);
    };
    return (
        <>
            <h4>Homework04:</h4>
            <div className="feedback">
            {/* <MyButton className="myButton" onClick={handleLike} text={`Like ${likeCount}`} />
                <myButton className="myButton" onClick={handleDislike}>Dislike {dislikeCount}</myButton>
                <myButton className="myButton" onClick={resetResults}>Reset Results</myButton> */}

                <button className="myButton" onClick={handleLike}>Like {likeCount}</button>
                <button className="myButton" onClick={handleDislike}>Dislike {dislikeCount}</button>
                <button className="myButton" onClick={resetResults}>Reset Results</button>
           
            </div>
        </>
    )
}

export default Feedback;

