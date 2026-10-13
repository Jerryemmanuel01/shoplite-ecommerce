import { useContext, useReducer } from "react";
import {
  CART_ACTION,
  CartContext,
  cartReducer,
  initalCartState,
} from "./CartContext";
import toast from "react-hot-toast";

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initalCartState);

  const totalItemsCount = state.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0,
  );

  const deliveryFee = subtotal > 50000 || subtotal === 0 ? 0 : 2500;

  const discountAmount = Math.round((subtotal * state.discountPercent) / 100);

  const total = Math.max(0, subtotal + deliveryFee - discountAmount);

  //Action dispatchers

  const addToCart = (product, quantity = 1, selectedVariant = "") => {
    dispatch({
      type: CART_ACTION.ADD_TO_CART,
      payload: { product, quantity, selectedVariant },
    });
  };

  const updateQuantity = (id, quantity = 1) => {
    dispatch({
      type: CART_ACTION.UPDATE_QUANTITY,
      payload: { id, quantity },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: CART_ACTION.REMOVE_FROM_CART,
      payload: { id },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CART_ACTION.CLEAR_CART,
    });
  };

  const applyCoupon = (code) => {
    console.log(code);
    
    if (String(code.toUpperCase()) === "SHOPLITE2026") {
      dispatch({
        type: CART_ACTION.APPLY_COUPON,
        payload: { code, discount: 10 },
      });
      toast.success("10% Discount Applied!");
      return { success: true, message: "10% Discount Applied!" };
    }
    toast.error("Invalid coupon code!");
    return { success: false, message: "Invalid coupon code!" };
  };

  const value = {
    cartItems: state.items,
    totalItemsCount,
    subtotal,
    deliveryFee,
    discountAmount,
    couponCode: state.couponCode,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    applyCoupon,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
