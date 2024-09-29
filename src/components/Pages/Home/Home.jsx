import "./home.css";
import scooterImg from "../../../../public/photos/scooter-01.png";
import { useState } from "react";
import miniProduct from "../../../../Data/carosel";
import scooterParalax from "../../../../public/photos/scooter-parallax.png";
import accessories from "../../../../public/photos/accessories-01.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Blog from "../../../../Data/blog"


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Home = () => {
  const [newData, setNewData] = useState(miniProduct);
  const [caroselBlog , setCaroselBlog] = useState(Blog)
  return (
    <div>
        <div className="partOne">
        <div className="box_parts">
          <div className="description_partOne">
            <div className="boxText_partOne">
              <h2 className="description_partOne_title">
                اسکوتر برقی مدل libero X250
              </h2>
              <p className="description_partOne_p">
                استکوتر 250 وات برند هیترو
              </p>
              <span className="description_partOne_span">اطلاعات : </span>
            </div>
            <div className="informationsScooter">
              <div className="first_km">
                30کیلومتر <br />
                <hr /> باتری
              </div>
              <div className="second_km">
                13 کیلوگرم <br />
                <hr />
                وزن
              </div>
              <div className="third_km">
                25 کیلومتر بر ساعت <br />
                <hr /> سرعت
              </div>
            </div>
            <div className="priceBtn_partOne">
              <span className="price_partOne">۷۵/۰۰۰/۰۰۰ تومان</span>
              <button className="priceBtnChildren_partOne">
                اضافه کردن به سبد خرید
              </button>
            </div>
          </div>
          <div className="description_partTow">
            <img src={scooterImg} alt="scooter" />
          </div>
          <div className="description_partOne">
            <div className="boxText_partOne_right">
              <h2 className="boxText_partOne_title">درباره محصول</h2>
              <p className="boxText_partOne_p">
                یک اسکوتر برقی با کارایی بالا، بسیار بادوام، با سرعت بالا <br />
                و سبک وزن با یک باتری بزرگ است
              </p>
            </div>
            <div className="boxText_partOne_right">
              <h2 className="boxText_partOne_title">اسکوترهای هوشمند</h2>
              <p className="boxText_partOne_p">
                این قطعات در کنار یکدیگر تشکیل دهنده اسکوترهای
                <br />
                هوشمندی اند که قادر به حمل و نقل و جابجایی افراد هستند
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="partTwo">
        {newData.map((item) => {
          return (
            <Link to={`/detailTwo/${item.id}`} key={item.id} className="box_productsHome">
              <div className="imgbox_productsHome">
                <img src={item.img} alt="img" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </Link>
          );
        })}
      </div>
      <div className="partTree">
        <p>توضیحات کوتاه درمود فروشگاه</p>
        <h2>اگه دنبال یک اسکوتر برقی جدید هستید جای خوبی اومدید</h2>
        <span>
          شما میتوانید در بخش فروشگاه بهترین مدل های دوچرخه برقی و اسکوتر برقی{" "}
          <br /> اعم از با فرمان و بدون فرمان به صورت اقصاطی تهیه کنید
        </span>
      </div>
      <div className="partFor parallax">
        <div className="boxImg_parallax">
          <img src={scooterParalax} alt="scooterparallax" />
          <span>شهری</span>
          <h2>اسکوتر هوشمند الکتریکی مدل Z400</h2>
        </div>
      </div>
      <div className="partFive">
        <div className="text_partFive">
          <h2>اسکسسوری و لوازم جانبی موتور و اسکوتر</h2>
          <p>برای مشاهده بیشتر به بخش فروشگاه بروید</p>
        </div>
        <div className="boxImg_partFive">
          <img src={accessories} alt="accessories" />
        </div>
      </div>
      <div className="partsix">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {caroselBlog.map((item) => {
            return (
              <SwiperSlide className="SwiperSlide" key={item.id} style={{fontFamily:"yekan" , cursor:"pointer" , backgroundColor:"white" , borderRadius:"5px" , margin:"20px"}}>
                <img src={item.img} alt="" style={{borderRadius:"5px" , marginBottom:"10px" , height:"200px"}}/>
                <h3 style={{fontSize:"15px"}}>{item.title}</h3>
                <p style={{fontSize:"14px"}}>{item.date}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
