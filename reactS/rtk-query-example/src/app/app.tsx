//import { UserMinusIcon } from "@heroicons/react/24/outline";
import { useAddUserMutation, useGetUsersQuery } from "./api";



const App = () => {

  const {data:users}=useGetUsersQuery();
  const [addUser]=useAddUserMutation();

  const handleAddUser=()=>{
  
    addUser("Tavuk");
    }

  
  return (
    <div>
      <button onClick={handleAddUser}>Kullanıcı Ekle</button>
      <ul>
        {users?.map((user)=><li>{user.name}</li>)}
        </ul>
    </div>
  );
};

export default App;