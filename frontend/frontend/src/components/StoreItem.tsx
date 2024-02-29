import {Card} from "react-bootstrap";
// @ts-ignore
import {formatCurrencyIR, formatCurrencyUSD} from "../utilities/formatCurrency.ts";
// @ts-ignore
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

type StoreItemProps = {
    id: number,
    food_title: string,
    price: number,
    image: string
}

export function StoreItem({id, food_title, price, image}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{food_title}</span>
                    <span className="ms-2 text-muted">{formatCurrencyIR(price * 10)}</span>
                    {/*<span className="ms-2 text-muted">{formatCurrencyUSD(price/50)}</span>*/}
                </Card.Title>
                <div className="mt-auto">
                    {/*// @ts-ignore*/}
                    {quantity == 0 ?
                        (<button className=" btn w-100 btn-primary" onClick={()=> increaseCartQuantity(id)}>+ Add to Cart</button>)
                        :
                        <div className="d-flex align-items-center flex-row" style={{gap: ".5rem"}}>
                            <button onClick={()=> increaseCartQuantity(id) }className="btn  btn-primary">+</button>
                            <div>
                                <span className="fs-3">{quantity} </span> in cart
                            </div>
                            <button className="btn  btn-primary" onClick={()=> decreaseCartQuantity(id)}>-</button>
                            <button className="btn btn-danger" onClick={()=> removeFromCart(id) }><i className="fa fa-trash-can"
                                                                  style={{marginRight: "4px"}}></i>remove
                            </button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    );
}
