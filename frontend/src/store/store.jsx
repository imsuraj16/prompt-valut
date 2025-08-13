import {configureStore} from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import promptSlice from './reducers/promptSlice'

export const store = configureStore({
    reducer : {
        user : userSlice,
        prompt : promptSlice
    }
})