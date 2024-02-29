// @ts-ignore
import React, {createContext, useContext, useState} from "react";
// @ts-ignore
import {ShoppingCart} from '../components/Menu/ShoppingCart.tsx'

type shoppingCartProviderProps = {
    children: React.ReactNode
}
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItems[]
}
type CartItems = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext);


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: shoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItems[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = ()=>setIsOpen(true)
    const closeCart = ()=>setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, {id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity == 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }


    return <ShoppingCartContext.Provider
        value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems,closeCart, openCart, cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
}
