const CART_STORAGE_KEY = "shoplite_cart_key";

export function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Failed to return item from local storage", error);
    return [];
  }
}

export function saveCartToStorage(cartItems) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  } catch (error) {
    console.error("Failed to save cart to local storage", error);
  }
}

