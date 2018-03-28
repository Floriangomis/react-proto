import React from 'react';

import LoginForm from './loginForm';
import Home from '../components/home';

import { postRequest } from '../utility/request';
import { config } from '../utility/config';
import { sortArrayByRelevancy, createObjectFromArray } from '../utility/utility';

 class App extends React.Component {

    state = {
        mockDataFromFakeServer: {}
    }

    // Once the user click on login we send via a Post information to the server.
    // Then post request send back a promise and we update the state
    loginBtnHandler = ( loginInformations ) => {
        postRequest( loginInformations, config.mockServerAdress, config.requestConfig ).then( ( data ) => {
            let tmpArray = sortArrayByRelevancy(data.data.results, true);
            let sortedObject = createObjectFromArray(tmpArray)
            this.setState( { mockDataFromFakeServer: sortedObject } );
        })
    };
    // Update the state when object is sorted
    sortedArrayHandler = (sortedObject) => {
        this.setState( { mockDataFromFakeServer: sortedObject } );
    };

    render() {
        const mockData = this.state.mockDataFromFakeServer;
        // Check if data has been already retrieved from the server.
        const stateIsEmpty = Object.keys(mockData).length === 0 && mockData.constructor === Object;
        return (
            <React.Fragment>
                { 
                    stateIsEmpty === true ? 
                    <LoginForm loginBtnHandler={this.loginBtnHandler} props={this.props}/> : 
                    <Home mockData={mockData} sortedArrayHandler={this.sortedArrayHandler.bind(this)}/> 
                }
            </React.Fragment>        
        )
    }
}

export default App;