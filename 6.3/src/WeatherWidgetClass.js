import {Component} from 'react';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        if (this.props.location) {
            console.log('request made in componentDidMount');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            console.log('request made in componentDidUpdate');
        }
    }

    render() {
        console.log('render occurred');
        return (
            <div></div>
        );
    }
}

export default WeatherWidget;