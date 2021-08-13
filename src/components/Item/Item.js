import React from 'react'
import { withRouter } from 'react-router';

import {MarketItemStyled, ExchangesItemStyled} from './Item.styles';;

const Item = ({item, type, history}) => {
    if(type === 'markets') {
        return (
                <MarketItemStyled onClick={() => history.push('/markets/' + item.exchangeId)}>
                    <p>{item.rank}</p>
                    <p>{item.baseId}</p>
                    <p>{item.baseSymbol}</p>
                    <p>{item.exchangeId}</p>
                    <p>{item.priceUsd}</p>
                </MarketItemStyled>
        )
    } else if(type === 'exchanges') {
        return (
            <ExchangesItemStyled onClick={() => history.push('/exchanges/' + item.exchangeId)}>
                <p>{item.rank}</p>
                <p>{item.name}</p>
                <p>{item.tradingPairs}</p>
                <p>{item.exchangeId}</p>
            </ExchangesItemStyled>
        )
    }
    
}

export default withRouter(Item);
