import React, {Component , useEffect} from 'react';

import '../App.css';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import image from '../images/placeholder.png';

function CreateStars(type, qty ) {
    for(let i = 0; i < qty; i++) {
        let star = document.createElement('div');
        star.classList.add('star', 'type-' + type);
        star.style.left = RandomNumber(1, 99) + '%';
        star.style.bottom = RandomNumber(30, 600) + 'px';
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

function Words (){
      // config
    const fontMin = 15; //px
    const fontMax = 35; //px
    const valueAttributeName = 'tag-value'; // tag in which we puted value
    const tagsSelector = '[tag-value]'; // tags elemnts selector
    const computeColor = true; // flag, if true color will be computed with size

    // mechanism
    const values = [];
    document.querySelectorAll(tagsSelector).forEach(tag => {
      const tagValue = tag.getAttribute(valueAttributeName);

      values.push({
        el: tag,
        val: Number(tagValue)
      })
    });

    const valuesSorted = values.sort((a, b) => a.val - b.val);
    const valueMax = valuesSorted[valuesSorted.length-1].val;

    valuesSorted.forEach(x => {
      const { val, el } = x;

      const fontSize = Math.floor(
        (val/valueMax) * (fontMax-fontMin+1) + fontMin
      );

      if (computeColor) {
        const color = Math
        .abs(
          Math.floor(((val/valueMax) * 200) - 200)
        )
        .toString(16)
        .repeat(3);

        el.style.color = `#${color}`;
      }

      el.style.fontSize = `${fontSize}px`;
    });
}


class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        Stars();
        Words();
       }

    render() {
        return (
                <div className="container">
                    <div className="Home">
                        <section className="Banner">
                            <div className="introText">
                                <h1>Welcome Text</h1>
                                <p>
                                  Fruitcake cake brownie. Pastry cookie macaroon sugar plum cake danish chocolate toffee.
                                  Lemon drops chocolate bar tootsie roll. Chupa chups halvah cotton candy danish liquorice.
                                </p>
                            </div>
                            <div class="BannerImage">
                              <img src={image}/>
                            </div>
                            <div id="stars-wrapper" className="stars-wrapper"></div>
                        </section>
                        <section className="Definer">
                            <a href="#Secondsection">
                            <FontAwesomeIcon icon={faChevronDown}/>
                            </a>
                        </section>
                        <section class="into-Text">
                        <div class="image">
                                 <img src={image}/>
                            </div>
                          <div className="Text">
                                <h2>Intro Text</h2>
                                <p> <strong>Bonbon topping jujubes. Chocolate bar muffin chupa chups chocolate cake cookie carrot cake brownie. Bear claw carrot cake bonbon tart.
                                Gummi bears tiramisu donut donut muffin cupcake. Tootsie roll fruitcake jelly-o chocolate cake.</strong></p>
                                <p>
                                Sesame snaps cake chupa chups gummies cotton candy caramels chupa chups danish. Chocolate candy bonbon pudding halvah cheesecake candy. Tart jelly chocolate cake biscuit liquorice. Sweet gingerbread chupa chups carrot cake donut oat cake fruitcake. Jelly-o powder pie brownie.
                                Gummi bears gummi bears apple pie ice cream cake. Wafer icing carrot cake tootsie roll muffin. Sugar plum marshmallow cheesecake. Gingerbread ice cream jujubes cupcake marzipan cotton candy cupcake sesame snaps. Ice cream powder danish. Apple pie oat cake toffee ice cream wafer dessert candy. Sesame snaps cookie lemon drops
                                </p>
                            </div>
                          </section>
                        <section className="Secondsection" id="Secondsection">
                          <div className="Data">
                          <div className="dashboard">
                          <div className="lang">
                              <svg>
                                 <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="46" y="66">HTML</text>
                                <circle className="bg" cx="57" cy="57" r="52" />
                                <circle className="meter-1" cx="57" cy="57" r="52" />
                              </svg>
                              <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                              gummi bears cotton candy chupa chups.</p>
                          </div>
                            <div className="lang">
                            <svg>
                              <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="30" y="66">CSS/SASS</text>
                              <circle className="bg" cx="57" cy="57" r="52" />
                              <circle className="meter-2" cx="57" cy="57" r="52" />
                            </svg>
                            <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                            gummi bears cotton candy chupa chups.</p>
                            </div>
                              <div className="lang">
                            <svg>
                            <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="48" y="66">JS</text>
                              <circle className="bg" cx="57" cy="57" r="52" />
                              <circle className="meter-3" cx="57" cy="57" r="52" />
                            </svg>
                            <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                            gummi bears cotton candy chupa chups.</p>
                            </div>
                              <div className="lang">
                            <svg>
                            <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="43" y="66">PHP</text>
                              <circle className="bg" cx="57" cy="57" r="52" />
                              <circle className="meter-4" cx="57" cy="57" r="52" />
                            </svg>
                            <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                            gummi bears cotton candy chupa chups.</p>
                            </div>
                              <div className="lang">
                            <svg>
                            <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="42" y="66">Java</text>
                              <circle className="bg" cx="57" cy="57" r="52" />
                              <circle className="meter-5" cx="57" cy="57" r="52" />
                            </svg>
                            <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                            gummi bears cotton candy chupa chups. </p>
                            </div>
                              <div className="lang">
                            <svg>
                            <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="48" y="66">C#</text>
                              <circle className="bg" cx="57" cy="57" r="52" />
                              <circle className="meter-6" cx="57" cy="57" r="52" />
                            </svg>
                            <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                            gummi bears cotton candy chupa chups.</p>
                            </div>
                              <div className="lang">
                            <svg>
                            <text fill="#ffffff" fontSize="14" fontFamily="DotGothic16" x="34" y="66">Python</text>
                              <circle className="bg" cx="57" cy="57" r="52" />
                              <circle className="meter-7" cx="57" cy="57" r="52" />
                            </svg>
                            <p>Liquorice marshmallow biscuit pie lemon drops fruitcake sugar plum pudding candy canes. Sweet roll chocolate chocolate bar
                            gummi bears cotton candy chupa chups.</p>
                            </div>
                          </div>
                          </div>
                        </section>

                        <section className="thirdSection">
                            <h2>Latest Portfolio Items</h2>
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
                            </div>
                        </section>
                        <section className="fourthSection">
                        <div className="cloud">
                          <div className="tag-cloud">
                            <div tag-value="3">PHP</div>
                            <div tag-value="8">CSS</div>
                            <div tag-value="4">SASS</div>
                            <div tag-value="1">Laravel</div>
                            <div tag-value="9">React</div>
                            <div tag-value="6">React Native</div>
                            <div tag-value="4">CSharp</div>
                            <div tag-value="5">Java</div>
                            <div tag-value="1">Python</div>
                            <div tag-value="8">Web Development</div>
                            <div tag-value="8">Software Development</div>
                            <div tag-value="2">NodeJS</div>
                            <div tag-value="3">Wordpress</div>
                            <div tag-value="8">Elementor</div>
                            <div tag-value="4">Divi</div>
                            <div tag-value="1">Joomla</div>
                            <div tag-value="9">Servers</div>
                            <div tag-value="6">Software Requirement Documents</div>
                            <div tag-value="4">Office</div>
                            <div tag-value="5">Programming</div>
                            <div tag-value="1">Coding</div>
                            <div tag-value="8">Back-End Programmer</div>
                            <div tag-value="8">Sudo</div>
                            <div tag-value="2">npm</div>
                          </div>
                          </div>
                        </section>
                        </div>
                    </div>

        );

    }
}



export default Home;
