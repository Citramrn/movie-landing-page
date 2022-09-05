import Icon from '../assets/Icon.png'
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/lightyear.jpg'
import imgs from '../assets/groot.jpg'
import imgg from '../assets/baymax.jpg'

function Jumbotron() {
    return (
        <Carousel fade className='image-carousel' id='home'>
            <Carousel.Item>
                <img
                    src={img}
                    alt="First slide"
                    className='width-image'
                />
                <Carousel.Caption>
                    <div className="row">
                        <div className="col-sm-6 p-4 text_jumbotron">
                            <h2>Lightyear (2022)</h2>
                            <div className="buttons mb-3">
                                <div className='imdb'>
                                    <img src="https://i.ibb.co/DVs77kh/imdb.png" alt="imdb" />
                                    <span>      5.9 / 10</span>
                                </div>
                                <div className="rating">
                                    <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" />
                                    <span>             72%</span>
                                </div>
                            </div>
                            <p>Space Ranger legendaris Buzz Lightyear memulai petualangan intergalaksi bersama sekelompok rekrutan ambisius dan pendamping robotnya Sox.</p>
                            <button type="submit" className="btn btn-dangers"><img src={Icon} alt="icon" />
                                <span className="text-white">  Watch Trailer</span></button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={imgs}
                    alt="Second slide"
                    className='width-image'
                />

                <Carousel.Caption>
                    <div className="row">
                        <div className="col-sm-6 p-4 text_jumbotron">
                            <h2>Groot's First Steps (2022)</h2>
                            <div className="buttons mb-3">
                                <div className='imdb'>
                                    <img src="https://i.ibb.co/DVs77kh/imdb.png" alt="imdb" />
                                    <span>      6.8 / 10</span>
                                </div>
                                <div className="rating">
                                    <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" />
                                    <span>             76%</span>
                                </div>
                            </div>
                            <p>Following the events of “Guardians of the Galaxy Vol. 1,” Baby Groot is finally ready to try taking his first steps out of his pot—only to learn you have to walk before you can run.</p>
                            <button type="button" className="btn btn-dangers"><img src={Icon} alt="icon" />
                                <span className="text-white">  Watch Trailer</span></button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={imgg}
                    alt="Third slide"
                    className='width-image'
                />
                <Carousel.Caption>
                    <div className="row">
                        <div className="col-sm-6 p-4 text_jumbotron">
                            <h2>Baymax! (2022)</h2>
                            <div className="buttons mb-3">
                                <div className='imdb'>
                                    <img src="https://i.ibb.co/DVs77kh/imdb.png" alt="imdb" />
                                    <span>      6.8 / 10</span>
                                </div>
                                <div className="rating">
                                    <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" />
                                    <span>             83%</span>
                                </div>
                            </div>
                            <p>Return to the fantastical city of San Fransokyo where the affable, inflatable, inimitable healthcare companion robot, Baymax, sets out to do what he was programmed to do: help others.</p>
                            <button type="button" className="btn btn-dangers"><img src={Icon} alt="icon" />
                                <span className="text-white">  Watch Trailer</span></button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Jumbotron