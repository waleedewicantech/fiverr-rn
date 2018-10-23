import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Alert,
  ActivityIndicator,
  Modal,
  TouchableHighlight
} from 'react-native';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { translate } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Circle';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { CDN_URL } from 'react-native-dotenv';

import { ListItem } from 'react-native-material-ui';

const initState = { alerts: [], modal: undefined };

// @translate()
// @withStyles(styles)
// @withRouter
// @connect(store => ({ store }))
export default class Alerts extends Component {
  static propTypes = {
    // t: PropTypes.func
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = initState;
    // this.listen();
  }

  componentWillMount() {
    this.getAlerts();
  }

  getAlerts = async () => {
    try {
      const axiosReturn = await axios(
        'https://staging-api.iihq.io/analyst-alerts'
      );
      if (!axiosReturn.data) return null;

      if (axiosReturn.status != 200) return null;
      this.setState({
        alerts: [
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data,
          ...axiosReturn.data
        ]
      });
    } catch (err) {
      // return this.handleProcessError(err);
      console.log('err', err);
    }
  };

  openModal = alert => {
    this.setState({ modal: alert });
  };

  closeModal = () => {
    this.setState({ modal: undefined });
  };

  // listen = () => {
  //   const channels = pusher.subscribe('alerts');

  //   channels.bind('new alert', newAlert => {
  //     this.setState({
  //       alerts: [newAlert, ...this.state.alerts]
  //     });
  //   });

  //   channels.bind('update alert', updatedAlert => {
  //     const updatedAlerts = this.state.alerts;

  //     const index = this.state.alerts.findIndex(a => a._id == updatedAlert._id);
  //     updatedAlerts[index] = updatedAlert;

  //     this.setState({ alerts: updatedAlerts });
  //   });

  //   channels.bind('delete alert', deletedAlertId => {
  //     const updatedAlerts = this.state.alerts.filter(
  //       a => a._id !== deletedAlertId
  //     );

  //     this.setState({ alerts: updatedAlerts });
  //   });
  // };

  renderAlerts = () => {
    // const { t } = this.props;
    const { alerts } = this.state;

    if (alerts.length == 0) return null;

    return alerts.map((alert, index) => (
      <View key={`analyst-alert-${index}`}>
        <ListItem
          divider
          leftElement={
            alert.direction == 'down' ? (
              <Icon name="trending-down" size={35} color="green" />
            ) : (
              <Icon name="trending-down" size={35} color="red" />
            )
          }
          centerElement={{
            primaryText: alert.ticker.toUpperCase()
          }}
          onPress={() => this.openModal(alert)}
        />
      </View>
    ));
  };

  renderModal = () => {
    const { modal } = this.state;

    if (modal == undefined) return null;

    const chartImage = modal.chart.replace(/{CDN_URL}/g, `${CDN_URL}/alerts`);

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={Boolean(modal)}
        onRequestClose={this.closeModal}
      >
        <View>
          <Grid>
            <Row size={1}>
              <Image
                style={styles.chartImage}
                source={{
                  uri: chartImage
                }}
                indicator={ProgressBar}
              />
            </Row>
            <Row size={3}>
              <Col size={3}>
                <Text>
                  {modal.direction == 'down' ? (
                    <Icon name="trending-down" size={20} color="green" />
                  ) : (
                    <Icon name="trending-down" size={20} color="red" />
                  )}
                  {modal.ticker}
                </Text>
                <Text>{modal.reason}</Text>
              </Col>
              <Col size={1}>
                <Text>
                  <Icon name="plus" size={20} color="green" /> {modal.buyPrice}
                  <Icon name="minus" size={20} color="red" /> {modal.sellPrice}
                </Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <SafeAreaView style={{ position: 'absolute', right: 5, top: 5 }}>
          <TouchableHighlight onPress={this.closeModal}>
            <Icon name="close" size={35} color="white" />
          </TouchableHighlight>
        </SafeAreaView>
      </Modal>
    );
  };

  render() {
    return (
      <ScrollView>
        {this.renderAlerts()}
        {this.renderModal()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  chartImage: {
    width: 'auto',
    height: 400,
    margin: 'auto'
  },
  prices: {
    paddingLeft: 10
  }
});
