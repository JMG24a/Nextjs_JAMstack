import { keyframes } from 'styled-components';

export const contraction = keyframes`
  to { height: 100px; width: 100px; border-radius: 0px 0px 100% 0px;}
  from { height: 100%; width: 100%; border-radius: 0px 0px 0px 0px;}
`

export const expansion = keyframes`
  from { height: 100px; width: 100px; border-radius: 0px 0px 100% 0px;}
  to { height: 100%; width: 100%; border-radius: 0px 0px 0px 0px;}
`

export const hidden = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`
