import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes do usuário</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        <h3>O usuário pode tirar habilitação?</h3>
        {idade > 18 ? (
            <div>
                <p>O usuário pode tirar habilitação!</p>
            </div>
        ) : (
            <div>
                <p>O usuário não pode tirar habilitação</p>
            </div>
        )}
    </div>
  )
}

export default UserDetails