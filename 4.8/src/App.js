import {useState} from 'react';
import Navbar from './Navbar';
import List from './List';
import Counter from './CounterClass';
import AddItem from './AddItem';


function App() {
    const [guitars, setGuitars] = useState(['Strat', 'Les Paul', 'Explorer']);

    function updateGuitars(newGuitar) {
        setGuitars([...guitars, newGuitar]);
    }

    return (
        <>
            <Navbar title="Controlled Inputs" />
            <div className="container">
                {/* <Counter startAt={0} countBy={1} /> */}
                <AddItem buttonText="Add Guitar" onSubmit={updateGuitars}/>
                <List 
                    title="Guitars"
                    items={guitars}
                />
            </div>
        </>
    );
}

export default App;