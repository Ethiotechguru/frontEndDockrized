import UserForm from './components/UserForm';
import './App.css';
import {useState} from 'react';

function App() {

  const [isLoading,setIsLoading] = useState(false)

  async function fetchApi() {
    setIsLoading(true)
    const data = await fetch("http://localhost/api");
    let d = await data.json();
    console.log(d)
  }
  const onAddUser = async (val)=>{
    console.log(val)
    try{
      const response = await fetch("http://localhost/register", {
			method: "POST",
			body: JSON.stringify({
				username: val,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message || "Deleting the goal failed.");
    }
    setIsLoading(false)
  }catch(err){
    console.log(err)
  }
}
  return (
		<div className="App">
			<header className="App-header">
				<h2>Hello Africa</h2>
			</header>
			<UserForm onAddUser ={onAddUser}/>
			<button onClick={fetchApi}>Get Data</button>

      {isLoading?<h1>Loading</h1>:''}
		</div>
  );
}

export default App;
