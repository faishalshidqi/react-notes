import {login} from '../utils/data.ts'
import {Link} from 'react-router-dom'
import LoginInput from '../components/LoginInput'

export default function LoginPage({onSuccessLogin}: {onSuccessLogin: ({accessToken}: {accessToken: string}) => void}) {
    async function onLoginHandler({email, password}: {email: string, password: string}) {
        const {error, data} = await login({email, password})
        if (!error) onSuccessLogin(data)
    }
    return (
        <section className={'login-page'}>
            <h2>You must login first to enter this app!</h2>
            <LoginInput onLogin={onLoginHandler} />
            <p>Doesn't have an account yet? <Link to={'/register'}>Register Here</Link></p>
        </section>
    )
}