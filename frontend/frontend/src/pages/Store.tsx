import {Col, Row} from "react-bootstrap";
// @ts-ignore
import storeItems from "../data/items.json"
// @ts-ignore
import {StoreItem} from "../components/StoreItem.tsx";

export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row md={1} xs={1} lg={2} xl={2} className="g-3 ms-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem{...item}/>
                    </Col>
                    ))}

            </Row>
        </>
    )
}