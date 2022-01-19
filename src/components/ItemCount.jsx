import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = (props) => {

    const [items, setItems] = useState(1);

    function setRealStock(itemQty) {
        if (itemQty <= props.stock) {
            setItems(itemQty)
        } 
    }

    function removeFromStock(itemQty) {
        if (itemQty >= 1) {
            setItems(itemQty)
        }
    }

    return <>
    <h4>{props.producto}</h4>
    <div className='contador'>
        <Button variant="outline-dark" size="lg" onClick={ () => removeFromStock(items - 1)}>-</Button>
        <h3 className='stock'>{items}</h3>
        <Button variant="outline-dark" size="lg" onClick={ () => setRealStock(items + 1)}>+</Button>
    </div>
    <Button variant="dark">Agregar al carrito</Button>
    </>
}

export default ItemCount;