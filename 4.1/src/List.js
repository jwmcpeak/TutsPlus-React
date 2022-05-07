import ListItem from './ListItem';

function List(props) {
    let items = props.items.map(item => <ListItem text={item} />); // array li elements

    return (
        <>
            <h3>{props.title}</h3>
            <ul>
                {items}
            </ul>
        </>
    );
}

export default List;