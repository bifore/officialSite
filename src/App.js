import './Style/App.css';
import Header from './Components/header';
import Welcome from './Components/welcome';
import About from './Components/about';
import Product from './Components/product';
import Contact from './Components/contact';

function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <About/>
            <Product/>
            <Contact/>
        </div>
    );
}

export default App;