function ListItem(props) {
    return (
        <li>
            <h5>{props.item.title}</h5>
            {props.item.text}
        </li>
    );
}

export default ListItem;