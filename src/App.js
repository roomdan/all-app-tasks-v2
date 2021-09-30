import { Suspense } from "react";
import { lazy } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LogIn from "./context/logs/LogSesion";


function App() {

  const Register = lazy(()=>import("./views/Log-In-Form/register"));
  const Home = lazy(()=>import("./views/home/Home"))

  return (
     <Router>
       <LogIn>
         <Switch>
           <Route exact path='/'>
             <Suspense fallback={<p>cargando</p>}>
                <Register/>
             </Suspense>
           </Route>
           <Route exact path='/home'>
           <Suspense fallback={<p>cargando</p>}>
                <Home/>
             </Suspense>
           </Route>
         </Switch>
       </LogIn>
     </Router>
  );
}

export default App;
