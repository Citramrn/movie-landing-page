import ImgOne from '../assets/images/endgame.jpg'
import ImgTwo from '../assets/images/spider-men.jpg'
import ImgThree from '../assets/images/matrix.jpg'
import ImgFour from '../assets/images/panther.jpg'
import ImgFive from '../assets/images/ww84.jpg'
import ImgSix from '../assets/images/interstaller.jpg'

function Movie() {
    return (
        <section>
            <div className="text-movies container mt-5" id='arrival'>
                <h4><b>New Arrival</b></h4>
            </div>
            <div className="container movies-grid mt-3">
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgOne} alt="captai-marvel" className='card-img' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2019  </p>
                            <p className='name-hero'>Avengers : Endgame</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   6.8/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 84%</span>
                                    </div>
                                </div>
                                <p>Petualangan, Cerita Fiksi, Aksi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgTwo} alt="captai-marvel" className='card-img' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2017  </p>
                            <p className='name-hero'>Spider-man</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   7.4/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 74%</span>
                                    </div>
                                </div>
                                <p>Aksi, Petualangan, Cerita Fiksi, Drama</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgThree} alt="captai-marvel" className='card-img' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2021  </p>
                            <p className='name-hero'>
                                The Matrix Resurrections</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   5.7/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 66%</span>
                                    </div>
                                </div>
                                <p>Cerita Fiksi, Aksi, Petualangan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgFour} alt="captai-marvel" className='card-img' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2018  </p>
                            <p className='name-hero'>Black Panther </p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   7.3/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 74%</span>
                                    </div>
                                </div>
                                <p>Aksi, Petualangan, Cerita Fiksi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgFive} alt="captai-marvel" className='card-img' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2020  </p>
                            <p className='name-hero'>Wonder Woman 1984</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   7.3/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 65%</span>
                                    </div>
                                </div>
                                <p>Aksi, Petualangan, Fantasi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgSix} alt="captai-marvel" className='card-img' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2014  </p>
                            <p className='name-hero'>Interstellar</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   8.6/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 84%</span>
                                    </div>
                                </div>
                                <p>Petualangan, Drama, Cerita Fiksi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Movie