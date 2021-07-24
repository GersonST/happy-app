import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/app" component={OrphanagesMap} />
    </BrowserRouter>
  );
}

export default Routes;
