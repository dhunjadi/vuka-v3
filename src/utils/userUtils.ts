import {User, StudentRole, UserRole, AdminRole} from '../data/userList';

export const isStudent = (selectedUser: User<UserRole>): selectedUser is User<StudentRole> => {
    return selectedUser.role.type === 'Student';
};

export const isAdmin = (selectedUser: User<UserRole>): selectedUser is User<AdminRole> => {
    return selectedUser.role.type === 'Admin';
};
