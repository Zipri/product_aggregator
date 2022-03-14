import React from 'react';
import {connect} from "react-redux";
import {getAuth} from "firebase/auth";

import {removeUser} from "../../redux/auth-reducer";

;


const Home = (props) => {
    const auth = getAuth()
    const handleOut = () => {
        auth.signOut().then(props.removeUser())
    }

    return <div>
        <h1>Добро пожаловать в Product Aggregator</h1>
        <button onClick={handleOut}>
            выйти
        </button>
    </div>
};

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {removeUser})(Home);