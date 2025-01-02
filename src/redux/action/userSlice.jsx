import { createSlice } from '@reduxjs/toolkit';
import { use } from 'react';


//khởi tạo state ban đầu
const initialState = {
    userName: null,
    password: null,
};

export const userSlice = createSlice({
    name: 'user', //tên của reducer
    initialState,
    reducers: {
        setInforUser: (state, action) => {
            state.userName = action.payload.username;
            state.password = action.payload.password;
        },
        setInitUser: (state) => {
            state.userName = null;
            state.password = null;
        }
    },
});

// Export các action để sử dụng trong component
export const { setInforUser, setInitUser } = userSlice.actions;

// Export reducer để sử dụng trong store
export default userSlice.reducer;
