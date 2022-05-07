import {makerStyles} from './guitarStyles';

function ListItem(props) {

    let maker = props.item.text && props.item.text.toLowerCase();

    return (
        <li style={maker && makerStyles[maker]}>
            <h5>{props.item.title}</h5>
            {props.item.text}
        </li>
    );
}

export default ListItem;