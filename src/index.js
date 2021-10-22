import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./common/store";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";

ReactDOM.render(
    // Provider 컴포넌트는 전달받은 스토어의 subscribe 메서드를 호출해서
    // 액션 처리가 끝날 때마다 알림을 받고, 컨텍스트 API를 사용해서 하위 컴포넌트로
    // 리덕스의 상태값을 전달해준다.
    <Provider store={store}>
        <div>
            <FriendMain ageLimit={30}/>
            <FriendMain ageLimit={15}/>
            <TimelineMain />
        </div>
    </Provider>, 
    document.getElementById("root")
)