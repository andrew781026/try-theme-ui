
// ModalView.jsx
import React from 'react';
import * as Portals from 'react-reverse-portal';
import {createPortal} from 'react-dom';
import {jsx, css, keyframes} from '@emotion/react'
import styled from '@emotion/styled'

const FadeOutKeyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const FadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledModalView = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${props => props.zIndex};
`;


class ModalView extends React.PureComponent {
  portalNode = null;

  render() {
    const {zIndex, status, children, render} = this.props;

    if ((!children && !render) || (children && render)) {
      throw new Error('Should provide either `chilren` or `render` function');
    }

    const clonedElement = React.cloneElement(children, {status});

    const view = (
      <StyledModalView zIndex={zIndex}>
        {clonedElement}
      </StyledModalView>
    );

    /**
     * Render in-place on server side and client side first frame.
     * Use react-reverse-portal to move in-place DOMs to react portal.
     */

    if (!this.portalNode) {
      this.portalNode = Portals.createHtmlPortalNode();
    }

    const inPortal = (
      <Portals.InPortal node={this.portalNode}>{view}</Portals.InPortal>
    );
    const outPortal = <Portals.OutPortal node={this.portalNode}/>;

    return (
      <>
        {inPortal}
        {createPortal(outPortal, document.querySelector('#modal-root'))}
      </>
    );
  }
}

ModalView.defaultTypes = {
  zIndex: 150,
  status: 'display',
};

export default ModalView;
