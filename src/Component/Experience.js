import "./Style/Experience.css"

import experienceImg from "./Asset/experienceImg.png"
import heartIcon from "./Asset/heartIcon.png"
import puzzelIcon from "./Asset/puzzelIcon.png"

const Experience=()=>{

    return(
        <div className="experience">
            <div className="experienceImg">
                <img src={experienceImg}/>
            </div>
            <div className="experienceText">
                <h1>Premium <span>Learning</span> <br/> Experience</h1>
                <div className="experienceText2">
                    <div className="experienceTextValue">
                        <div className="experienceTextImg"><img src={heartIcon}/></div>
                        <div className="experienceTextValueText">
                            <h5>Easily Accessible</h5>
                            <p>Learning Will Fell Very Comfortable With Courslab</p>
                        </div>
                    </div>
                    <div className="experienceTextValue">
                        <div className="experienceTextImg"><img src={puzzelIcon}/></div>
                        <div className="experienceTextValueText">
                            <h5>Fun learning expe</h5>
                            <p>Learning Will Fell Very Comfortable With Courslab</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience