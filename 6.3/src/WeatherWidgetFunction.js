import {useState,useEffect} from 'react';

function WeatherWidget({location}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (location) {
            console.log('request made');
        }
    },[location]);
    
    console.log('render occurred');
    return (
        <div></div>
    );
    
}

export default WeatherWidget;