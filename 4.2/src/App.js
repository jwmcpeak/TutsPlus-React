import Navbar from './Navbar';
import List from './List';

function App() {
    let guitars = ['Strat', 'Les Paul', 'Explorer'];

    return (
        <>
            <Navbar title="CSS and Separating JS and JSX" />
            <div className="container">
                <List 
                    title="Guitars"
                    items={guitars}
                    background='danger'
                />
            </div>
        </>
    );
}

export default App;