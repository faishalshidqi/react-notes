import useStringInput from '../hooks/hooks.ts'

export default function LoginInput({onLogin}: {onLogin: ({email, password}: {email: string, password: string}) => void}) {
    const [email, setEmail] = useStringInput()
    const [password, setPassword] = useStringInput()
    const onSubmitHandler = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        onLogin({email: email as string, password: password as string})
    }
    return (
        <div className={'input-login'}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor={'email'}>Email</label>
                <input type={'email'} name={'email'} placeholder={'Email'} value={email as string} onChange={setEmail as (event: {target: {value: string}}) => void} />
                <label htmlFor={'password'}>Password</label>
                <input type={'password'} name={'password'} placeholder={'Password'} value={password as string} onChange={setPassword as (event: {target: {value: string}}) => void} />
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
}