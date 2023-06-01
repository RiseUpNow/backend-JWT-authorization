import React, {useState} from 'react';
import css from './Entrance.module.css';

const Entrance = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const manipulate = (e) => {
        e.preventDefault();
        let currentManipulate = {
            email: email,
            password: password
        }
        props.login(currentManipulate)
    }
    return(
        <div>
            <h1>Authorization</h1>
            <form onSubmit={manipulate} className={css.form}>
                <input onChange={e => setEmail(e.target.value)} type="text" className={css.input} value={email} placeholder="email"/>
                <input onChange={e => setPassword(e.target.value)} type="password" className={css.input} value={password} placeholder="password"/>
                <input type="submit" className={css.input} value="Sign In"/>
            </form>
        </div>
    )
}
export default Entrance