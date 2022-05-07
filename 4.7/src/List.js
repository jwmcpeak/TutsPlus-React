import ListItem from './ListItem';
import PropTypes from 'prop-types';

function List(props) {
    let items = props.items.map(item => <ListItem text={item} />); // array li elements

    let css = `bg-${props.background}`;

    return (
        <>
            <h3 className={css}>{props.title}</h3>
            <ul>
                {items}
            </ul>
        </>
    );
}

List.defaultProps = {
    items: [],
    background: 'primary'
};

List.propTypes = {
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