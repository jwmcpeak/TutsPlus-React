import Navbar from './Navbar';
import List from './List';
import Counter from './CounterClass';

function App() {
    let guitars = ['Strat', 'Les Paul', 'Explorer'];

    return (
        <>
            <Navbar title="Getting Started with State" />
            <div className="container">
                <Counter startAt={0} countBy={1} />
                {/* <List 
                    title="Guitars"
                    background='secondary'
                /> */}
            </div>
        </>
    );
}

export default App;