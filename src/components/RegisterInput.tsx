import useStringInput from '../hooks/hooks.ts'

export default function RegisterInput({onRegister}: {onRegister: ({name, email, password}: {name: string, email: string, password: string}) => void}) {
    const [name, setName] = useStringInput()
    const [email, setEmail] = useStringInput()
    const [password, setPassword] = useStringInput()
    const [confirmPassword, setConfirmPassword] = useStringInput()
    const onSubmitHandler = (event: {preventDefault: () => void}) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        onRegister({name: name as string, email: email as string, password: password as string})
    }
    return (
        <div className={'input-register'}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor={'name'}>Name</label>
                <input type={'text'} name={'name'} placeholder={'Name'} value={name as string} onChange={setName as (event: {target: {value: string}}) => void} />
                <label htmlFor={'email'}>Email</label>
                <input type={'email'} name={'email'} placeholder={'Email'} value={email as string} onChange={setEmail as (event: {target: {value: string}}) => void} />
                <label htmlFor={'password'}>Password</label>
                <input type={'password'} name={'password'} placeholder={'Password'} value={password as string} onChange={setPassword as (event: {target: {value: string}}) => void} />
                <label htmlFor={'confirmPassword'}>Confirm Password</label>
                <input type={'password'} name={'password'} placeholder={'Confirm Password'} value={confirmPassword as string} onChange={setConfirmPassword as  (event: {target: {value: string}}) => void} />
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
}