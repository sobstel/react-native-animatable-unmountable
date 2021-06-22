/**
 * HOC that enhances react-native-animatable with exit (unmount) animations
 *
 * Possible states: prop.mounted : state.mounted
 *
 * - true : true - mounted (mounted)
 * - false : true - intermediate (unmounting/exiting)
 * - false : false - hidden (unmounted)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createAnimatableComponent } from 'react-native-animatable';

export default function animatableUnmountable(WrappedComponent) {
  const AnimatableComponent = createAnimatableComponent(WrappedComponent);

  return class extends Component {
    static propTypes = {
      didMount: PropTypes.func,
      didUnmount: PropTypes.func,
      innerRef: PropTypes.func,
      mounted: PropTypes.bool,
      onUnmountAnimationBegin: PropTypes.func,
      onUnmountAnimationEnd: PropTypes.func,
      unmountAnimation: PropTypes.string,
      unmountDuration: PropTypes.number,
    };

    static defaultProps = {
      didMount: () => {},
      didUnmount: () => {},
      innerRef: ref => {},
      mounted: true,
      onUnmountAnimationBegin: () => {},
      onUnmountAnimationEnd: endState => {},
      unmountAnimation: null,
      unmountDuration: 1000,
    };

    container = null;

    state = {
      mounted: this.props.mounted,
    };

    componentDidUpdate(prevProps, prevState) {
      if (!prevProps.mounted && this.props.mounted) {
        this.doMount();
      }

      if (prevProps.mounted && !this.props.mounted) {
        this.doUnmount();
      }

      if (prevState.mounted && !this.state.mounted) {
        this.props.didUnmount();
      }
    }

    onAnimationEnd = endState => {
      this.props.onAnimationEnd && this.props.onAnimationEnd(endState);
      this.props.didMount();
    };

    doMount = () => {
      this.container && this.container.stopAnimation();

      this.setState({ mounted: true });
    };

    doUnmount = () => {
      this.container && this.container.stopAnimation();

      if (!this.props.unmountAnimation) {
        if (!this.props.mounted) {
          this.setState({ mounted: false });
        }
        return;
      }

      this.props.onUnmountAnimationBegin();

      // fallback if container not found
      if (!this.container) {
        if (!this.props.mounted) {
          this.setState({ mounted: false });
          this.props.onUnmountAnimationEnd({ finished: true });
        }
        return;
      }

      const unmountDuration = this.props.unmountDuration || this.props.duration * 0.75;

      const animation = typeof this.props.unmountAnimation === 'string'
        ? this.container[this.props.unmountAnimation](unmountDuration)
        : this.container.animate(this.props.unmountAnimation, unmountDuration)

      animation.then(endState => {
        // don't change if changed to mounted in the meantime
        // cannot be: prop.mounted=true, state.mounted=false
        if (!this.props.mounted) {
          this.setState({ mounted: false });
          this.props.onUnmountAnimationEnd(endState);
        }
      });
    };

    handleRef = ref => {
      this.container = ref;
      this.props.innerRef(ref);
    };

    render() {
      if (!this.state.mounted) {
        return null;
      }

      return (
        <AnimatableComponent
          ref={this.handleRef}
          {...this.props}
          onAnimationEnd={this.onAnimationEnd}
        />
      );
    }
  };
};
