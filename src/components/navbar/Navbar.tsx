import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {StoreState} from '../../store/reducers/rootReducer';
import logo from '../../assets/logo.png';
import {userLogoutAction} from '../../store/actions/userActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import {navbarList} from './navbarList';

const Navbar = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [navbarIsVisible, setNavbarIsVisible] = useState<boolean>(true);
    const [activeID, setActiveID] = useState(navbarList[0].id);

    const handleBurgerMenuClick = (): void => {
        setNavbarIsVisible(!navbarIsVisible);
    };

    return (
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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                navigate(`${item.url}`);
                                setActiveID(item.id);
                                if (e.currentTarget.className.includes('logout')) dispatch(userLogoutAction());
                            }}
                        />
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
