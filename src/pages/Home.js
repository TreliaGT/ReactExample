import React, {Component} from 'react';
import '../App.css';
import stars from '../JS/stars.js'






class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="container">
                    <div className="Home">
                        <div className="Banner">
                            <div id="stars-wrapper" >aaaa</div>
                            <script src={stars}></script>
                        </div>
                    </div>
                </div>
        );
    }
}


export default Home;
