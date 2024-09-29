import { useState } from "react";
import carosel from "../../../../Data/carosel";
import { useParams } from "react-router-dom";
import "./detailTwo.css";

const DetailTwo = () => {
  const [newData, setNewData] = useState(carosel);
  const Params = useParams();
  const productInfo = newData.find((item) => item.id == Params.id);
  console.log(productInfo);

  return (
    <div className="detailTwo">
      <div className="imgDetailTwo">
        <img src={productInfo.img} alt="img" />
      </div>
      <div className="descDetailTwo">
        <h3>{productInfo.title}</h3>
        <p>{productInfo.price}</p>
        <p>{productInfo.description}</p>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      </div>
    </div>
  );
};

export default DetailTwo;
