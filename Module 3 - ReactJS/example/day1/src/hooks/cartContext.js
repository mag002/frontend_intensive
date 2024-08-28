import { useState, createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();
const initialState = [];

export const CART_ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    UPDATE_CART: 'UPDATE_CART',
    REMOVE_CART: 'REMOVE_CART'
}
// [17:52]
function cartReducer(state, action) {
    const { ADD_ITEM, UPDATE_CART, REMOVE_CART } = CART_ACTIONS;
    switch (action.type) {
        // ADD_ITEM, UPDATE_CART, REMOVE_ITEM, (CLEAR_CART)
        case ADD_ITEM: {
            const { item } = action.payload;
            const itemIndex = state.findIndex(cartItem => cartItem.id === item.id);
            if (itemIndex >= 0) {
                const newCart = [...state];
                newCart[itemIndex].quantity = +newCart[itemIndex].quantity + +item.quantity
                return newCart;
            }
            return [...state, item]
        }
        case UPDATE_CART: {
            const { id, quantity } = action.payload;
            const itemIndex = state.findIndex(cartItem => cartItem.id === id);
            if (itemIndex >= 0) {
                const newCart = [...state];
                newCart[itemIndex].quantity = quantity
                return newCart;
            }
            return
        }

        case REMOVE_CART: {
            const { id } = action.payload;
            return [...state].filter(cartItem => cartItem.id !== id)
        }
        // case 'UPDATE_CART', case: 'REMOVE_ITEM'


    }
}


export function CartProvider({ children }) {
    // const [cart, setCart] = useState(initialState);
    // const addItem = (item) => {
    //     // check if the product already in the cart or not
    //     const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    //     if (itemIndex >= 0) {
    //         const newCart = [...cart];
    //         newCart[itemIndex].quantity = +newCart[itemIndex].quantity + +item.quantity
    //         return setCart(newCart);
    //     }
    //     setCart((prevCart) => [...prevCart, item])
    // }


    // Store 
    // Reducer (handle logic with store)
    // Actions (update/delete/create) (Lenh/command )

    // Actions: list of the commands

    // Object : type: 'ADD_ITEM', 'REMOVE_ITEM', ...
    // payload: 

    // reducer: Function,switch case depends on action, update the store

    // Store: store the value


    // ====== REDUCER =====
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
}
// Redux <= useContext
// useReducer => Redux

// useContext

// 18:05
export function useCart() {
    return useContext(CartContext)
}

// Mission 1: apply cart logic for all page

// Mission 2: complete the cart logic
// + Complete the add logic for addItem
// + Cart: list all the product and the quantity


/**
 * Javascript (HTML/CSS)
 * Numeric input (create a component by yourself) .. slider,range input 
 * Tham khao: slider (easy) numeric input (medium) slider input (hard)
 * 
 * apply numeric input to product detail page and cart page
 * decrease the quantity in the cart page, delete an item in cart page
 * 
 */