import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../app/features/counter/counterSlice'

// Counter component
export default function Counter() {
    // Use useSelector to access the current count from the Redux store
    const count = useSelector((state) => state.counter.value)

    // Use useDispatch to get the dispatch function
    const dispatch = useDispatch()

    return (
        <div>
            {count}

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '10%' }}>
                {/* Dispatch increment action when button is clicked */}
                <button onClick={() => dispatch(increment())}>add</button>
                {/* Dispatch decrement action when button is clicked */}
                <button onClick={() => dispatch(decrement())}>subtract</button>
            </div>
        </div>
    )
}
