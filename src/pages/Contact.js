
import React, {Component , useEffect} from 'react';

import '../App.css';






class Contact extends Component {

    render() {
        return (
            <div className="InteralPage">
                <section className="smBanner">
                    <div className="stars"></div>
                    <h1>Contact us </h1>
                </section>
                <section className="aboutUs">
                <div className="Text">
                  <h1>Contact </h1>
                  <p> <strong>Bonbon topping jujubes. Chocolate bar muffin chupa chups chocolate cake cookie carrot cake brownie. Bear claw carrot cake bonbon tart.
                  Gummi bears tiramisu donut donut muffin cupcake. Tootsie roll fruitcake jelly-o chocolate cake.</strong></p>
                  <p>
                   Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                   Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                   </p>
                </div>
                <div className="Contact">
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="Email" placeholder="Email"/>
                        <input type="text" placeholder="Phone"/>
                        <textarea placeholder="Message"></textarea>
                    </form>
                </div>
              </section>
            </div>
        );

    }
}



export default Contact;