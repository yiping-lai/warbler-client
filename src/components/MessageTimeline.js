import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeLine=props=>{
	return (
		<div className="row">
			<UserAside 
				profileImageurl={props.profileImageurl}
				username={props.username}
			/>
			<MessageList/>
		</div>
	)
};

export default MessageTimeLine;
