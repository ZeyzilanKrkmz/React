//import React from 'react'

import { useGetUsersQuery ,useGetTodosQuery, useGetUserQuery } from "./api";

const App = () => {

  const {data}=useGetUsersQuery();
  const {data:todos}=useGetTodosQuery();
  const{data:user}=useGetUserQuery(8);
  console.log(todos);
  console.log(user);
  return (
  <div>
    <h1>Users</h1>
   <ul> <li>{data?.map((user)=><li>{user.name}</li>)}</li></ul>
   <h1>Todo</h1>
   <ul><li>{todos?.map((todo)=><li>{todo.title}</li>)}</li></ul>
   </div>
  );

};

export default App;