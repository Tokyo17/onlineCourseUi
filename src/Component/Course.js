
import "./Style/Course.css"

import crd1 from "./Asset/crd1.png"
import crd2 from "./Asset/crd2.png"
import crd3 from "./Asset/crd3.png"

import star from "./Asset/star.png"
import videoIcon  from "./Asset/videoIcon.png"
import downloadIcon  from "./Asset/downloadIcon.png"
import clockIcon  from "./Asset/clockIcon.png"



const Course=()=>{
    return(
        <div className="course">
            <div className="courseTittle">
                <h1>Our Track</h1>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

            <div className="listCard">

                <div className="courseCard">
                    <div className="courseCardImg"> 
                        <img src={crd1}/>
                    </div>
                    <div className="courseCardTitle">
                        <div className="courseCardTitleText">
                            <h5>UI/UX Design for Beginer</h5>
                            <p>$98</p>
                        </div>
                        <div className="courseCardStart">
                            <img src={star}/>
                        </div>
                    </div>
                    <div className="center">
                        <div className="lineDot"></div>
                    </div>
                    <div className="des">
                        <div className="desIcon">
                            <img src={clockIcon}/>
                            <p>22h 30min</p>
                        </div>
                        <div className="desIcon">
                            <img src={videoIcon}/>
                            <p>34 Course</p>
                        </div>
                        <div className="desIcon">
                            <img src={downloadIcon}/>
                            <p>250 Sales</p>
                        </div>
                    </div>
                    <div className="courseBtn">
                        <div className="joinBtn">
                            Join Course
                        </div>
                    </div>
                </div>
                <div className="courseCard">
                    <div className="courseCardImg"> 
                        <img src={crd2}/>
                    </div>
                    <div className="courseCardTitle">
                        <div className="courseCardTitleText">
                            <h5>UI/UX Design for Beginer</h5>
                            <p>$98</p>
                        </div>
                        <div className="courseCardStart">
                            <img src={star}/>
                        </div>
                    </div>
                    <div className="center">
                        <div className="lineDot"></div>
                    </div>
                    <div className="des">
                        <div className="desIcon">
                            <img src={clockIcon}/>
                            <p>22h 30min</p>
                        </div>
                        <div className="desIcon">
                            <img src={videoIcon}/>
                            <p>34 Course</p>
                        </div>
                        <div className="desIcon">
                            <img src={downloadIcon}/>
                            <p>250 Sales</p>
                        </div>
                    </div>
                    <div className="courseBtn">
                        <div className="joinBtn">
                            Join Course
                        </div>
                    </div>
                </div>
                <div className="courseCard">
                    <div className="courseCardImg"> 
                        <img src={crd3}/>
                    </div>
                    <div className="courseCardTitle">
                        <div className="courseCardTitleText">
                            <h5>UI/UX Design for Beginer</h5>
                            <p>$98</p>
                        </div>
                        <div className="courseCardStart">
                            <img src={star}/>
                        </div>
                    </div>
                    <div className="center">
                        <div className="lineDot"></div>
                    </div>
                    <div className="des">
                        <div className="desIcon">
                            <img src={clockIcon}/>
                            <p>22h 30min</p>
                        </div>
                        <div className="desIcon">
                            <img src={videoIcon}/>
                            <p>34 Course</p>
                        </div>
                        <div className="desIcon">
                            <img src={downloadIcon}/>
                            <p>250 Sales</p>
                        </div>
                    </div>
                    <div className="courseBtn">
                        <div className="joinBtn">
                            Join Course
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default Course