import { Route, Switch } from "react-router-dom";

import AppStyled from "./App.styles";
import Header from "./components/Header/Header";
import Markets from "./components/Markets/Markets";
import Exchanges from "./components/Exchanges/Exchanges";
import ItemDetailed from "./components/ItemDetailed/ItemDetailed";


const App = () => {

  return (
    <AppStyled>
      <Header />
      
      <Switch>
        <Route path='/' exact render={() => <h2>Choose Markets or Exchanges</h2>}/>
        <Route path='/markets/:baseId' exact component={ItemDetailed}/>
        <Route path='/markets' component={Markets}/>
        <Route path='/exchanges' component={Exchanges}/>
      </Switch>
    </AppStyled>
  );
}

export default App;
