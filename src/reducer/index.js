import { combineReducers } from 'redux'
import postReducers from './postsReducers'
import userReducers from './userReducers'

export default combineReducers({
    posts: postReducers,
    user: userReducers
})
