import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    disabledButtons: []
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
      
      // Agregar a botones deshabilitados
      if (!state.disabledButtons.includes(plant.id)) {
        state.disabledButtons.push(plant.id);
      }
    },
    
    removeItem: (state, action) => {
      const plantId = action.payload;
      state.items = state.items.filter(item => item.id !== plantId);
      state.disabledButtons = state.disabledButtons.filter(id => id !== plantId);
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
