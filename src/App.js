import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'
import Students from './components/Students';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/form/:id" component={CourseForm}/>
      <Route exact path="/">
       <  ProductList/>
      </Route>
      <Route exact path="/courses">
          <CourseList/>
      </Route>
      <Route exact path="/student">
          <Students/>
      </Route>
      </Switch>
    </Router>
    </>

  );
}

export default App;
