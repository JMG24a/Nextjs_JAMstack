import { Post } from './Post';
import { Back } from './Back';
import { Paragraph } from './Paragraph';

export default {
  p: (props) => <p as='p' style={{fontSize:'1.6rem'}}  {...props} />,
  Back,
  Paragraph,
  Post,
}
