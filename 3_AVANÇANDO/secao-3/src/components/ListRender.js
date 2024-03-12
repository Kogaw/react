import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users] = useState([
      {id: 1, name: "Matheus", age:31},
      {id: 72342141, name:"Pedro", age:28},
      {id: 18231321, name:"João", age: 44 }
    ])

    
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button>Delete random user</button>
    </div>
  )
}

export default ListRender