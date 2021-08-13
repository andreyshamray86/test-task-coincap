import React, {useState, useEffect} from 'react'
import axios from 'axios'


import ItemsList from '../ItemsList/ItemsList'
import { MarketHeaderStyled } from './Markets.styles'

const Markets = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const config = {
            'Content-Encoding': 'gzip'
        }
    
        axios.get('https://api.coincap.io/v2/markets', config)
        .then(res => {
            setItems(
                [...res.data.data]
            )
        })
        .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <MarketHeaderStyled>
                <p>Rank</p>
                <p>ID</p>
                <p>Symbol</p>
                <p>Exchange</p>
                <p>Price</p>
            </MarketHeaderStyled>
            <ItemsList items={items} type={'markets'}/>
        </div>
    )
}

export default Markets
