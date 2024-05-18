import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
        </div>
    );
};

export default Menu;