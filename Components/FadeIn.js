

import React from 'react'
import { Animated, Dimensions } from 'react-native'

class FadeIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').width)
    }
  }

  componentDidMount() {
    Animated.spring(
      this.state.positionLeft,
      {
        toValue: 0,
          speed:10,
      }
    ).start()
  }
  componentDidUpdate(next) {
    if (next.props.changed) {
        this.playAnimation();
    }
}

  render() {
    return (
      <Animated.View
        style={{ left: this.state.positionLeft }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default FadeIn