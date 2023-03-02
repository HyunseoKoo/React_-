/* redux의 rootReducer를 정의하세요 */

import { combineReducers } from 'redux';
import posts from './reducer1';

export const rootReducer = combineReducers({ posts });
