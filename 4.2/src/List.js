import ListItem from './ListItem';
import PropTypes from 'prop-types';

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

List.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.oneOf([
        'primary',
        'secondary'
    ]),
    specialProp: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })
};

export default List;