import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './actions';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoaded, headlines } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return (
        <React.Fragment>
          <h1> Headlines </h1>
          <ul>
            {headlines.map((headline, index)=> 
              <li key={index}>
                <h3>{headlines.title}</h3>
                <p>{headline.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return{
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps)(Headlines);
