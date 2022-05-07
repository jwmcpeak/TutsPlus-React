import Navbar from './Navbar';
import List from './List';

function App() {
    let guitars = ['Strat', 'Les Paul', 'Explorer'];

    return (
        <>
            <Navbar title="Default Props" />
            <div className="container">
                <List 
                    title="Guitars"
                    background='secondary'
                />
            </div>
        </>
    );
}

export default App;