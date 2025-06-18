// import { useState } from "react";

// function FormStorage(){
//     const [user,setUser]=useState({
//     name:"Mrunay",
//     sname:"Katole",
//     mob:8459847402
// })
//     function setData(){
//         localStorage.setItem("user",JSON.stringify(user))
//     }
//     function getData(){
//      let newUser= JSON.parse(localStorage.getItem ("user"))
//      console.log(newUser)
//     }
//     return(
//         <>
//         <div id="form">
//         <h1>Local/Sessional Storage</h1>
//         <button onClick={()=>setData()}>Set-Data</button>
//         <button onClick={()=>getData()}>Get-Data</button>
//         </div>
//         </>
//     );
// }
// export default FormStorage;

import { useState } from "react";

function FormStorage(){
    const[user,setUser]=useState({
        name:"",
        sname:"",
        email:""
    })
    function handlechange(event){
        let {name,value}=event.target;
        setUser((prev)=>({...prev,[name]:value}));
    }
    function setData(){
        localStorage.setItem("user",JSON.stringify(user))
    }
    function getData(){
       let newUser= JSON.parse(localStorage.getItem("user")) 
       console.log(newUser)
    }
    function senddata(e){
        e.preventDefault();
        setUser({
            name:"",
            sname:"",
            email:""
        })
        console.log(setData())

    }
    function showData(){

    }
    return(
        <>
        <form onSubmit={senddata}>
            <input type="text" placeholder="Enter F-Name" name="name" value={user.name} onChange={handlechange}/>
        <input type="text" placeholder="Enter S-Name" name="sname" value={user.sname}  onChange={handlechange}/>
        <input type="text" placeholder="Enter Email-id" name="email" value={user.email} onChange={handlechange}/>
        <button type="submit">Save to LocalStorage</button>
        <button type="button" onClick={getData}>Load from LocalStorage</button>
        </form>
        <h1>Name:- {user.name}</h1>
        <h1>S-name:- {user.sname}</h1>
        <h1>Email-Id:- {user.email}</h1>
        </>

    );
}
export default FormStorage;