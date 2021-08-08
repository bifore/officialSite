import './Style/App.css';
import Header from './Components/header';
import Welcome from './Components/welcome';
import About from './Components/about';

function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <About/>
        </div>
    );
}

export default App;