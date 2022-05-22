import { Ul, Li } from '../styles/components/redSocials';
import {VscTwitter} from 'react-icons/vsc';
import {RiInstagramFill, RiLinkedinFill, RiFacebookBoxFill, RiGithubFill} from 'react-icons/ri';

function RedSocials() {
  return (
    <Ul>
      <Li><a href="https://twitter.com/24Kingod" target="_blank" rel="noopener noreferrer"><VscTwitter size={'30px'} color={'white'} cursor={'pointer'} /></a></Li>
      <Li><a href="https://www.instagram.com/jmg24king/" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={'30px'} color={'white'} cursor={'pointer'} /></a></Li>
      <Li><a href="https://github.com/JMG24a" target="_blank" rel="noopener noreferrer"><RiGithubFill size={'30px'} color={'white'} cursor={'pointer'} /></a></Li>
      <Li><a href="https://www.linkedin.com/in/jose-morales-gonzalez-324121226/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill size={'30px'} color={'white'} cursor={'pointer'} /></a></Li>
      <Li><a href="https://www.facebook.com/profile.php?id=100079121311349" target="_blank" rel="noopener noreferrer"><RiFacebookBoxFill size={'30px'} color={'white'} cursor={'pointer'} /></a></Li>
    </Ul>
  )
}

export { RedSocials }
