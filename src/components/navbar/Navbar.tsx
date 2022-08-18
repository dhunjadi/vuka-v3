import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import {StoreState} from '../../store/reducers/rootReducer';
import logo from '../../assets/logo.png';
import {userLogoutAction} from '../../store/actions/userActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import {navbarList} from './navbarList';
import Modal from '../Modal';

const Navbar = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);

    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [clickedBurgerMenu, setClickedBurgerMenu] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavbarOpacity = (): void => {
        if (window.scrollY > lastScrollY) setShowNavbar(false);
        if (window.scrollY < lastScrollY) setShowNavbar(true);

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleNavbarOpacity);
        return () => {
            window.removeEventListener('scroll', handleNavbarOpacity);
        };
    }, [lastScrollY]);

    const handleBurgerMenuClick = (): void => {
        setClickedBurgerMenu(!clickedBurgerMenu);
    };

    const handleLogout = (): void => {
        navigate('/');
        dispatch(userLogoutAction());
    };

    return (
        <>
            <nav className={`c-navbar ${showNavbar && 'is-visible'}`}>
                <div className="c-navbar__logo">
                    <img src={logo} alt="logo icon" />
                    {loggedInUser.fName}
                </div>
                <div className="c-navbar__burgerMenu" onClick={handleBurgerMenuClick}>
                    {clickedBurgerMenu ? (
                        <FontAwesomeIcon icon={faTimes} color="white" size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} color="white" size="lg" />
                    )}
                </div>
                <div className={`c-navbar__icons ${clickedBurgerMenu && 'is-open'}`}>
                    {navbarList.map((item) => {
                        return <NavLink key={item.id} to={item.url} className={`c-navbar__icons_${item.title}`} />;
                    })}
                    <a className="c-navbar__icons_logout cursor-p" onClick={() => setIsModalOpen(true)} />
                </div>
            </nav>
            <Modal
                isOpen={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onConfirm={handleLogout}
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
