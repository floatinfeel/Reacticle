import './App.css';
import Navbar from './components/Navbar'
import ArticleProvider from "./context/article/articleProvider";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'

function App() {
  return (
    <ArticleProvider>
      <div className="App">
       <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:articleId' component={Article}/>
        </Switch>
       </Router>
      </div>
    </ArticleProvider>
  );
}

export default App;
