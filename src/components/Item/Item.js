import React from 'react'
import { withRouter } from 'react-router';

import {MarketItemStyled, ExchangesItemStyled} from './Item.styles';;

const Item = ({item, type, history}) => {
    if(type === 'markets') {
        return (
                <MarketItemStyled onClick={() => history.push('/markets/' + item.baseId)}>
                    <p>Rank: {item.rank}</p>
                    <p>ID: {item.baseId}</p>
                    <p>Symbol: {item.baseSymbol}</p>
                    <p>Exchange ID: {item.exchangeId}</p>
                    <p>Price: {item.priceUsd}</p>
                </MarketItemStyled>
        )
    } else if(type === 'exchanges') {
        return (
            <ExchangesItemStyled>
                <p>{item.rank}</p>
                <p>{item.name}</p>
                <p>{item.tradingPairs}</p>
                <p>{item.exchangeId}</p>
            </ExchangesItemStyled>
        )
    }
    
}

export default withRouter(Item);
