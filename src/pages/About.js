import React, {Component} from 'react';
import '../App.css';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import image from '../images/placeholder.png';
import {Link} from "react-router-dom";
import { ToastBody } from 'reactstrap';

function Reviews(){
  // vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
   

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
		

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
}


class About extends Component {

  componentDidMount() {
    Reviews();
  }
   
   clickHandle( event ,tabname) {
      let i, tabcontent, tablinks;
    
      // This is to clear the previous clicked content.
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Set the tab to be "active".
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      // Display the clicked tab and set it to active.
      document.getElementById(tabname).style.display = "block";
      event.currentTarget.className += " active";
  }

    render() {
        return (
            <div className="InteralPage">
              <section className="smBanner">
                <div className="stars"></div>
                  <h1>About</h1>
              </section>
              <section className="aboutUs">
                <div className="image">
                  <img src={image}/>
                </div>
                <div className="Text">
                  <h1>About Title</h1>
                  <p> <strong>Bonbon topping jujubes. Chocolate bar muffin chupa chups chocolate cake cookie carrot cake brownie. Bear claw carrot cake bonbon tart.
                  Gummi bears tiramisu donut donut muffin cupcake. Tootsie roll fruitcake jelly-o chocolate cake.</strong></p>
                  <p>
                   Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                   Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                   </p>
                  <div className="Socials">
                    <ul>
                      <li>
                        <Link to="/">Linkedin</Link>
                      </li>
                      <li>
                        <Link to="/">GitHub</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="tabsinfo">
              <h2>Further Information</h2>
              <div className="tabinfo">
              <div className="tab">
                <button className="tablinks active" onClick={(event) =>this.clickHandle( event ,'Personal')}>Personal</button>
                <button className="tablinks" onClick={(event) =>this.clickHandle( event,'Education')}>Education</button>
                <button className="tablinks" onClick={(event) =>this.clickHandle(event , 'Work')}>Work</button>
              </div>

              <div id="Personal" className="tabcontent" style={{display: 'block'}}>
                <div className="image">
                  <img src={image}/>
                </div>
                <div className="tabtext">
                <p>
                   Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                   Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                   </p>
                </div>
              </div>

              <div id="Education" className="tabcontent">
                <div className="image">
                  <img src={image}/>
                </div>
                <div className="tabtext">
                <p>
                   Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                   Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                   </p>
                </div>
              </div>

              <div id="Work" className="tabcontent">
              <div className="image">
                  <img src={image}/>
                </div>
                <div className="tabtext">
                <p>
                   Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                   Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                   </p>
                </div>
            </div>
            </div>
              </section>
              <section className="reviews">
              <div id="testim" className="testim">
            <div className="wrap">
                <h2 className="textcenter">Reviews</h2>

                <ul id="testim-dots" className="dots">
                    <li className="dot active"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                </ul>
                <div id="testim-content" className="cont">
                    
                    <div className="active">
                        <h3>Lorem P. Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>  
                        <h3>Mr. Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                       
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                        
                        <h3>Lorem De Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                        
                        <h3>Ms. Lorem R. Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                </div>

            </div>

          </div>
        
              </section>
            </div>
            
        );
    }
}


export default About;
