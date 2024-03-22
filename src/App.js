import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ThemeContext from "./ThemeContext";

import "./App.css";
import About from "./components/About";

class App extends Component {
  state = { isDarkTheme: false };

  onToggleTheme = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  render() {
    const { isDarkTheme } = this.state;
    console.log(isDarkTheme);
    const appClassName = isDarkTheme ? "dark app" : "light app";
    return (
      <ThemeContext.Provider
        value={{ isDarkTheme, toggleTheme: this.onToggleTheme }}
      >
        <div className={appClassName}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
