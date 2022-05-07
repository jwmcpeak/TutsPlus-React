import {Component} from 'react';


class Counter extends Component {
    static defaultProps = {
        startAt: 0,
        countBy: 1
    };

    constructor(props) {
        super(props);

        this.state = {
            counter: props.startAt
        };

        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    countUp(e) {
        this.setState({counter: this.state.counter + this.props.countBy});
    }

    countDown() {
        this.setState({counter: this.state.counter - this.props.countBy});
    }

    render() {
        return (
            <>
                <p>Start At: {this.props.startAt}</p>
                <p>Count By: {this.props.countBy}</p>
                <h4>{this.state.counter}</h4>
                <button className="btn btn-primary" onClick={this.countUp}>Count Up</button>
                <button className="btn btn-danger" onClick={this.countDown}>Count Down</button>
    
            </>
        );
    }
}

export default Counter;