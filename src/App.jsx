import {Router, Route, Switch} from './components/Router';
import {Home, Groups, PageNotFound, Messages, Join, Cookies, Rightt, AdminIndex, AdminRequest, AdminSettings, AdminContacts, AdminAgents, AboutUs, AdminProduct, Request} from './pages/Pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/groups" component={Groups}/>
        <Route path="/chat" component={Messages}/>
        <Route path="/join" component={Join}/>
        <Route path="/cookies" component={Cookies}/>
        <Route path="/rightt" component={Rightt}/>
        <Route path="/admin" component={AdminIndex}/>
        <Route path="/request" component={Request}/>
        <Route path="/adminrequest" component={AdminRequest}/>
        <Route path="/adminsettings" component={AdminSettings}/>
        <Route path="/admincontacts" component={AdminContacts}/>
        <Route path="/adminagents" component={AdminAgents}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/adminproduct" component={AdminProduct}/>
        <Route path="" component={PageNotFound}/>
      </Switch>
    </Router>
  )
}
export default App;
