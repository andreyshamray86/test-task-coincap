import React, {useState, useEffect} from 'react'
import axios from 'axios';

import ItemDetailedStyled from './ItemDetailed.styles'

const ItemDetailed = ({match}) => {
    const [detailedItem, setDetailedItem] = useState({});
    
    useEffect(() => {
        const param = match.params;

        if(param.hasOwnProperty('exchangeId')) {
            axios.get(`https://api.coincap.io/v2/exchanges/${param.exchangeId}`)
            .then(res => {
                setDetailedItem({...res.data.data});
                
            })
            .catch(err => console.log(err))
        }
    }, [match.params]);

    

    console.log(detailedItem);
    const procent = (+detailedItem.percentTotalVolume).toFixed(2);
    const volume = ((+detailedItem.volumeUsd)/1000000000).toFixed(1);
  
    return (
        <ItemDetailedStyled>
            <h2>{detailedItem.name}</h2>
            <div>
                <p>Rank: {detailedItem.rank}</p>
                <p>Traiding Pairs: {detailedItem.tradingPairs}</p>
                <p>Exchange ID: {detailedItem.exchangeId}</p>
                <p>Change (24Hr): {procent}%</p>
                <p>Volume (24Hr): {volume}b</p>
                <p>Exchange URL: {detailedItem.exchangeUrl}</p>
                
            </div>
        </ItemDetailedStyled>
    )
}

export default ItemDetailed
