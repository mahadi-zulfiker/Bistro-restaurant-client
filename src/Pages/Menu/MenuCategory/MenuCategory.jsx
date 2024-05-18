import { Link } from "react-router-dom";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";
import Cover from "../Menu/Cover/Cover";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="py-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="my-4 btn btn-outline border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;