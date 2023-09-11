/*

Reducers have rules:
- all properties on state have a reducer
- all reducers get exported in the combineReducers object
- all reducers must return state, which CANNOT BE UNDEFINED

a reducer is just a function.
Take multiple things and reduce it to one thing

*/

import { combineReducers } from "redux";

/*

to know what arguments to supply to these functions, let's look at our state object:
{
  hello: "hello Redux",
  cars: ["Chevy"],
}

*/
// default parameters
const hello = (state = null) => state;
const cars = (state = []) => state;

export default combineReducers({ hello, cars });
