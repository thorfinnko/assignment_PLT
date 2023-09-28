// mockStore.js
import { configureStore } from '@reduxjs/toolkit';

// Import your rootReducer and initial state
import { rootReducer } from '../src/store';

// Create a mock store
const createMockStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
};

export default createMockStore;
