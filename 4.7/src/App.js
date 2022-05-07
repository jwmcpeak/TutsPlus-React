import Navbar from './Navbar';
import List from './ListClass';
import Counter from './CounterClass';

function App() {
    let guitars = ['Strat', 'Les Paul', 'Explorer'];

    return (
        <>
            <Navbar title="Controlled Inputs" />
            <div className="container">
                {/* <Counter startAt={0} countBy={1} /> */}
                {/* <AddItem onSubmit={}/> */}
                <List 
                    title="Guitars"
                    items={guitars}
                />
            </div>
        </>
    );
}

export default App;