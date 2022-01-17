import {useForm} from 'react-hook-form'
import {useEffect} from 'react'

const UserForm = ({ addUser, selectedUser, updateUser, setSelectedUser }) => {

    const { register, handleSubmit, reset } = useForm();

	const defaultValues = {email: "", password: "", first_name: "", birthday: "", last_name: ""}

	useEffect(() => {
		if(selectedUser.id){
			reset(selectedUser)
		}
	}, [selectedUser, reset,setSelectedUser])

    const submit = (data) => {
		if(selectedUser.first_name){
			updateUser(selectedUser.id, data)
			reset(defaultValues)
			setSelectedUser(defaultValues)
		}else{
			addUser(data)
			console.log(data)
			reset(defaultValues)
		}
	}

	const clear = (defaultValues) =>{
		reset(defaultValues)
		console.log(selectedUser)
		setSelectedUser(defaultValues)
	}
    return ( 
        <form onSubmit={handleSubmit(submit)} className="user-form" >
			<div className="div-form-container">
				
				<h1>New User</h1>
                <div className="input-container">
						<label htmlFor='first_name_input'>First Name</label>
						<input type='text' id='first_name_input' {...register("first_name")} />
				</div>
                <div className="input-container">
						<label htmlFor='last_name_input'>Last Name</label>
						<input type='text' id='last_name_input' {...register("last_name")} />
				</div>
				<div className="input-container">
						<label htmlFor='email_input'>Email</label>
						<input type='email' id='email_input' {...register("email")} />
				</div>
				<div className="input-container">
						<label htmlFor='password_input'>Password</label>
						<input type='password' id='password_input' {...register("password")} />
				</div>
				<div className="input-container">
						<label htmlFor='birthday_input'>Birthday</label>
						<input type='date' id='birthday_input' {...register("birthday")} />
				</div>
				<div className="buttons">
					<button type="submit">Submit</button>
					<button type="button" onClick={() => clear(defaultValues)}>Clear</button>
				</div>
				</div>
		</form>
     );
}
 
export default UserForm;