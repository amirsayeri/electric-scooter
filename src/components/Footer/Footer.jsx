import "./footer.css";
import enamad from "../../../public/photos/enamad.jpg";
import instagram from "../../../public/photos/instagram.png"
import aparat from "../../../public/photos/aparat.png"
import telegram from "../../../public/photos/telegram.png"


const Footer = () => {
  return (
    <div className="footer">
      <div className="box_top_footer">
        <div className="partOne_footer">
          <h2>ساعت کاری</h2>
          <p>۰۹:۰۰ - ۲۰:۰۰</p>
          <div className="box_ulOne">
            <h3>محصولات غیر برقی</h3>
            <ul>
              <li>خرید دوچرخه</li>
              <li>خرید دوچرخه تاشو</li>
              <li>خرید دوچرخه کودک</li>
              <li>خرید دوچرخه کوهستان</li>
            </ul>
          </div>
        </div>
        <div className="partTwo_footer">
          <h2>شماره تماس</h2>
          <p>۰۲۱-۲۶۸۷۲۰۸۶</p>
          <div className="box_ulOne">
            <h3>محصولات برقی</h3>
            <ul>
              <li>خرید دوچرخه هوشمند</li>
              <li>خرید دوچرخه برقی تاشو</li>
              <li>خرید موتور برقی</li>
              <li>خرید اسکوتر هوشمند</li>
            </ul>
          </div>
        </div>
        <div className="partFor_footer">
            <h2>الکتریک اسکوتر</h2>
            <p>رسالت ما در دنرو عرضه ی با کیفیت ترین و جدیدترین تجهیزات حمل و نقل برقی و پاک و ارائه اطلاعات دقیق، صحیح و مطمئن درباره این محصولات می باشد تا شما عزیزان بتوانید در کوتاه ترین زمان برای خرید یک دوچرخه ، دوچرخه برقی، دوچرخه تاشو یا موتور برقی متناسب با نیازتان اقدام نمایید.</p>
        </div>
        <div className="partTree_footer">
          <h3>نماد اعتماد خرید</h3>
          <div className="imgEnamad">
            <img src={enamad} alt="enamad" />
          </div>
          <hr />
          <ul className="menu_footer">
            <li className="menuItem_footer">قوانین و مقررات</li>
            <li className="menuItem_footer">اطلاعیه مهم واحد خدمات پس از فروش</li>
            <li className="menuItem_footer">سوالات متداول</li>
          </ul>
        </div>
      </div>
      <div className="box_bottom_footer">
        <h3>شبکه های اجتماعی</h3>
        <div className="boxImg_bottomFooter">
            <img src={aparat} alt="aparat" style={{width : "45px"}}/>
            <img src={instagram} alt="instagram" />
            <img src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
