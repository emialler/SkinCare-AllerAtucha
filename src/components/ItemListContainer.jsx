import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemsListContainer = () => {
    return <>
        <h2>Productos Faciales</h2>
        <ItemCount stock="10" producto="Crema Facial"/>
        <ItemList />
        </>
    
}

export default ItemsListContainer;
