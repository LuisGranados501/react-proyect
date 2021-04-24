import axios from 'axios';

const AUTH_TOKEN = 'luis123';
const APPLICATION_JSON = 'application/json;charset=UTF-8';

axios.defaults.headers.common['Token'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = APPLICATION_JSON;

const API_URL = axios.create({
    baseURL: 'http://localhost:3005/'
});

export function getContacts(){
    console.log(API_URL.baseURL);
    return API_URL.get('contacts/', {});
}

export function selectContact(id){
    return API_URL.get(`contacts/${id}`, {});
}

export function deleteContact(id){
    return API_URL.delete(`contacts/${id}`, {});
}

export function saveContact(contact){
    return API_URL.post('contacts/', { contact });
}

export function updateContact(contact){
    return API_URL.put('contacts/', { contact });
}


