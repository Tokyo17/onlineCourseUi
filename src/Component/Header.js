import "./Style/Header.css"

import iconNavbar from "./Asset/iconNavbar.png"
import headerImg from "./Asset/headerImg.png"
import searchIcon from "./Asset/searchIcon.png"
import cardImg1 from "./Asset/cardImg1.png"
import cardImg2 from "./Asset/cardImg2.png"
import cardImg3 from "./Asset/cardImg3.png"

const style={
    header:{
        // backgroundColor:"#FDF8EE"
    }
}




const Header=()=>{

    return(
        <div className="header">

            <div className="navbar">
                <div className="iconNavbar">
                    <img src={iconNavbar}/>
                </div>
                <div className="linkNavbar">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Course</a>
                    <a href="#">Our Service</a>
                    <a href="#">Contact Us</a>
                    <div className="signIn">Sign In</div>
                    
                </div>
            </div>

            <div className="headerContent">
                <div className="headerContentText">
                    <h1>The <span>Smart</span> <br/> Choice For <span>Future</span></h1>
                    <p>Elearn is a global training provider based across the UK that <br/> specialises
                        in accredited and bespoke training courses.</p>
                    
                    <div className="search">
                        <img className="searchIcon" src={searchIcon}/>
                        <input placeholder="Search for a location.."></input>
                        <div className="continueButton">Continue</div>
                    </div>
                  

                </div>
                <div className="headerContentImg">
                    <img src={headerImg}/>
                </div>
            </div>

            <div className="benefit">
                <div className="benifitBackground">

                    <div className="cardBenefit">
                        <div className="cardBenefitImg">
                            <img src={cardImg1}/>
                        </div>
                        <div className="cardBenefitText">
                            <h3>Learn The Latest Skills</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>

                    <div className="cardBenefit">
                        <div className="cardBenefitImg">
                            <img src={cardImg2}/>
                        </div>
                        <div className="cardBenefitText">
                            <h3>Get Ready For a Career</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>
                    
                    <div className="cardBenefit">
                        <div className="cardBenefitImg">
                            <img src={cardImg3}/>
                        </div>
                        <div className="cardBenefitText">
                            <h3>Earn a Certificate</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Header