import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import Admin from '../Components/Admin'
import User from '../Components/User'

export default function Routes() {
    return (
        <>
            <Router>
                <Switch>                   
                    <Route path="/" render={(props) => <LandingPage {...props} />} />
                    <Route path="/admin" render={(props) => <Admin {...props} />} />
                    <Route path="/user" render={(props) => <User {...props} />} />
                    <Route>
                        <div style={{ color: "red" }}>Error 404</div>
                        <Link to="/">GO back Home</Link>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}