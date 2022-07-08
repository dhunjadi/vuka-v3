import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import userList, {IUser} from '../data/userList';
import {userLoginAction} from '../store/actions/userActions';

const LoginPage = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        setShowError(false);
    }, [email, password]);

    if (showError && email.length === 0) {
        setShowError(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const found = userList.find((user: IUser) => user.email === email && user.password === password);
        if (!found) setShowError(true);

        if (found) {
            dispatch(userLoginAction(found));
            navigate('/home');
        }
    };

    return (
        <div className="p-login">
            <div className="p-login__logo">
                <img src={logo} alt="logo" />
            </div>
            <form onSubmit={handleSubmit}>
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
