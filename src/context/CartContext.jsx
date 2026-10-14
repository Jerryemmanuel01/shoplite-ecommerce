import { useReducer } from "react";
import { createContext } from "react";
import { loadCartFromStorage, saveCartToStorage } from "../utils/cartStorage";

//Action types Defination
export const CART_ACTION = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  APPLY_COUPON: "APPLY_COUPON",
};

// shape of our cart state

export const initalCartState = {
  items: loadCartFromStorage() || [],
  couponCode: "",
  discountPercent: 0,
};

// Reducers function implementation

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTION.ADD_TO_CART: {
      const { product, quantity = 1, selectedVariant = "" } = action.payload;
      const cartItemId = `${product.id}-${selectedVariant}`;

      //Product exist: update product quantity

      const existingIndex = state.items.findIndex(
        (item) => item.id === cartItemId,
      );

      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + quantity,
        };
        saveCartToStorage(updatedItems);
        return { ...state, items: updatedItems };
      }

      //New product

      const newItem = {
        id: cartItemId,
        product,
        selectedVariant,
        quantity,
        unitPrice: product.price,
      };
      saveCartToStorage([...state.items, newItem]);
      return { ...state, items: [...state.items, newItem] };
    }

    case CART_ACTION.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        const result = state.items.filter((item) => item.id !== id);
        saveCartToStorage(result);
        return {
          ...state,
          items: result,
        };
      }

      const result = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
      saveCartToStorage(result);
      return {
        ...state,
        items: result,
      };
    }

    case CART_ACTION.REMOVE_FROM_CART: {
      const { id } = action.payload;

      const result = state.items.filter((item) => item.id !== id);
      saveCartToStorage(result);
      return {
        ...state,
        items: result,
      };
    }

    case CART_ACTION.CLEAR_CART: {
      saveCartToStorage([])
      return { ...state, items: [], couponCode: "", discountPercent: 0 };
    }

    case CART_ACTION.APPLY_COUPON: {
      const { code, discount } = action.payload;

      return {
        ...state,
        couponCode: code,
        discountPercent: discount,
      };
    }
  }
};

export const CartContext = createContext(null);
