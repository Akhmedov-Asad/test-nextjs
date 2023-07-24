import './contact.scss'

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()

    return await data
}

import UserCard from '../../../components/userCard/userCard'

async function Contact() {
    const users = await getUsers()
    console.log(users);
    return (
        <div>
            <h2>contact pages</h2>

            

            <div>
                {users.slice(1, 4).map(item => {
                    return (
                        <div className='root' key={item.id}>
                            <h1>{item.name}</h1>
                            <span style={{color: 'red'}}>{item.email}</span><br />
                            <a href={item.website}>click</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact