import React, {useState, useEffect} from 'react'
import axios from 'axios';

import ItemsList from '../ItemsList/ItemsList'

const Exchanges = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const config = {
            'Content-Encoding': 'gzip'
        }
    
        axios.get('https://api.coincap.io/v2/exchanges', config)
        .then(res => {
            setItems(
                [...res.data.data]
            )
        })
        .catch(err => console.log(err));
    }, []);

    // console.log(items);

    return (
        <div>
            <ItemsList items={items} type={'exchanges'}/>
        </div>
    )
}

export default Exchanges