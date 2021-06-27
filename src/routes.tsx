import {Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home/Home';
import { HomeLetMeAsk } from './pages/HomeLetMeAsk/HomeLetMeAsk';
import { NewRoom } from './pages/NewRoom/NewRoom';
import { Room } from './pages/Room/Room';
import {AdminRoom} from './pages/Admin/Admin'

export function Routes(){
  return(
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home} />
            <Route path="/letmeask" exact component={HomeLetMeAsk} />
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </AuthContextProvider>
  )
}