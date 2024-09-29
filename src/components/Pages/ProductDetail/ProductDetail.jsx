import { useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import proData from "../../../../Data/proData.js";
import star from "../../../../public/photos/star.png";

const ProductDetail = () => {
  const [datas, setDatas] = useState(proData);
  const { id } = useParams();
  const productInfo = datas.find((item) => item.id == id);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:9000/article/${Params.id}`)
  //     .then((item) => {
  //       setDatas(item.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div className="productDetail">
      <div className="boxDetail">
        <div className="imgBox">
          <img src={productInfo.img} alt="" />
        </div>
        <div className="descriptions_Product">
          <div className="descriptions">
            <h3>{productInfo.title}</h3>
            <p>{productInfo.description}</p>
            <span>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </span>
            <div className="alldesc">
              <div className="byProduct">
                <div className="starts">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <span>{productInfo.price}</span>
                <button>افزودن به سبد خرید</button>
                <p>گارانتی 18 ماهه محصولات</p>
                <p>ارسال سریع به تمام کشور</p>
              </div>
              <div className="catigoryBoxs">
                <div className="boxCategory">
                  <h2>ویژگی های دستگاه</h2>
                  <span>فناوری پیشرفته</span>
                </div>
                <div className="boxCategory">
                  <h2>چرخ ها</h2>
                  <span>چرخ های خارجی و محکم</span>
                </div>
                <div className="boxCategory">
                  <h2>رنگ</h2>
                  <span>در رنگ یندی کامل و جذاب</span>
                </div>
                <div className="boxCategory">
                  <h2>کیفیت</h2>
                  <span>class a</span>
                </div>
                <div className="boxCategory">
                  <h2>متریال</h2>
                  <span>فلز و پلاستیک</span>
                </div>
                <div className="boxCategory">
                  <h2>مدل</h2>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
