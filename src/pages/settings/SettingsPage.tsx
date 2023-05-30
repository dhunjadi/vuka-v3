import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import {StoreState} from '../../store/reducers/rootReducer';
import {useSelector} from 'react-redux';

const SettingsPage: React.FC = () => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    return (
        <>
            <Navbar />
            <div className="p-settings">
                <div className="p-settings__userInfo">
                    <div className="p-settings__userInfo_img">
                        <img src={loggedInUser.imgSrc} alt="user image" />
                    </div>
                    <div className="p-settings__userInfo_name">
                        <span>
                            {loggedInUser.fName} {loggedInUser.lName}
                        </span>
                    </div>
                </div>
                <div className="p-settings__section">
                    <div className="p-settings__section_subtitle">
                        <h3>Status</h3>
                    </div>
                    <div className="p-settings__section_pair">
                        <span>Role</span> <span>{loggedInUser.role}</span>
                    </div>
                    {/* NAPRAVIT POSEBNO ZA STUDENTE, PROFESORE I ADMINA*/}
                    {/* <div className="p-settings__section_pair">
                        <span>Type</span> <span>{loggedInUser.studyType}</span>
                    </div>
                    <div className="p-settings__section_pair">
                        <span>Study Program:</span> <span>{loggedInUser.studyProgram}</span> 
                    </div>*/}
                </div>

                <div className="p-settings__section">
                    <div className="p-settings__section_subtitle">
                        <h3>Contact</h3>
                    </div>
                    <div className="p-settings__section_pair">
                        <span>Email</span> <span>{loggedInUser.email}</span>
                    </div>
                    <div className="p-settings__section_pair">
                        <span>Password</span> <span>**********</span>
                    </div>
                </div>

                <div className="p-settings__section">
                    <div className="p-settings__section_subtitle">
                        <h3>Classes</h3>
                    </div>
                </div>

                <div className="p-settings__section">
                    <div className="p-settings__section_subtitle">
                        <h3>Books</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
