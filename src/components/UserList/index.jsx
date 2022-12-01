import React from "react";
import useAPICall from "../../hooks/useAPICall";

const URL = 'https://jsonplaceholder.typicode.com/users';

const UserList = (props) => {
    const state = useAPICall(URL, 'GET');

    const showError = () => {
        return <p style={{ color: 'red' }}>Error while fetching users!</p>
    };

    const showLoadingScreen = () => {
        return <h2 style={{ color: 'yellow' }}>Loading...</h2>
    }

    const showUserInfo = (name, email, address) => {
        return (
            <div>
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h4>City: {address}</h4>
            </div>
        );
    }

    const renderUsers = () => {
        return state?.data.map((user) => {
            return (
                <li key={user.email} style={{ textAlign: 'left' }}>
                    {showUserInfo(user?.name, user?.email, user?.address?.city)}
                </li>
            );
        });
    }

    if (state?.isLoading) {
        return showLoadingScreen();
    }

    if (state?.isError) {
        return showError();
    }

    return (
        <ul>
            {renderUsers()}
        </ul>
    )
};

export default UserList;
