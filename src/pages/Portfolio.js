import React, {Component} from 'react';
import '../App.css';
import image from '../images/placeholder.png';
import { gsap } from "gsap";



function Photo(){
    var options = {
        imgSrc1:"//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBanana.jpg",
        imgSrc2:"//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBananaInverted.jpg",
        containerName : "placeholder",
        columns:28,
        margin:0
    }
  VenetianBlinds(options);
}
  
  
  function VenetianBlinds(defaults)
  {
    var cols = defaults.columns;
    var margin = defaults.margin;
    var img1 = defaults.imgSrc1;
    var img2 = defaults.imgSrc2;
    var placeholder = document.getElementsByClassName(defaults.containerName)[0];
    var directionX, directionY;
    
    var column, blind, blindImg;
    var bgImg, rot;
    var colL;
    var colW = (placeholder.offsetWidth / cols) - margin;
    for (var i=0; i < cols; i++)
      {
        colL = ((colW + margin) * i);
        
        column = document.createElement('div');
        column.className = "column";
        column.style.width = colW + "px";
        column.style.left = colL + "px";
        placeholder.appendChild(column); 
        
        for (var j=0; j<4; j++)
          {
            blind = document.createElement('div');
            blind.className = "blind";
            blind.style.width = colW + "px";
            blindImg = document.createElement('div');
            blindImg.className = "blindImg";
            
            switch (j){
               case 0:
                gsap.set(blind, {rotationY: "0"});
                  bgImg = img1;
                  break;
              case 1:
                gsap.set(blind, {rotationY: "90"});
                  bgImg = img2;
                  break;
               case 2: 
               gsap.set(blind, {rotationY: "180"});
                    bgImg = img1;
                    break;              
                case 3:
                    gsap.set(blind, {rotationY: "270"});
                    bgImg = img2;
                    break;
            }
            blindImg.style.width = placeholder.offsetWidth + "px";
            blindImg.style.backgroundImage = "url("+bgImg+")";
            blindImg.style.left = -colL + "px";
  
            column.appendChild(blind);
            blind.appendChild(blindImg);
            
            gsap.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
          }
        
          gsap.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});
        
         column.addEventListener("mouseenter", function(event){
            var elem = event.currentTarget; 
            var rotY =  gsap.getProperty(elem, "rotationY");
           
              if(directionX > 0){
                gsap.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:"Back.easeOut"});
              }else{
                gsap.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:"Back.easeOut"});
              }
        })
      }
        document.addEventListener('mousemove', function (event) {
        directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
      });
  }
  
 

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        Photo();
    }


    render() {
        return (
            <div className="InteralPage">
                <section className="smBanner">
                    <div className="stars"></div>
                  <h1>Portfolio </h1>
                </section>
                <section className="aboutUs">
                <div className="image">
                    <div className="placeholder"></div>
                </div>
                <div className="Text">
                  <h1>Portfolio</h1>
                  <p> <strong>Bonbon topping jujubes. Chocolate bar muffin chupa chups chocolate cake cookie carrot cake brownie. Bear claw carrot cake bonbon tart.
                  Gummi bears tiramisu donut donut muffin cupcake. Tootsie roll fruitcake jelly-o chocolate cake.</strong></p>
                  <p>
                   Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                   Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                   </p>
                </div>
              </section>
              <section className="thirdSection">
                            <h2>Portfolio Items</h2>
                            <div className="Projects">
                              <div className="project">
                                  <img src={image}/>
                                  <div>
                                    <h3>Project Name</h3>
                                    <p>Oat cake cake donut carrot cake soufflé. Lollipop gummies dragée marzipan icing croissant candy. Carrot cake chocolate biscuit halvah tiramisu. Jujubes topping macaroon halvah oat cake. Chocolate bar pudding tiramisu danish cheesecake marzipan cake jelly beans. Gummi bears dessert dessert chocolate bar dragée sesame snaps. Soufflé powder chocolate bar. Liquorice chocolate bar oat cake. Pastry gummies powder icing gingerbread gummies cotton candy chocolate cake pie. Danish soufflé donut cookie gummies cotton candy cheesecake macaroon. </p>
                                  </div>
                              </div>
                              <div className="project">
                                <img src={image}/>
                                <div>
                                  <h3>Project Name</h3>
                                  <p>Oat cake cake donut carrot cake soufflé. Lollipop gummies dragée marzipan icing croissant candy. Carrot cake chocolate biscuit halvah tiramisu. Jujubes topping macaroon halvah oat cake. Chocolate bar pudding tiramisu danish cheesecake marzipan cake jelly beans. Gummi bears dessert dessert chocolate bar dragée sesame snaps. Soufflé powder chocolate bar. Liquorice chocolate bar oat cake. Pastry gummies powder icing gingerbread gummies cotton candy chocolate cake pie. Danish soufflé donut cookie gummies cotton candy cheesecake macaroon. </p>
                                </div>
                              </div>
                              <div className="project">
                                <img src={image}/>
                                <div>
                                  <h3>Project Name</h3>
                                  <p>Oat cake cake donut carrot cake soufflé. Lollipop gummies dragée marzipan icing croissant candy. Carrot cake chocolate biscuit halvah tiramisu. Jujubes topping macaroon halvah oat cake. Chocolate bar pudding tiramisu danish cheesecake marzipan cake jelly beans. Gummi bears dessert dessert chocolate bar dragée sesame snaps. Soufflé powder chocolate bar. Liquorice chocolate bar oat cake. Pastry gummies powder icing gingerbread gummies cotton candy chocolate cake pie. Danish soufflé donut cookie gummies cotton candy cheesecake macaroon. </p>
                                </div>
                              </div>
                              <div className="project">
                                <img src={image}/>
                                <div>
                                  <h3>Project Name</h3>
                                  <p>Oat cake cake donut carrot cake soufflé. Lollipop gummies dragée marzipan icing croissant candy. Carrot cake chocolate biscuit halvah tiramisu. Jujubes topping macaroon halvah oat cake. Chocolate bar pudding tiramisu danish cheesecake marzipan cake jelly beans. Gummi bears dessert dessert chocolate bar dragée sesame snaps. Soufflé powder chocolate bar. Liquorice chocolate bar oat cake. Pastry gummies powder icing gingerbread gummies cotton candy chocolate cake pie. Danish soufflé donut cookie gummies cotton candy cheesecake macaroon. </p>
                                </div>
                              </div>
                            </div>
                        </section>
            </div>
        );
      }
  }



export default App;
