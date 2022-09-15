import './index.scss'
import tata from '../../assets/images/tata.png'
import sail from '../../assets/images/sail.png'
import jindal from '../../assets/images/jindal.png'
import sections from '../../assets/images/sections.png'
import sheets from '../../assets/images/sheets.png'
import rin from '../../assets/images/rin.png'
import Loader from 'react-loaders'

const About =() => {
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    About us
                </h1>
                <p>
                    Our Trading firm has been Established in 1980, in a small town of Faizabad (Now Ayodhya)
                    This trading firm was the biggest roll of dice for us and we took shot in the dark.<br/>
                    Our first day sale was Rs 2000 and by our stedfast strive, we got the acknowledgement of our
                    customers and we embarked on this long Journey.
                </p>
                <p>
                    Right now we are esteemed and acknowledged trading firm , who strive to satisfy our customers
                    indiscriminately. we try to give our customers the best bargain feasible whatever his/her requirements
                    in the Iron and Steel sector.
                </p>
                <p>
                    We deal with the products of many conglomerate eg- Jindal Steel and Power Limited, APL Apollo, Tata Steel Ltd
                    ,JSW Steel Ltd, etc. <br/>
                    We are also an authorized dealer for Steel Authority of India (SAIL),and we deliver Project materials all
                    over India. 
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">

                    <div className="face1">
                        <img src={sail} alt="sail" />
                    </div>
                    <div className="face2">
                        <img src={tata} alt="tata" />
                    </div>
                    <div className="face3">
                        <img src={jindal} alt="jindal" />
                    </div>
                    <div className="face4">
                        <img src={sections} alt="sections" />
                    </div>
                    <div className="face5">
                        <img src={sheets} alt="sheets" />
                    </div>
                    <div className="face6">
                        <img src={rin} alt="rin" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
        )
}

export default About