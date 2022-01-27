import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";


const Item = ({item}) => {

    const {id, title, price, pictureUrl } = item

    return (
        <div>
            <Card>
                <Card.Img src={pictureUrl} style={{ marginTop: 10, height: '110px', with: "100%", objectFit: "contain" }} variant="top" />
                <Card.Body style={{ textAlign: "left" }}>
                    <Card.Text style={{ height: 40, textAlign: "center"}}>
                        {title}
                    </Card.Text>
                    <Card.Title style={{ textAlign: "center"}}>
                        ${price}
                    </Card.Title>          
                </Card.Body>                         
                <Button>Ver detalles</Button> 
                <ItemCount stock="10" />              
            </Card>
        </div>
    )
}

export default Item;