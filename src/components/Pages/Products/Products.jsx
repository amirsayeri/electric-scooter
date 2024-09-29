import { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import proData from "../../../../Data/proData";

const Products = () => {
  const [datas, setDatas] = useState(proData);
  // useEffect(() => {
  //   axios.get("http://localhost:9000/article").then((item) => {
  //     setDatas(item.data);
  //   });
  // }, []);

  // const allHandler = () => {
  //   axios
  //     .get("http://localhost:9000/article")
  //     .then((item) => setProData(item.data));
  // };

  // const scooterHandler = () => {
  //   const filterScooter = proData.filter(
  //     (item) => item.description == "اسکوتر"
  //   );
  //   setProData(filterScooter);
  // };

  // const bikeHandler = () => {
  //   const bikeFilter = proData.filter((item) => item.description == "دوچرخه");
  //   setProData(bikeFilter);
  // };
  
  // const tricycleHandler = () => {
  //   const tricyclefilter = proData.filter(
  //     (item) => item.description == "سه چرخه"
  //   );
  //   setProData(tricyclefilter);
  // };

  return (
    <div className="allProducts">
          <div className="products">
            {datas.map((item) => {
              return (
                <Link
                  to={`/productDetail/${item.id}`}
                  key={item.id}
                  className="card"
                >
                  <div className="imgCard">
                    <img src={item.img} alt="scooter" />
                  </div>
                  <div className="descriptionCard">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
    </div>
  );
};

export default Products;
