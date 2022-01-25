import Item from "./Item";
import { Col } from "react-bootstrap"; 

const ItemList = ({products}) => {

    return (
        <>
        {products.map((product) => (
            <Col>
                <Item  />
            </Col>
        ))}
    </>
    )
}

export default ItemList;