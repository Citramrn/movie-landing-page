import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Landing'
import About from './components/About'
import './styles/index.scss';

function App() {
    return (
        <Router>
            <Route path={['/', '/home']} exact component={Home} />
            <Route path="/about" component={About} />
        </Router>
    );
}

export default App;
