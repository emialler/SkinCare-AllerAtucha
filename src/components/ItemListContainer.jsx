import React from 'react';
import ItemList from './ItemList';
import { Container, Row } from 'react-bootstrap';

const items = [{id: 1, title: 'Crema Facial de Día', price: 1150, pictureUrl: 'crema.jpg'}, 
                {id: 2, title: 'Crema Facial de Noche', price: 950,  pictureUrl: 'crema2.jpg'},
                {id: 3, title: 'Agua Micelar', price: 850,  pictureUrl: 'agua.jpg'},
                {id: 4, title: 'Tónico Hidratante Descongestivo', price: 820,  pictureUrl: 'tonico.jpg'} ];

const ItemsListContainer = () => {
    return(
        <Container>
            <Row xs={2} md={4} className="g-4 mt-1">
                <ItemList items={items} />
            </Row>
        </Container>   
        ) 
}

export default ItemsListContainer;
