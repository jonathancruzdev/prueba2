import '../App.css';
import { useState } from 'react';

const Register  = () => {

    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password);

        try {
            const endPoint = 'http://127.0.0.1:3000/users';
            const response = await fetch(endPoint,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( formData  )
            });

            const json = await response.json();
            // Agregar lógica para cuando el usuario se registra, por ejemplo:
            /*
                1. Redirigirlo al login
                2. Loguerlo
                3. Notificar el registro correctos
            */
            console.log(json);

        } catch (error) {
            console.error(error)
        }


    }

    return (
        <div className='page'>
            <h2> Registrame</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input 
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    name='name' 
                    id='name' 
                />

                <label htmlFor="email">Email</label>
                <input 
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    name='email' 
                    id='email' 
                />


                <label htmlFor="password">Contraseña</label>
                <input 
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    name='password' 
                    id='password' 
                />

                <button type='submit'> Registrarme</button>
            </form>

        </div>
    )
}

export default Register