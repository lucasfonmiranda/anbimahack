import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import { Home } from './../containers';

const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0
      // transform: 100
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(1)
      // transform: -100
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1)
      // transform: 0
    }
}
  
function mapStyles(styles) {
    return {
      opacity: styles.opacity
      // transform: `translateX(${styles.transform}%)`
    }
}
  
// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
      stiffness: 170,
      damping: 17
    })
}

class BaseRoutes extends Component {

    render() {

        return (
            <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                location={this.props.location}
                
            >
                <Route exact path="/:route" component={Home} />
                <Route exact path="/" component={Home} />
                
            </AnimatedSwitch>
        )
    }
}

export default withRouter(BaseRoutes);
