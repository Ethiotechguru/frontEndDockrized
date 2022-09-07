import './form.css';
import {useState} from 'react';
function UserForm(props) {
	const [userName,setUserName] = useState('');
	const userNameHandler = (e)=>{
		let val = e.target.value;
		setUserName(val)
	}
	const submitHandler = (e)=>{
		e.preventDefault();
		props.onAddUser(userName);
		setUserName('')
	}
    return (
		<div>
			<div className="flex-container">
				<div className="container">
					<p className="lead">
						Enter your email to join <strong>{props.count}</strong>{" "}
						others on our waitlist. We are 100% not a cult.{" "}
					</p>
					<form
						onSubmit={submitHandler}
					>
						<div className="form_control">
							<input
								type="text"
								className="form"
								name="email"
								placeholder="Enter Your Email"
							/>
							<input
								type="text"
								className="form"
								name="username"
								placeholder="Enter Your Name"
								value={userName}
								onChange={userNameHandler}
							/>
							<button>Join Now</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}


export default UserForm;