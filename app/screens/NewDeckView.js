import React, { Component } from 'react';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Text } from 'react-native';
import slugify from 'slugify';

import { PlainButton } from '../components/Buttons';
import { KeyboardContainer } from '../components/Containers';
import { addDeck } from '../actions';
import { PlainTextInput } from '../components/Inputs';
import { isUniqueKey } from '../reducers/selectors';

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 30,
    color: '$white',
    margin: 20,
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
  },
  buttonStyle: {
    margin: 20,
  },
});

class NewDeckView extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    addDeck: PropTypes.func,
    isUniqueKey: PropTypes.func,
  };

  state = {
    title: '',
    titleError: '',
  };

  handleAddCard = () => {
    if (this.isValid()) {
      const { title } = this.state;
      const key = slugify(title);
      this.props.addDeck(title, key);
      this.setState({ title: '' });
      this.props.navigation.navigate('Deck', { deck: { key, title } });
    }
  };

  isValid = () => {
    let valid = false;
    const { title } = this.state;
    if (title.length === 0) {
      this.setState({ titleError: 'Required' });
    } else if (!this.props.isUniqueKey(slugify(title))) {
      this.setState({ titleError: 'Not Unique' });
    } else {
      this.setState({ titleError: '' });
      valid = true;
    }
    return valid;
  };

  render() {
    return (
      <KeyboardContainer style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <KeyboardAvoidingView behavior="padding">
          <PlainTextInput
            placeholder="Title"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
            error={this.state.titleError}
          />
        </KeyboardAvoidingView>
        <PlainButton
          style={styles.buttonStyle}
          text="Submit"
          onPress={this.handleAddCard}
          callToAction
        />
      </KeyboardContainer>
    );
  }
}

const mapStateToProps = state => ({
  isUniqueKey: key => isUniqueKey(key, state),
});

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (title, key) => dispatch(addDeck(title, key)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);
