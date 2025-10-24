import { useDispatch } from 'react-redux';
import { HeaderContainer, HeaderHeader, HeaderStyledNavLink, HeaderToggleleButton } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList';


export const Header = () => {
    const dispatch = useDispatch()

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

                <HeaderToggleleButton>
                    <button onClick={()=>dispatch(toggleThemeAction()) }>
                        toggle
                    </button>
                </HeaderToggleleButton>
              
            </HeaderContainer>
        </HeaderHeader >
    )

}