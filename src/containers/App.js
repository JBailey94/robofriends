import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import 'tachyons';
import ErrorBoundry from '../components/ErrorBoundry';

/*
    Any component that has state uses the class syntax so they
    can use the contructor function to create this.state and
    this.state is what changes in an application.

    The virtual DOM is just a Javascript object that collects this
    entire state and React uses this state to render and pass them
    down as props to these components.

    Components are just pure functions that can just render those props.
    The App is the only thing that can change the state. Components are
    pure functions that just render props.

    Components that have state are considered 'Smart Components'

*/
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // if component mounts successfully, setup the robot array field
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // go fetch the user data from jsonplace holder
            .then(response => response.json())
            .then(users => this.setState({ robots: users})); 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>                      
                </Scroll>                             
            </div>       
        );
    }        
}

export default App;