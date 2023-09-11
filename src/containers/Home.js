/*
Redux works by taking the state variables we want and mapping them to props in our component. 
So if we want to connect Home to the value of cars from our state.js file, the value will be 
mapped to a prop that we specify (likely as cars) and then we will access it in the component 
by calling props.cars. 

Redux provides a function for doing that called mapStateToProps and we connect it to our 
component using the connect function.
*/

import { connect } from "react-redux";
// import the visual React component "Home"
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
// state.cars is what exists in our state.js file
// now cars available to our "dumb" component, <Home /> as props.cars

// wrap the visual React Component "Home" with the Redux Container Component Home
// note currying syntax - also called partial application
export default connect(mapStateToProps)(Home);
