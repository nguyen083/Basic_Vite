import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage làm storage engine mặc định
import rootReducer from './reducers'; // Thay thế bằng reducer thực tế của bạn

// Cấu hình redux-persist
const persistConfig = {
    key: 'root',          // Key để xác định trạng thái gốc cần lưu
    storage,              // Sử dụng localStorage làm engine lưu trữ
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store với middleware tùy chỉnh
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Loại bỏ cảnh báo với redux-persist
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

// Tạo persistor để đồng bộ hóa trạng thái với storage
const persistor = persistStore(store);

export { store, persistor }; // Xuất store và persistor
export default store;        // Xuất store mặc định
