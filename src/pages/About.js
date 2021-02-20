import React, {Component} from 'react';
import '../App.css';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import image from '../images/placeholder.png';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className="InteralPage">
              <section className="smBanner">

              </section>
              <section className="aboutUs">
                <div className="image">
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
            </div>
        );
    }
}


export default About;
