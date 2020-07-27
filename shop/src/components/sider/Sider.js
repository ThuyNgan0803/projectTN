import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./style.css"
const routes = [
  {
    path: "/Home/All",
    exact: true,
    sidebar: () => <div>All!</div>,
    main: () => <h2>All</h2>
  },
  {
    path: "/Home/Adidas",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Adidas</h2>
  },
  {
    path: "/Home/Converse",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Converse</h2>
  },
  {
    path: "/Home/Nike",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Nike</h2>
  },
  {
    path: "/Home/Puma",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Puma</h2>
  },
  {
    path: "/Home/Vans",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Vans</h2>
  }
];

export default class Sider extends Component {
  render() {
    return (
      <div>
        <Router>
      <div style={{ display: "flex" }}>
        <div className="slider">
          <ul className="list-slider">
            <li>
              <Link className="slider-item" to="/Home/All">All</Link>
            </li>
            <li>
              <Link className="slider-item"  to="/Home/Adidas">Adidas</Link>
            </li>
            <li>
              <Link className="slider-item"  to="/Home/Converse">Converse</Link>
            </li>
            <li>
              <Link className="slider-item"  to="/Home/Nike">Nike</Link>
            </li>
            <li>
              <Link className="slider-item"  to="/Home/Puma">Puma</Link>
            </li>
            <li>
              <Link className="slider-item"  to="/Home/Vans">Vans</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
             <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
      </div>
    )
  }
}
