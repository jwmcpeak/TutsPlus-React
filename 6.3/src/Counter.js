import {useState} from 'react';

function Counter(props) {
    const [counter,setCounter] = useState(props.startAt);

    //setTimeout(() => setCounter(counter + props.countBy), 1000);

    function countUp(e) {
        console.log(e);
        setCounter(counter + props.countBy);
    }

    function countDown() {
        setCounter(counter - props.countBy)
    }

    return (
        <>
            <p>Start At: {props.startAt}</p>
            <p>Count By: {props.countBy}</p>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={countUp}>Count Up</button>
            <button className="btn btn-danger" onClick={countDown}>Count Down</button>

        </>
    );
}

Counter.defaultProps ={
    startAt: 0,
    countBy: 1
};

export default Counter;