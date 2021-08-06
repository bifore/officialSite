import './Style/App.css';
import Header from './Components/header';
import Welcome from './Components/welcome';

function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
        </div>
    );
}

export default App;