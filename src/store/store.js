import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./root-reducer";


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }
    console.log('Type: ',action.type);
    console.log('Payload: ',action.payload);
    console.log('currenState: ',store.getState());

    next(action);

    console.log('Next State: ', store.getState());
}

const middleWares = [loggerMiddleware];
const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancer);
