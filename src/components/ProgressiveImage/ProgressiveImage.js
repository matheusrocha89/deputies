import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';

const style = StyleSheet.create({
  avatarWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 100,
    height: 156,
    width: 156,
    borderWidth: 3,
    borderColor: '#CDCDCD',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  avatarNotLoaded: {
    height: 1,
    width: 1,
  },
});

export class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.state = {loaded: false};
  }

  onLoad() {
    this.setState({loaded: true});
  }

  render() {
    const {loaded} = this.state;
    const imageStyle = loaded ? style.avatar : style.avatarNotLoaded;

    return (
      <View style={style.avatarWrapper}>
        <Image {...this.props} onLoad={this.onLoad} style={imageStyle} />
        {!loaded && <Spinner color="green" />}
      </View>
    );
  }
}
