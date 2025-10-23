// import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { HeaderContainer, HeaderHeader, HeaderStyledNavLink } from './Header.styled'


export const Header = () => {
    const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? "active link" : "link";
    };
    return (
        < HeaderHeader >
            <HeaderContainer>
                <HeaderStyledNavLink  to="/" className={getActiveClass}>
                ToDo</HeaderStyledNavLink>

                <HeaderStyledNavLink to="/list" className={getActiveClass}
                >List</HeaderStyledNavLink>
              
            </HeaderContainer>
        </HeaderHeader >
    )

}