import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ user }) => {

	// Controlled inputs

	// Gerenciamento de dados
	const [name, setName] = useState(user ? user.name : null)
	const [email, setEmail] = useState(user ? user.email : null)

	const [bio, setBio] = useState(user ? user.bio : null)

	const [role, setRole] = useState(user ? user.role : null)

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('enviando o form')
		console.log(name, email, bio, role)

		// Limpar forms
		setName('')
		setEmail('')
		setBio('')
	}

	return (
		<div>
			{/* Envio de form */}
			{/* Criação de form */}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome:</label>
					<input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
				</div>

				{/* Label envolvendo input (ABORDAGEM SUGERIDA PELO REACT) */}
				<label>
					{/* Simplificação de anipulação de state */}
					<span>E-mail</span>
					<input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
				</label>

				{/* Textarea */}
				<label>
					<span>Bio: </span>
					<textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
				</label>

				{/* Select */}
				<label>
					<span>Função do sistema</span>
					<select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
						<option value="user">Usuário</option>
						<option value="editor">Editor</option>
						<option value="admin">Admin</option>
					</select>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	)
}

export default MyForm
