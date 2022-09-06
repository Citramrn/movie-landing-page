import ImgOne from '../assets/adventure.jpg'
import ImgTwo from '../assets/animated.jpg'
import ImgThree from '../assets/spider-man-no-way-home.jpg'
import ImgFour from '../assets/thriller.jpg'

function Movie() {
    return (
        <section id='videos'>
            <div className="text-video container mt-5">
                <h4><b>Featured Videos</b></h4>
            </div>
            <div className="container cast-grid-video mt-3">
                <div className="cast-card-video">
                    <div className="card-head-video">
                        <img src={ImgOne} alt="captai-marvel" className='card-img rounded' />
                    </div>
                </div>
                <div className="cast-card-video">
                    <div className="card-head-video">
                        <img src={ImgTwo} alt="captai-marvel" className='card-img rounded' />
                    </div>
                </div>
                <div className="cast-card-video">
                    <div className="card-head-video">
                        <img src={ImgThree} alt="captai-marvel" className='card-img rounded' />
                    </div>
                </div>
                <div className="cast-card-video">
                    <div className="card-head-video">
                        <img src={ImgFour} alt="captai-marvel" className='card-img rounded' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Movie