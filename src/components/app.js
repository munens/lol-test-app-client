import React, { Component } from 'react';
import _ from 'lodash';
import SummonerPage from './summoner';
import * as actions from '../actions/index';

export default class App extends Component {
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
		if(nextProps.summonerData.status === 'success'){
			this.props.resetSummonerStatus();
			this.props.getMatchHistoryData(nextProps.summonerData.accountId, 0, 5);
		}
	}

  render() {
    return (
      <SummonerPage
        summonerData={this.props.SummonerPage}
        matchHistory={this.props.matchHistory}
      />
    );
  }
}


function mapStateToProps(state){
	return { summonerData: state.summonerData, matchHistory: state.matchHistory };
}

export default connect(mapStateToProps, actions)(SummonerPage);
