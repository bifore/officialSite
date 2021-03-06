import './Style/App.css';
import Header from './Components/header';
import Welcome from './Components/welcome';
import About from './Components/about';
import Product from './Components/product';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <About/>
            <Product/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;