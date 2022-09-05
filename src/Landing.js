import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import FeatureMovie from './components/FeatureMovie'
import NewArrival from './components/NewArrival'
import Footer from './components/Footer'
import ExclusiveVideo from './components/ExclusiveVideo'
import Casts from './components/Cast'

function Landing() {
    return (
        <section>
            <Navbar />
            <Jumbotron />
            <FeatureMovie />
            <NewArrival />
            <ExclusiveVideo />
            <Casts />
            <Footer />
        </section>
    );
}

export default Landing;
