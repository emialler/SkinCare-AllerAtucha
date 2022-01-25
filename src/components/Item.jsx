import { Button, Card, ListGroup } from "react-bootstrap";

const products = [
    {"name": "Crema Facial de día",
    "id": 1,
    "description": "Crema hidratante de día con FPS 25",
    "price": 950,
    "image": "../public/crema.jpg"},

    {"name": "Crema Facial de noche",
    "id": 2,
    "description": "Crema hidratante de noche",
    "price": 1150,
    "image": "../public/crema2.jpg"}
]

const Item = () => {

        return (
            <Card >
            <Card.Img src={products.image} />
            <Card.Body>
                <Card.Text>
                {products.name}
                </Card.Text>
                <Card.Title>
                ${products.price}
                </Card.Title>          
            </Card.Body>              
            <Card.Header>Detalles</Card.Header> 
            <ListGroup variant="flush">
                    {products.description}
                </ListGroup>                       
            <Button variant="primary" style={{margin: "0 45%"}}>Ver detalle</Button>                
        </Card> 
        )
     
}

export default Item;