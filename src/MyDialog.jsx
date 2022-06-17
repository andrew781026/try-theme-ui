import React, {useState} from 'react'

/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react'
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

const DivRoot = styled.div`
  cursor: pointer;
  height: 400px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  padding: 12px;
  margin: 200px;
  background-color: #00fff8;
  animation: ${props => props.status === 'close' ? FadeOutKeyframes : FadeInKeyframes} 1s ease forwards;
`

const MySpan = styled.span`
  font-size: 40px;
  color: #0b6e0b;
`

function MyModal() {
  const [status, setStatus] = useState('display');

  const toggleShow = () => {
    setStatus(prev => (prev === 'close') ? 'display' : 'close')
  }

  const styles = css`
    overflow: hidden;
    cursor: pointer;
    height: 400px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    padding: 12px;
    margin: 200px;
    background-color: #00fff8;
    animation: ${status === 'close' ? FadeOutKeyframes : FadeInKeyframes} 1s ease forwards;
  `;

  const goods = css`
    margin-top: 30px;
    height: 200px;
    width: 200px;
    box-shadow: 0 0 30px 200px rgba(0,0,0,0.3);
    border-radius: 20px;
    background-color: transparent;
  `;

  return (
    <div css={styles} onClick={toggleShow}>
      <MySpan>
        GOOD NIGHT
      </MySpan>
      <span>What the Hell is Going</span>
      <div css={goods}></div>
    </div>
  )
}

export default MyModal;
