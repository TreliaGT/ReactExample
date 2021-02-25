
import React, {Component , useEffect} from 'react';

import '../App.css';






class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
          };
      
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch(name) {
            case "name":
                this.setState({
                    name: value
                    });
            break;
            case "email":
                this.setState({
                    email: value
                    });
            break;
            case 'phone':
                this.setState({
                    phone: value
                    });
            break;
            case 'message':
                this.setState({
                    message: value
                    });
            break;
        }
      }

    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }

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
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleInputChange}/>
                        <input type="Email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleInputChange}/>
                        <input type="text" placeholder="Phone" value={this.state.phone} name="phone" onChange={this.handleInputChange}/>
                        <textarea placeholder="Message" value={this.state.message} name="message" onChange={this.handleInputChange}></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
              </section>
            </div>
        );

    }
}



export default Contact;