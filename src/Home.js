import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './reducer/CounterReducer';
import { v4 as uuid } from 'uuid';

function Home() {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addTodo({
      id: uuid(),
      title: 'jaydeep',
    }))
  }

  return (
    <div>
      <button type='button' onClick={addItem}>addData</button>
    </div>
  )
}

export default Home
