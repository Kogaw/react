import React from 'react'
import styles from "./CarDetails.module.css"

const CarDetails = ({car}) => {

    
  return (
    <div className={styles.card}>
        <h1>Detalhes do carro</h1>
        <ul>
            <li>Nome: {car.name}</li>
            <li>KM: {car.km}</li>
            <li>Cor: {car.color}</li>
        </ul>
    </div>
  )
}

export default CarDetails