// import React, { useState, useEffect } from 'react';
// //  import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom'

// const Main = () => {
//     const [users, setUsers] = useState([]) // array destructuring going to happen
//     //array of users is the piece of state we are altering
//     //setUsers is the function we call in order to update that users state which is set to an empty array
//     //  useEffect(()=>{},[]) //has a callback function and a secondary argument which is a dependency for when this effect should run
//     // with the brackets[] you are telling the function when it needs to re-render/re-run because it is signifying something has changed

//     //can't run an async/await within the useEffect so call it outside
//     const getUsers = async () => {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let users = await res.json();
//         setUsers(users) //passing in local users variable to the setUsers function which should update the state and trigger a re-render
//     }

//     useEffect(() => {
//         getUsers();
//     }, []);

//     return (
//         <div>
//             <h1 className="text-primary">Hello World</h1>
//             {users.map(user => (
//                 <li key={user.id} className="list-group-item">{user.name}</li>
//             ))}
//         </div>

//     )
// }

// export default App