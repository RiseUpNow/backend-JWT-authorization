import {combineReducers, createStore} from 'redux';
import initialState from "./initialState";
import reducer_contacts from "./reducers/contacts";
import reducer_authorization from "./reducers/authorization";
import addContact from "./actionCreators/addContact";
import editContact from "./actionCreators/editContact";
import deleteContact from "./actionCreators/deleteContact";
import SignIn from "./actionCreators/SignIn";
import SignOut from "./actionCreators/SignOut";
import check_Auth from "./actionCreators/checkAuth";
import check_Loading from "./actionCreators/checkLoading";
import {API_URL} from "../http";
import axios from "axios";
import AuthService from "../services/AuthService";

const reducers = combineReducers({
    reducer_authorization,
    reducer_contacts
})
const store = createStore(reducers);
//Взаимодействие с контактами происходит в состоянии на клиенте
export const manipulate = (currentManipulate) => {
    store.getState().reducer_contacts.buttonState = currentManipulate.typeSubmit; //Захардкодил: Тут я нарушил принцип redux 2 - состояние только для чтения
    switch (currentManipulate.typeSubmit){
        case "Add": store.dispatch(addContact(currentManipulate.contact));return store.getState()
        case "Edit": store.dispatch(editContact(currentManipulate.contact));return store.getState()
        case "Remove": store.dispatch(deleteContact(currentManipulate.contact));return store.getState()
    }
}

export const login = async (currentManipulate) => {
    //Приняли в объекте currentManipulate email и пароль
    try{
        const response = await AuthService.login(currentManipulate.email, currentManipulate.password);
        console.log(response)
        localStorage.setItem('token', response.data.accessToken);
        store.dispatch(SignIn(response.data.user));
    }
    catch (e){
        console.log(e.response?.data?.message);
    }
}

export const logout = async () => {
    try{
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        store.dispatch(SignOut());
    }
    catch (e){
        console.log(e.response?.data?.message);
    }
}

export const checkAuth = async () => {
    store.dispatch(check_Loading(true));
    try{
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        store.dispatch(check_Auth(response.data.user));
    }
    catch (e){
        console.log(e.response?.data?.message);
    }
    finally {
        store.dispatch(check_Loading(false));
    }
}


export default store;