// @ts-ignore
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
// @ts-ignore
import storeItems from '../../data/items.json'
// @ts-ignore
import React from "react";
import {Button, Stack} from "react-bootstrap";
// @ts-ignore
import {formatCurrencyIR, formatCurrencyUSD} from "../../utilities/formatCurrency.ts";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find((i) => i.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            <img src={item.image} alt={item.name} style={{width: "125px", height: "75px"}}/>
            <div className="me-auto">
                {item.food_title}{quantity > 1 &&
                <span className='text-muted' style={{fontSize: ".65rem"}}>X{quantity}</span>}
                <div className="text-muted" style={{fontSize: ".75rem"}}>{formatCurrencyIR(item.price)}</div>
                <div>{formatCurrencyIR(item.price * quantity)} </div>
                <Button size='sm' variant='outline-danger' onClick={() => removeFromCart(id)}>&times;</Button>
                    </div>

                    </Stack>
                    )
                }