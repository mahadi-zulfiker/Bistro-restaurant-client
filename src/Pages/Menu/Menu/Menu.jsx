import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import SoupImg from '../../../assets/menu/soup-bg.jpg'
import SaladImg from '../../../assets/menu/salad-bg.jpg'
import PizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* main Cover */}
            <SectionTitle
            subHeading={"Don't Miss"} heading={"Todays's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* offered Cover */}
            <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertImg}></MenuCategory>
            {/* dessert Cover */}
            <MenuCategory items={soup} title={"Soup"} coverImg={SoupImg}></MenuCategory>
            {/* soup Cover */}
            <MenuCategory items={salad} title={"Salad"} coverImg={SaladImg}></MenuCategory>
            {/* salad Cover */}
            <MenuCategory items={pizza} title={"Pizza"} coverImg={PizzaImg}></MenuCategory>
            {/* pizza Cover */}
        </div>
    );
};

export default Menu;