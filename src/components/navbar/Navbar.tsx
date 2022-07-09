import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {StoreState} from '../../store/reducers/rootReducer';
import logo from '../../assets/logo.png';
import {userLogoutAction} from '../../store/actions/userActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import {navbarList} from './navbarList';
import Modal from '../Modal';

const Navbar = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);

    const [navbarIsVisible, setNavbarIsVisible] = useState<boolean>(true);
    const [activeID, setActiveID] = useState(navbarList[0].id);
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBurgerMenuClick = (): void => {
        setNavbarIsVisible(!navbarIsVisible);
    };

    const handleLogout = (): void => {
        navigate('/');
        setActiveID('7');
        dispatch(userLogoutAction());
    };

    return (
        <>
            <nav className="c-navbar">
                <div className="c-navbar__logo">
                    <img src={logo} alt="logo icon" />
                    {loggedInUser.fName}
                </div>
                <div className="c-navbar__burgerMenu" onClick={handleBurgerMenuClick}>
                    {navbarIsVisible ? (
                        <FontAwesomeIcon icon={faTimes} color="white" size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} color="white" size="lg" />
                    )}
                </div>
                <div className={`c-navbar__icons ${navbarIsVisible && 'is-open'}`}>
                    {navbarList.map((item) => {
                        return (
                            <button
                                className={`c-navbar__icons_${item.title} ${item.id === activeID && `is-active`} cursor-p`}
                                key={item.id}
                                onClick={() => setIsOpen(true)}
                            />
                        );
                    })}
                </div>
            </nav>
            <Modal
                isOpen={isOpen}
                onCancel={() => setIsOpen(false)}
                onConfirm={() => handleLogout}
                header="Log out?"
                showConfirm
                showCancel
                confirmText="Confirm"
                cancelText="Cancel"
            >
                Are u sure you want to log out?
            </Modal>
        </>
    );
};

export default Navbar;
