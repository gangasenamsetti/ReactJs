Installation

1.Install latest version of node (v24)
2. create a folder and go inside folder and open cmd
3.In cmd give npm create vite@latest (give project name and select JS) ->this will start the server
4.Then open that folder in vs and in cmd terminal start the server by "npm run dev" this will start the server

Need of Vite
*its purpose is to make frontend development faster and simpler.
*optimzes the code and runs the server fastly

*Function name must start with capitals
*In app.jsx file we can return only 1 value so if you wnat to acess multiple values put that in <div> tag or simply <>
*JavaScript expression inside JSX by wrapping it in curly braces { }



                                ***COMPONENETS***
*React uses components to build UIs. Components are independent and reusable bits of code.
*React components are like JavaScript functions, and return HTML.
Example:
#component.jsx
import React from "react";

function Fun(){
    return(
        <p>This is component one</p>
    )
}

#App.jsx
import { useState } from 'react'
import './App.css'
import Fun from './Components/component1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <p>Hello Ganga,Happy Learning</p>
    <Fun/>

    </div>
  )
}

export default App


                                              ***PROPS(PROPERTIES)***
*Props are arguments passed into React components.
*In React, *props (properties)* are used to pass data from one component to another, usually from **parent to child**
*Props make components reusable because the same component can display different data based on the values passed to it.
*props are immutable
*Pop drilling -> Passing props through multiple intermediate components.  App → Parent → Child → GrandChild
*If it is string we have to give it in "" and other expressions like int,bool we have give {} in App.jsx file

DESTRUCTING OF PROPS
*Instead of repeating props.something throughout your code, you can use JavaScript destructuring directly within the function signature. This makes components cleaner and much easier to read

EXample:
#components.jxs
let name="ganga";
function Fun(){
    return(
        <p>My name is {name},This is component one</p>
    )
}

#App.jsx
 <Fun/>

Example2 using props:
function Fun(props){
    return(
        <p>My name is {props.name} and age is {props.age},This is component one</p>
    )
}

#App.js
<Fun name="ganga" age={24}/> //If it is string we have to give it in "" and other expressions like int,bool we have give {} in App.jsx file

  
                                                          ***useState***
*useState() is a special function that allows you to create and manage data inside the component
*It allows component to store data,update data and manage inside the component
*It automatically rerenders the UI after a change
* we cannot update state value directly in react, inorder to change the state value we have to use setter function
* state should be declared above return() block
  
Example:
function SampleState(){
    const [sample,setSample]=useState("ganga"); 
    function Change(){
        //sample="sandeep";  // directly this cannot be updated so we have to use setter function
        setSample("sandeep");
    }
    return(
        <div>
        <h1>{sample}</h1>
        <button onClick={Change}>Click Me </button>
        </div>

    )
}

export default SampleState;



                                                      ***FORM HANDLING***
*In nrml HTML code, when we click on submit button,the page refreshes after submitting, inorder to avoid this we use state and we store data in state and manage functionalities like validations,processing etc
*React provides a way to manage form data through component state, leading to what are known as "controlled components."
* we  Create a function to handle the change event:
  const [name, setName] = useState("");

  function handleChange(e) {
  setName(e.target.value);
  }

  <input
  type="text" value={name} onChange={handleChange}/>

  Example:
  import React,{useState} from "react";

function Form(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [contact,setContact]=useState("");

    //This function prevents data from refreshing after submit button
    function NotRefresh(e){
        e.preventDefault();
        console.log(name,email,password,contact);
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return(
        <form onSubmit={NotRefresh}>
        <div>Name</div>
        <input type="text" value={name} onChange={handleChange}/>
        <div>Email</div>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <div>Password</div>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <div>Contact</div>
        <input type="number" value={contact} onChange={(e)=>setContact(e.target.value)}/><br/>
        <button type="submit">Submit</button>
        </form>

    )
}
export default Form;

  


  

