import { compose,  applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';



const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action)
    }

    next(action)
}
const middleWares = [logger]

const composeEnhansers = compose(applyMiddleware(...middleWares))

//root reducer

export const store = createStore(rootReducer, undefined, composeEnhansers)