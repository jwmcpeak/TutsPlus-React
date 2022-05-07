import {useParams} from 'react-router-dom';

export default function ReactNews() {

    const params = useParams();

    return (
        <>
            
                <h5>{params.newsTopic}</h5>
            
        </>
    )
}