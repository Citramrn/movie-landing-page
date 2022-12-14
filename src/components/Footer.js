import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="container">
            <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-black">  <i className='bx bxs-camera-movie'></i>
                        &copy; <b>2022 MyAl Qur'an, By Citra</b> </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link className="text-gray" to="#"><i className='bx bxl-github'></i></Link></li>
                    <li className="ms-3"><Link className="text-gray" to="#"><i className='bx bx-envelope'></i></Link></li>
                    <li className="ms-3"><Link className="text-gray" to="#"><i className='bx bxl-instagram'></i></Link></li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer

