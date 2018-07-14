import React,  {Component} from 'react';

import './About.css';

class About extends Component {

    render() {
      return (
        <div id="index-banner" className="parallax-container about-container">
          <div className="container">
            <div className="row"> 
              <div className="col m12 center-align">
              <div className="col m4 offset-s2 center-align">
                  <img className="circle prof-pic" src={require("../images/me.jpg")} alt=""/>
              </div>

            
        
                  <div className="col m3 offset-s1">
                    <br></br><br></br><br></br><br></br>
                    <span className="about-text">
                        Hi, my name is Christian Gingrich. I'm 25, and almost 2 years
                        ago I moved to San Diego from Dallas to get a fresh start!
                        I'm currently learning web dev and I work on projects every day
                        so I can become the very best, like no one ever was. </span>
                  </div>
                </div> 
        </div>
        </div>
        </div>
       
         
          
)
    }
}

export default About;

   {/* <div className="section no-pad-bot">
            <div className="name-container">
              <br/><br/>
              <h1 className="about-header center">Christian Gingrich</h1>
              <div className="row center">
                <h5 className="col s12 light">Full Stack Web Developer</h5>
              </div>
              <div className="row center">
              </div>
            <br/><br/>
          </div>
          </div> 
          <div className="parallax"><img src="./images/coffee-light.jpg" alt="Unsplashed background img 1"/></div>
       </div>  */}