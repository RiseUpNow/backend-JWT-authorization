import './App.css';
import React, {useEffect} from 'react';
import Contacts from "./Components/Contacts/Contacts";
import Entrance from "./Components/Entrance/Entrance";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App(props) {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.checkAuth()
        }
    }, [])
    if (!props.data.reducer_authorization.isLoading) {
        return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={props.data.reducer_authorization.isAuth ?
                            <Contacts data={props.data.reducer_contacts} logout={props.logout}
                                      manipulate={props.manipulate}/> : <Navigate replace to="/entrance"/>}/>
                        <Route path='/entrance'
                               element={props.data.reducer_authorization.isAuth ? <Navigate replace to="/contacts"/> :
                                   <Entrance login={props.login}/>}/>
                        <Route path='/contacts' element={props.data.reducer_authorization.isAuth ?
                            <Contacts data={props.data.reducer_contacts} logout={props.logout}
                                      manipulate={props.manipulate}/> : <Navigate replace to="/entrance"/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
    else{
        return (<div>Loading...</div>)
    }
}

export default App;
