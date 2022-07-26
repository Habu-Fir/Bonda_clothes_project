import CategoriesMenu from "../../Component/category-menu/categories-menu";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categoris = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div>
      <CategoriesMenu categoris={categoris} />
      <Outlet />
    </div>
  );
};
export default Home;
