import React, {useState, useRef, useEffect} from 'react';
import logo from '../assets/logo.png';

const LoginPage = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    if (showError && email.length === 0) {
        setShowError(false);
    }

    return (
        <div className="p-login">
            <div className="p-login__logo">
                <img src={logo} alt="logo" />
            </div>
            <form>
                <input ref={inputRef} type="text" placeholder="example@vuka.hr" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {showError && <p>Incorrect Email or password</p>}
                <button className="btn btn--primary" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
