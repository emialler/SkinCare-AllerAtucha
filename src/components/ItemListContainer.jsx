import React from 'react';
import ItemList from './ItemList';
import { Container, Row } from 'react-bootstrap';

const items = [{id: 1, title: 'Crema Facial de Día', price: 895, pictureUrl: 'crema.jpg', description: 'Hidrata por 72 h. y protege la piel manteniéndola suave, luminosa y saludable. Previene manchas. Indicada para piel normal a seca. Hipoalergénica / Apto piel sensible / Testeada dermatológicamente / Sin TACC'}, 
                {id: 2, title: 'Crema Facial de Noche', price: 1880,  pictureUrl: 'crema2.jpg', description: 'Nutre en profundidad, hidrata por 72 h. y repara los tejidos de colágeno y elastina. Previene el envejecimiento prematuro de la piel. Indicada para piel normal a seca. Hipoalergénica / Apto piel sensible / Testeada dermatológicamente / Sin TACC'},
                {id: 3, title: 'Agua Micelar x 200ml', price: 940,  pictureUrl: 'agua.jpg', description: 'Resuelve la rutina de limpieza en un solo paso: desmaquilla, limpia, tonifica, ilumina, hidrata y calma. Con efecto purificante. Deja la piel suave y fresca sin sensación de oleosidad. Sin alcohol. Indicada para todo tipo de piel. Hipoalergénica / Apta piel sensible / Testeada dermatológica y oftalmológicamente / Sin TACC / Sin parabenos'},
                {id: 4, title: 'Tónico Hidratante Descongestivo', price: 940,  pictureUrl: 'tonico.jpg', description: 'Restaura y equilibra la hidratación de la piel completando el proceso de limpieza facial, dejándola purificada y fresca. Además tiene un efecto descongestivo, emoliente y suavizante. No contiene alcohol. Indicado para todo tipo de piel. Hipoalergénico / Apto piel sensible / Testeado dermatológica y oftalmológicamente / Sin TACC'} ];

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
