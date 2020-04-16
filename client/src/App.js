import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch,HashRouter } from 'react-router-dom';
import Home from './home/home';
import World from './world/world';
import Article from "./article/article";
import Header from "./common/Header";
import NewsItem from "./common/NewsItem";
import NewsList from "./common/NewsList";
import Favorites from './favorite/Favorite'
import Search from "./search/Search";
import AwesomeComponent from "./common/Loading";
// 705004a3-c586-45b5-99da-72b373e6f62d
// "id": "technology/2020/mar/27/decorate-apartments-virtual-homes-new-popularity-millennials"
// sport/2020/mar/27/talking-horses-how-safe-is-money-in-your-online-betting-account

function App() {
  if(localStorage.getItem("favorite") === null)  localStorage.setObject("favorite", {});
  if(localStorage.getItem("source") === null) {
    localStorage.setItem("source", "guardian");
  }
  return (
    <main>

        {/*<AwesomeComponent></AwesomeComponent>*/}
        {/*<HashRouter basename={"/#"}>*/}
      <Switch>
        <Route path='/' component={NewsList} exact/>
        <Route path='/world' component={NewsList} />
        <Route path='/sports' component={NewsList} />
        <Route path='/politics' component={NewsList} />
        <Route path='/business' component={NewsList} />
        <Route path='/technology' component={NewsList} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/article" component={Article} />
        <Route path="/search" component={Search} />
      </Switch>
        {/*</HashRouter>*/}
        <div className="news-list">

        </div>
    </main>
  );
}

export default App;
