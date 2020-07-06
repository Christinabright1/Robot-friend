import React from "react";
import "./styles.css";
import { CardList } from "./component/card-list/card-list.component";
import { Searchbox } from "./searchbar/search-bar.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      searchField: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ profiles: users }));
  }

  render() {
    const { profiles, searchField } = this.state;
    const filteredProfile = profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <Searchbox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList profiles={filteredProfile} />
      </div>
    );
  }
}

export default App;
