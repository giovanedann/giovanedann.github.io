import { NavbarStyles } from './styles';

const links = ['Home', 'About', 'Projects', 'Contact']

interface Props {
  toggled: boolean
  onLinkClick: () => void;
}

const Navbar: React.FC<Props> = ({ toggled, onLinkClick }) => {
  return (
    <NavbarStyles toggled={ toggled  }>
      <ul>
        {
          links.map((item) => (
            <li key={ item }>
              <a onClick={ onLinkClick } href="#">{item}</a>
            </li>
          ))
        }
      </ul>
    </NavbarStyles>
  )
}

export default Navbar;
