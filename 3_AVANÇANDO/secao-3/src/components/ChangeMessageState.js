import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Oi", "Olá", "Olá, tudo bem?"]
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>1</button>
        <button onClick={() => handleMessage(messages[2])}>1</button>
    </div>
  )
}

export default ChangeMessageState