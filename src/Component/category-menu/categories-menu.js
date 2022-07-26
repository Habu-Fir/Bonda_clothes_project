import "./categorires-menu.styles.scss";
import CategoryItem from "../category-item/category-item";

const categoriesMenu = ({ categoris }) => {
  return (
    <div className="categories-container">
      {categoris.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default categoriesMenu;
