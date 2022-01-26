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
    <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
        <Button variant="outline-dark" size="lg" onClick={ () => removeFromStock(items - 1)}>-</Button>
        <h3 style={{padding: "0 20px"}}>{items}</h3>
        <Button variant="outline-dark" size="lg" onClick={ () => setRealStock(items + 1)}>+</Button>
    </div>
    <Button variant="dark">Agregar al carrito</Button>
    </>
}

export default ItemCount;