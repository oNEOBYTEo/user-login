import AxiosRequest from "./components/AxiosRequest";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import {useState} from 'react';


function App() {

  const [ selectedUser, setSelectedUser ] = useState([])

  const [ getInfo, addUser,  updateUser, deleteUser ] = AxiosRequest()

  return (
    <div className="App">
      <UserForm addUser={addUser}  selectedUser={selectedUser} updateUser={updateUser}  setSelectedUser={setSelectedUser} />
      <UsersList getInfo={getInfo} deleteUser={deleteUser} setSelectedUser={setSelectedUser}/>
    </div>
  );
}

export default App;
