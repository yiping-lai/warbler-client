import React from 'react';
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/Authform";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main=props=>{
	const {authUser,errors, removeError, currentUser}=props;
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={props=><Homepage currentUser={currentUser} {...props}/>}></Route>
				<Route exact path="/signin" render={props=>{
						return (
							<AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Log in" heading="Welcome Back." {...props}/>
						)
					}}></Route>
				<Route exact path="/signup" render={props=>{
						return (
							<AuthForm removeError={removeError} errors={errors} onAuth={authUser} signUp='signup' buttonText="Sign me up!" heading="Join Warbler today." {...props}/>
						)
					}}></Route>
				<Route path="/users/:id/messages/new" component={withAuth(MessageForm)}/>
			</Switch>
		</div>
	)
}

function mapStateToProps(state){
	return {
		currentUser:state.currentUser,
		errors:state.errors
	};
}

// need to use withRouter so that AuthForm can use this.props.history to redirect
// don't need to add withAuth, MessageFrom to withRouter, beause it is not passed to the component rendered
export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));