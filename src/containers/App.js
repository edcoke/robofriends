import React, {Component} from "react";
import CardList from "../components/CardList";
import { connect } from 'react-redux';
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import {setSearchField, requestRobots} from "../actions";
import 'tachyons';

const mapStateToProps = state => ({searchField: state.searchRobots.searchField,
                                robots: state.requestRobots.robots,
                                isPending: state.requestRobots.isPending,
                                error: state.requestRobots.error });
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component {
    render() {
        const {searchField, onSearchChange, robots } = this.props;
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase( ).includes(searchField.toLowerCase())
            }
        )
        return (<div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>)
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }
 }
export default connect(mapStateToProps, mapDispatchToProps)(App);
