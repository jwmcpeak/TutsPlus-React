import {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.newItem)

        this.setState({
            newItem: ''
        });

        // TODO: add text to the array
    }

    handleChange(e) {
        this.setState({newItem: e.target.value});
    }

    render() {
        return (
            <>
                <div className="pt-3 pb-2">
                    <form>
                        <input 
                            type="text" 
                            className="form-control-inline" 
                            value={this.state.newItem}
                            onChange={this.handleChange} />
                        <button 
                            className="btn btn-primary"
                            onClick={this.handleClick}
                        >
                            {this.props.buttonText}
                        </button>
                    </form>
                </div>

            </>
        );
    }
}

export default AddItem;