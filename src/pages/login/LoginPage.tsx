import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';
import userList, {User, UserRole} from '../../data/userList';
import {userLoginAction} from '../../store/actions/userActions';
import {useFormik} from 'formik';
import * as Yup from 'yup';

interface ILoginForm {
    email: string;
    password: string;
}

const LoginPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik<ILoginForm>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: () => {
            const found = userList.find(
                (user: User<UserRole>) => user.email === formik.values.email && user.password === formik.values.password
            );

            if (!found) {
                setShowWrongCredentialsError(true);

                setTimeout(() => {
                    setShowWrongCredentialsError(false);
                }, 3000);
            }

            if (found) {
                dispatch(userLoginAction(found));
                navigate('/news');
            }

            formik.resetForm();
        },
    });

    const [showWrongCredentialsError, setShowWrongCredentialsError] = useState(false);
    const isDisabled = !formik.isValid;

    return (
        <div className="p-login">
            <div className="p-login__logo">
                <img src={logo} alt="logo" />
            </div>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" placeholder="example@vuka.hr" id="email" {...formik.getFieldProps('email')} autoFocus />
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

                <input type="password" placeholder="Password" id="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}

                {showWrongCredentialsError && <p>Incorrect Email or password</p>}

                <button className={`btn btn--primary ${isDisabled && 'is-disabled'}`} type="submit" disabled={isDisabled}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
