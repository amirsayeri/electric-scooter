import "./contact.css"
import phone from "../../../../public/photos/phone.png"
import headphone from "../../../../public/photos/headphone.png"
import letter from "../../../../public/photos/letter.png"
import location from "../../../../public/photos/location.png"




const Contact = () => {


    // trim()

    return (
        <div className="contact">
            <div className="box_contact">
                <div className="left_contact">
                    <div className="phoneBox">
                        <img src={phone} alt="phone" />
                        <p>۰۲۱-۲۳۵۶۶۹۵۸</p>
                    </div>
                    <div className="headphoneBox">
                        <img src={headphone} alt="headphone" />
                        <p>شنبه تا چهارشنبه <br /> پنجشنبه ها تا ظهر</p>
                    </div>
                    <div className="letterBox">
                        <img src={letter} alt="letter" />
                        <p>info@electroScooter.ir</p>
                    </div>
                    <div className="locationBox">
                        <img src={location} alt="location" />
                        <p>تهران - سعادت آباد - بالاتر از میدان کاج - خیابان دهم پلاک هشت </p>
                    </div>
                </div>
                <div className="right_contact">
                    <h3>تماس با تیم ما </h3>
                    <p>خیالتان راحت باشد, فقط کارشناسان ما این اطلاعات را میبینند</p>
                    <form className="formContact">
                        <input type="text" placeholder="نام و نام خانوادگی"/>
                        <input type="text" placeholder="ایمیل" /> 
                        <input type="text"placeholder="شماره موبایل"  />
                        <textarea placeholder="پیام خود را اینجا برای مان بنویسید"></textarea>
                        <input type="button" value="ارسال" className="inputBtn_contact"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact