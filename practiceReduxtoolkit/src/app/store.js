import {configureStore} from '@reduxjs/toolkit'
import countReducer from '../features/countSlice'
const store = configureStore({
    reducer:countReducer
})

export default store