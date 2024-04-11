import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    modalState: boolean
}

const initialState: ModalState = {
    modalState: false
}

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        changeModalState: (state, action) => void(state.modalState = action.payload),
    }
})

export const {changeModalState} = modalSlice.actions
export default modalSlice.reducer