import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import routes from "./routes";
import store from "./store";
import Main from "./layout/Main";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, index) => {
                            switch (route.layout) {
                                case "main":
                                    return (
                                        <Route key={index} exact path={route.path}>
                                            <Main>
                                                <route.component />
                                            </Main>
                                        </Route>
                                    );
                                case "auth":
                                    return (
                                        <Route key={index} exact path={route.path}>
                                            <Auth>
                                                <route.component />
                                            </Auth>
                                        </Route>
                                    );
                                default:
                                    <Redirect key={index} to="/" />
                            }
                            return route
                        })}
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
