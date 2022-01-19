import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = () => {

    const [items, setItems] = useState(1);
    const stock = 10;

    function setRealStock(itemQty) {
        if (itemQty <= stock) {
            setItems(itemQty)
        } 
    }

    function removeFromStock(itemQty) {
        if (itemQty >= 1) {
            setItems(itemQty)
        }
    }

    return <>
    <h4>Crema Facial</h4>
    <div className='contador'>
        <Button variant="outline-dark" size="lg" onClick={ () => removeFromStock(items - 1)}>-</Button>
        <h3 className='stock'>{items}</h3>
        <Button variant="outline-dark" size="lg" onClick={ () => setRealStock(items + 1)}>+</Button>
    </div>
    <Button variant="dark">Agregar al carrito</Button>
    </>
}

export default ItemCount;