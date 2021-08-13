import React from 'react'

import Item from '../Item/Item'
import ItemsListStyled from './ItemsList.styles'

const ItemsList = ({items, type}) => {
        return (
            <ItemsListStyled>
                {
                        items.map((item, index) => {
                           return <Item item={item} type={type} key={index}/>
                        })     
                }  
            </ItemsListStyled>
        )
    
    
        
}

export default ItemsList
