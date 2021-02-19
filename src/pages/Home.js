import React, {Component , useEffect} from 'react';

import '../App.css';

function CreateStars(type, qty ) {
    for(let i = 0; i < qty; i++) {
        let star = document.createElement('div');
        star.classList.add('star', 'type-' + type);
        star.style.left = RandomNumber(1, 99) + '%';
        star.style.bottom = RandomNumber(300, 600) + 'px';
        star.style.animationDuration = RandomNumber(50, 200) + 's';
        document.getElementById('stars-wrapper').appendChild(star);
    }
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function Stars(){
        CreateStars(1, 100 );
        CreateStars(2, 85 );
        CreateStars(3, 70 );
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    
    }

    componentDidMount() {  
        Stars(); 
       }
    
    render() {
        return (
                <div className="container">
                    <div className="Home">
                        <div className="Banner">
                            <div Ref={this.myInput} id="stars-wrapper" className="stars-wrapper"></div>
                        </div>
                    </div>
                </div>
        );
        
    }
}



export default Home;
