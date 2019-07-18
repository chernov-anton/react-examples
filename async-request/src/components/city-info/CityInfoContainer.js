import React, {PureComponent} from "react";
import ErrorAlert from 'components/ErrorAlert';
import Loading from "components/Loading";
import CityInfoService from './CityInfoService';
import CityInfo from './CityInfo';

const initialState = {
  data: {
    country: '',
    city: ''
  },
  error: false,
  loading: false
};

class CityInfoContainer extends PureComponent {
  state = initialState;

  componentDidMount() {
    this.getCityInfo();
  }

  getCityInfo = async () => {
    try {
      this.setState({loading: true});

      const data = await CityInfoService.get();

      this.setState({country: data.country_name, city: data.city, loading: false})
    } catch(e) {
      this.setState({error: true, loading: false})
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading/>
    }

    if (this.state.error) {
      return <ErrorAlert/>
    }

    return <CityInfo country={this.state.country} city={this.state.city}/>
  }
}

export default CityInfoContainer;