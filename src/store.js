import { createStore } from 'redux';

const user = localStorage.getItem('user')

const initalState = {
    user: user ? JSON.parse(user) : null,
    profileImage: '',
    modal: false,
    modalFlag: false,
    userCount: 0, 
    customerTelephoneTicket: false
}


function appState(state = initalState, action) {
    
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_SHOW':
            return {
                ...state,
                modal: action.payload
            }
        case 'SET_SHOW_FLAG':
            return {
                ...state,
                modalFlag: action.payload
            };
        case 'CLEAR_USER':
            return {
                ...state,
                user: null
            };
        case 'SET_USER_COUNT':
           return{
                 ...state,
                userCount: action.payload
                }

        case 'TELEPHONETICKET':
             console.log('dfdfdfdfdffd');
             
          return{
                  ...state,
                  customerTelephoneTicket: !state.customerTelephoneTicket
                  
                }
               

    }
    return state;
}

const store = createStore(appState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;