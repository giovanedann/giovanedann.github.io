import { useState } from 'react';
import { FaCode } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HeaderContainer, HeaderText, NameDiv } from './styles';
import Navbar from '../Navbar';

const headerIconsStyle = {
  cursor: 'pointer',
  marginRight: '30px',
  marginTop: '30px',
}

const Header: React.FC = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  const toggleMenu = () => setToggleLinks(!toggleLinks);

  return (
    <>
      <HeaderContainer id="Home" toggled={ toggleLinks }>

        <NameDiv>
          <FaCode size={ 30 } style={ { marginBottom: '10px' } }/>
          <HeaderText toggled={ toggleLinks }>Giovane Saes</HeaderText>
        </NameDiv>

        { !toggleLinks 
        && <AiOutlineMenu size={ 30 } style={ headerIconsStyle } onClick={ toggleMenu } /> }

        { toggleLinks 
        && <AiOutlineClose size={ 30 } style={ headerIconsStyle } onClick={ toggleMenu } /> }

      </HeaderContainer>

      <Navbar toggled={ toggleLinks } onLinkClick = { toggleMenu }/>
    </>
  )
}

export default Header;