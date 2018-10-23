import React from 'react';
import { defaultStyles } from './materialPasswordStyles';
import { TextField } from 'react-native-material-textfield';

export default class MaterialTextInputPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label
    };
  }

  render() {
    const { label } = this.state;
    this.props.styles = Object.assign({}, defaultStyles, this.props.styles);

    return (
      <TextField
        label={this.state.label}
        value={this.state.inputText || ''}
        onChangeText={inputText => this.setState({ inputText: inputText })}
      />
    );
  }
}
