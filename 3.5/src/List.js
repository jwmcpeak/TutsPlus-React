function List(props) {
    let items = props.items.map(item => <li>{item}</li>); // array li elements

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