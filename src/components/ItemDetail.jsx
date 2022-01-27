import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
 
    return (<>
            <Container>
                <div>
                    <img src={pictureUrl} alt="" style={{ marginTop: 10, height: '300px', with: "100%", objectFit: "contain" }} variant="left"/>
                </div>
                <Card>
                    <Card.Body style={{ textAlign: "right" }}>
                        <Card.Text style={{ height: 40, textAlign: "center"}}>
                            {title}
                        </Card.Text>
                        <Card.Title style={{ textAlign: "center"}}>
                            ${price}
                        </Card.Title>          
                    </Card.Body>                         
                    <ItemCount stock="10" />   
                </Card>  
            </Container>
  </>)
   
  }

  export default ItemDetail;
  