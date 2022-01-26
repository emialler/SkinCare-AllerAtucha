import Item from "./Item";
import { Col  } from "react-bootstrap";

const ItemList = ({items}) => {
    
    return (
        <>
        {items.map((item) => (
            <Col>
                <Item item={item} />
            </Col>
        ))}
    </>
    )
}

export default ItemList;