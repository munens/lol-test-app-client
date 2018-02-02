import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import SummonerPage from './summoner_page';
import * as actions from '../actions/index';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount() {
		this.props.getSummonerData('RiotSchmick');
	}

	componentDidMount() {
  
	}

	componentWillReceiveProps(nextProps) {
    debugger;
		if(nextProps.summonerData.status === 'success'){
      this.props.resetSummonerStatus();
			this.props.getMatchHistoryData(nextProps.summonerData.summonerData.accountId, 0, 5);
    }
    
    if(nextProps.matchHistory.status === 'success'){
      this.props.resetSummonerStatus();
		}
	}

  render() {
    return (
      <div className="app">
        <SummonerPage 
          summonerData={this.props.summonerData.summonerData} 
          matchHistory={this.props.matchHistory.matchHistory} 
        />
      </div>
    );
  }
}


function mapStateToProps(state){
  console.log(state);
	return { summonerData: state.summonerData, matchHistory: state.matchHistory };
}

export default connect(mapStateToProps, actions)(App);
