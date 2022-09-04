import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import FeatureMovie from './FeatureMovie'
import NewArrival from './NewArrival'
import Footer from './Footer'
import ExclusiveVideo from './ExclusiveVideo'
import Casts from './Cast'

function LandingPage() {
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

export default LandingPage;