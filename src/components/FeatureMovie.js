import ImgOne from '../assets/images/captain-marvel.jpg'
import ImgTwo from '../assets/images/casino-royale.jpg'
import ImgThree from '../assets/images/dune.jpg'
import ImgFour from '../assets/images/dark-knight.jpg'
import ImgFive from '../assets/images/shang-chi.jpg'
import ImgSix from '../assets/images/venom.jpg'

function Movie() {
    return (
        <section id='featureMovie'>
            <div className="text-movies container mt-5">
                <h4><b>Featured Movie</b></h4>
            </div>
            <div className="container movies-grid mt-3">
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgOne} alt="captai-marvel" className='card-img rounded' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2019  </p>
                            <p className='name-hero'>Captain Marvel </p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   6.8/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 68%</span>
                                    </div>
                                </div>
                                <p>Aksi, Petualangan, Fiksi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgTwo} alt="captai-marvel" className='card-img rounded' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2006  </p>
                            <p className='name-hero'>Casino Royale</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   8.0/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 75%</span>
                                    </div>
                                </div>
                                <p>Petualangan, Aksi, Cerita Seru</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgThree} alt="captai-marvel" className='card-img rounded' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2021  </p>
                            <p className='name-hero'>
                                Dune: Part One</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   8.0/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 79%</span>
                                    </div>
                                </div>
                                <p>Cerita Fiksi, Petualangan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgFour} alt="captai-marvel" className='card-img rounded' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2008  </p>
                            <p className='name-hero'>The Dark Knight</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   9.0/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 85%</span>
                                    </div>
                                </div>
                                <p>Drama, Aksi, Kejahatan, Cerita Seru
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgFive} alt="captai-marvel" className='card-img rounded' />
                        <div className="people-movie">
                            <p className='year mt-2'> USA, 2021  </p>
                            <p className='name-hero'>Shang Chi</p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   7.4/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 77%</span>
                                    </div>
                                </div>
                                <p>Aksi, Petualangan, Fantasi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    <div className="movie-card">
                    <div className="card-head">
                        <img src={ImgSix} alt="captai-marvel" className='card-img rounded' />
                        <div className="people-movie">
                            <p className='year mt-2'> CHN, 2018  </p>
                            <p className='name-hero'>Venom </p>
                            <div className='action'>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src="https://i.ibb.co/DVs77kh/imdb.png" width={30} alt="imdb" />  <span>   6.6/10</span>
                                    </div>
                                    <div className="rate">
                                        <img src="https://i.ibb.co/s521t6s/fruit.png" alt="rating" /> <span> 68%</span>
                                    </div>
                                </div>
                                <p>Cerita Fiksi, Aksi
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