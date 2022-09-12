
import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'


class Login extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      name: ''
    })
  }

  handleButton = () => {
    this.setState({
      name: 'Ariel'
    })
  }

  render() {

    return (
      <View>
        <Text>Mi nombre esss: {this.state.name} {this.props.lastName}</Text>
        <Button onPress={this.handleButton} title="Nombre" />
      </View>
    )

  }

}

export default Login