import { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Detailed from './components/Detailed/Detailed';

const App: FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Router>
        <Header />
        <Switch>
          <Route path='/detailed'>
            <Detailed />
          </Route>
          <Route exact path='/'>
            <Summary />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
