import RegisterInput from '../components/RegisterInput'
import {Link, useNavigate} from 'react-router-dom'
import {register} from '../utils/data.ts'

export default function RegisterPage() {
    const navigate = useNavigate()
    async function onRegisterHandler({name, email, password}: {name: string, email: string, password: string}) {
        const {error} = await register({name, email, password})
        if (!error) navigate('/')
    }

    return (
        <section className={'register-page'}>
            <h2>Fill the form to register an account</h2>
            <RegisterInput onRegister={onRegisterHandler} />
            <p>Already have an account? <Link to={'/'}>Login Here</Link></p>
        </section>
    )
}