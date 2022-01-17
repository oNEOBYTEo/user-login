import { FaBirthdayCake } from "react-icons/fa";

const UserList = ({getInfo, deleteUser, setSelectedUser}) => {

    return (  
        <ul>
            {
                getInfo.map( (res) => (
                    <li className="user-container" key={res.id}>
                        <p className="user-item">Name: {res.first_name} {res.last_name}</p>
                        <p className="user-item">Email: {res.email}</p>
                        <p className="user-item"><i><FaBirthdayCake /></i>{res.birthday}</p>
                        <div>
                            <button  className="user-item" onClick={() => setSelectedUser(res)}>Edit</button>
                            <button  className="user-item" onClick={() => deleteUser(res.id)}>Delete</button>
                        </div>
                    </li>
                )  )
            }
        </ul>
    );
}
 
export default UserList;