import Navbar from './Navbar';
import List from './List';

function App() {
    const guitars = ['Strat', 'Les Paul', 'Explorer'];


    return (
        <>
            <Navbar title="CSS and Separating JS and JSX" />
            <div className="container">
                <List 
                    title="Guitars"
                    items={guitars}
                />
            </div>
        </>
    );
}

export default App;