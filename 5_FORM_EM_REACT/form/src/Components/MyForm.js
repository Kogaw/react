import React from 'react'
import './MyForm.css'
import {useState} from 'react'

const Myform = ({user}) => {
    // 6 - controlled inputs
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState (user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email, bio, role)   
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    // 7 - limpar fomulario


    // console.log(name)
    //console.log(email)


  return (
    <div>
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                {/* 5 - envio de form */}
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                name='name' 
                placeholder='Digite o seu nome' 
                onChange={handleName}
                value={name}/>
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-Mail</span>
                {/* 4 - simplificação de manipulação de state */}
                <input type="email" 
                name='email' 
                placeholder='Digite seu email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </label>
            <label>
                <span>Bio:</span>  
                <textarea name="bio" 
                placeholder='Descrição do usuário' 
                onChange={(e) => setBio(e.target.value)} 
                value={bio}> 
                </textarea>

            </label>
            {/* 9 - select */}
            <label>
                <span>Função</span>
                <select name="role" 
                onChange={(e) => setRole(e.target.value)}
                value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
          
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myform