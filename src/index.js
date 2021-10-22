import React from "react";
import ReactDOM from "react-dom";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";

ReactDOM.render(
    <div>
        <FriendMain />
        <TimelineMain />
    </div>, 
    document.getElementById("root")
)