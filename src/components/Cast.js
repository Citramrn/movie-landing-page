import ImgOne from '../assets/cast/cast1.jpg'
import ImgTwo from '../assets/cast/cast2.jpg'
import ImgThree from '../assets/cast/cast3.png'
import ImgFour from '../assets/cast/cast4.png'
import ImgFive from '../assets/cast/cast5.png'

function Movie() {
    return (
        <section id='cast'>
            <div className="text-cast container mt-5">
                <h4><b>Featured Casts</b></h4>
            </div>
            <div className="container cast-grid mt-3">
                <div className="cast-card-cast">
                    <div className="card-head-cast">
                        <img src={ImgOne} alt="captai-marvel" className='card-img' />
                        <div className="name">
                            <p className='name-people'> Claire Luvicat</p>
                        </div>
                    </div>
                </div>
                <div className="cast-card-cast">
                    <div className="card-head-cast">
                        <img src={ImgTwo} alt="captai-marvel" className='card-img' />
                        <div className="name">
                            <p className='name-people'> Brian Brich G</p>
                        </div>
                    </div>
                </div>
                <div className="cast-card-cast">
                    <div className="card-head-cast">
                        <img src={ImgThree} alt="captai-marvel" className='card-img' />
                        <div className="name">
                            <p className='name-people'> Chloë Grace Moretz</p>
                        </div>
                    </div>
                </div>
                <div className="cast-card-cast">
                    <div className="card-head-cast">
                        <img src={ImgFour} alt="captai-marvel" className='card-img' />
                        <div className="name">
                            <p className='name-people'> Ryan Reynolds</p>
                        </div>
                    </div>
                </div>
                <div className="cast-card-cast">
                    <div className="card-head-cast">
                        <img src={ImgFive} alt="captai-marvel" className='card-img' />
                        <div className="name">
                            <p className='name-people'> Keanu Reeves</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Movie