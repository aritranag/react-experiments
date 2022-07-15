import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/">
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
