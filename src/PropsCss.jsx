/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const pinkInput = css`
  background-color: pink;
`;
const RedPasswordInput = props => (
  <input
    type="password"
    css={css`
      background-color: red;
      display: block;
    `}
    {...props}
  />
)

export default function PropsCss(){

  return (
    <div>
      <RedPasswordInput placeholder="red" />
      <RedPasswordInput placeholder="pink" css={pinkInput} />
    </div>
  )
}
