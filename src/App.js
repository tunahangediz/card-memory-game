import "./App.css";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import PokeState from "./context/PokeState";

function App() {
    return (
        <PokeState>
            <div className="App">
                <Navbar />
                <CardGrid />
                <Rules />
            </div>
        </PokeState>
    );
}

export default App;
