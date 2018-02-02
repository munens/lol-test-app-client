import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import SummonerPage from './summoner_page';
import * as actions from '../actions/index';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading_status: false
    }
  }

  componentWillMount() {
		this.props.getSummonerData('RiotSchmick');
	}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {
		if(nextProps.summonerData.status === 'success'){
      this.props.resetSummonerStatus();
      this.props.getMatchHistoryData(nextProps.summonerData.summonerData.accountId, 0, 2);
      this.setState({ loading_status: true })
    }
    
    if(nextProps.matchHistory.status === 'success'){
      //this.props.resetMatchHistoryStatus();
      //this.setState({ loading_status: false });
		}
	}

  render() {
    return (
      <div className="app">
        <SummonerPage 
          loading_status={this.state.loading_status}
          summonerData={this.props.summonerData.summonerData} 
          matchHistory={this.props.matchHistory.matchHistory} 
        />
      </div>
    );
  }
}


function mapStateToProps(state){
  console.log('state: ', state);
	return { summonerData: state.summonerData, matchHistory: state.matchHistory };
}

export default connect(mapStateToProps, actions)(App);
