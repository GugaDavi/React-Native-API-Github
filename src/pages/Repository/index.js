import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('url'),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    url: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const url = navigation.getParam('url');

    this.setState({ url });
  }

  render() {
    const { url } = this.state;
    return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
  }
}
