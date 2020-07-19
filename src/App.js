import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Bookmarks from "./components/pages/Bookmarks/Bookmarks";
import Messages from "./components/pages/Messages/Messages";
import ChatRoom from "./components/pages/ChatRoom/ChatRoom";
import Profile from "./components/pages/Profile/Profile";
import ProfileEdit from "./components/pages/ProfileEdit/ProfileEdit";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Tweet from "./components/pages/Tweet/Tweet";
import AppRoute from "./components/layout/AppRoute/AppRoute";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout/AuthLayout";
import Alert from "./components/components/Alert/Alert";
import store from "./redux";
import "./App.scss";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app">
                    <Alert />
                    <Switch>
                        <AppRoute
                            path="/"
                            exact
                            component={Home}
                            layout={MainLayout}
                        />
                        <AppRoute
                            path="/register"
                            exact
                            component={Register}
                            isPrivate={false}
                            layout={AuthLayout}
                        />
                        <AppRoute
                            path="/login"
                            exact
                            component={Login}
                            isPrivate={false}
                            layout={AuthLayout}
                        />
                        <AppRoute
                            path="/bookmarks"
                            exact
                            component={Bookmarks}
                            layout={MainLayout}
                        />
                        <AppRoute path="/messages" exact component={Messages} layout={MainLayout} />
                        <AppRoute path="/messages/:userOneId/:userTwoId" exact component={ChatRoom} layout={MainLayout} />
                        <AppRoute path="/profile/edit" exact component={ProfileEdit} layout={MainLayout} />
                        <AppRoute path="/profile/:userName" component={Profile} layout={MainLayout} />
                        <AppRoute path="/:userName/status/:id" component={Tweet} layout={MainLayout} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
