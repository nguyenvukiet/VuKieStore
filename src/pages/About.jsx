import React from 'react'
import Helmet from '../components/Helmet'


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Grid from '../components/Grid'
import aboutus1 from '../assets/images/aboutus1.png'
import aboutus2 from '../assets/images/aboutus2.png'
import aboutus3 from '../assets/images/aboutus3.png'
import aboutus4 from '../assets/images/aboutus4.png'
import aboutus5 from '../assets/images/aboutus5.png'
import aboutus6 from '../assets/images/aboutus6.png'
import aboutus7 from '../assets/images/aboutus7.png'
import aboutus8 from '../assets/images/aboutus8.png'
import aboutus9 from '../assets/images/aboutus9.png'

import ScrollToTop from '../components/ScrollToTop';


const About = () => {

  const slideImages = [
    {
      url: 'https://media.canifa.com/Simiconnector/list_image_tablet1650004441.png',
      
    },
    {
      url: 'https://media.canifa.com/Simiconnector/list_image_tablet1658132714.jpg',
      
    },
    {
      url: 'https://media.canifa.com/Simiconnector/list_image_tablet1646719696.jpg',
      
    },
  ];

  return (
    <Helmet title="About">
      <ScrollToTop />
      <div className="about">
          <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
          <div className="about__container">
            <h1>ABOUT US</h1>
            <hr/>
            <h1>THƯƠNG HIỆU THỜI TRANG SỐ 1 VIỆT NAM</h1>
            <div className="about__container__about-grid">
              <Grid  col={2} mdCol={2} smCol={1} gap={20} >
                <div className="about__container__info">
                  <h2>DANH TIẾNG CÔNG TY</h2>
                  <p>VuKie Store có lịch sử phát triển kéo dài 15 năm. Ra đời năm 2005, khởi đầu là một thương hiệu thời trang công sở chỉ 
                    dành cho nữ giới, đến nay VuKie Store đã hoàn thiện ""hệ sinh thái"" thời trang của mình bằng việc ra mắt các dòng sản 
                    phẩm dành cho cả nam giới và trẻ em với những tuyên ngôn thời trang khác biệt. Thương hiệu từng bước chuyển mình mạnh
                    mẽ và khẳng định vị thế dẫn đầu về thời trang xu hướng trên thị trường Việt Nam VuKie Store cũng là doanh nghiệp thời trang 
                    đại chúng duy nhất duy trì tổ chức 2 fashion show lớn 1 năm trong suốt 7 năm trở lại đây. Mạnh tay đầu tư chi phí khủng 
                    và chất xám để chiêu đãi giới mộ điệu cũng như khách hàng thân thiết những bữa đại tiệc cao cấp, sống động, ngập tràn không 
                    khí thời trang; được giới chuyên môn đánh giá cao và được khách hàng yêu mến.</p>
                </div>
                <div className="about__container__image">
                  <img src={aboutus1} alt="aboutus1"/>
                </div>
              </Grid>
            </div>

            <div className="about__container__about-grid">
              <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <div className="about__container__image">
                    <img src={aboutus2} alt="aboutus2"/>
                  </div>
                  <div className="about__container__info">
                    <h2>VĂN HÓA DOANH NGHIỆP</h2>
                    <p>VuKie Store là mảnh đất hội tụ của những con người cùng chung niềm đam mê với giấc mơ thời trang Việt. 
                      IVY không xây dựng văn hóa từ lý thuyết nhưng luôn thể hiện qua từng hành động. Chúng tôi tự hào là một tập thể chính trực, 
                      dám nói những gì mình nghĩ và làm những gì mình nói, kiên trì và bền bỉ đi theo giấc mơ của mình.
                      Muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng nhau"", 15 năm phát triển là minh chứng rõ nhất cho văn hóa bền trí, 
                      trung thành, sáng tạo. Như hình ảnh cánh buồm căng gió trên logo của IVY, chúng tôi không ngừng khát khao chinh phục, 
                      vượt sóng ra khơi bất kể gian nan để khám phá đại dương vô tận. "</p>
                  </div>
              </Grid>
            </div>
   
            <div className="about__container__about-grid">
              <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <div className="about__container__info">
                    <h2>CƠ HỘI PHÁT TRIỂN</h2>
                    <p>"VuKie Store không vẽ ra lộ trình phát triển cụ thể cho từng cá nhân khi tham gia vào doanh nghiệp, nhưng cơ hội 
                      phát triển ở IVY luôn đến rất bất ngờ như một món quà khi bạn không ngờ tới.
                      Câu chuyện luân chuyển nhân sự từ cửa hàng lên văn phòng, từ cấp nhân viên lên cấp quản lý, hay trao cơ hội thử 
                      sức với một công việc hoàn toàn mới là việc đã quá quen thuộc ở VuKie Store. Chúng tôi thoải mái xây dựng môi trường 
                      cạnh tranh cho các thành viên công ty; không ngại ""trao quyền"", bất kể bạn còn trẻ, non kinh nghiệm hay thiếu 
                      hụt bằng cấp.Chúng tôi trân trọng sự cố gắng trong công việc và đóng góp cho sự phát triển của công ty, vì vậy 
                      mọi thành tựu của bạn luôn được ghi nhận và tưởng thưởng xứng đáng bằng thu nhập và vị trí. Là cái nôi nuôi dưỡng 
                      tinh thần bền trí, trung thành, nên VuKie Store luôn ưu tiên phát triển nhân sự nội bộ, khai phá tối đa tiềm năng 
                      trong mỗi cá nhân, để mỗi người trong công ty không chỉ làm việc mà còn được thấy mình ""làm chủ"" công việc của 
                      chính mình."</p>
                  </div>
                  <div className="about__container__image">
                    <img src={aboutus3} alt="aboutus1"/>
                  </div>
              </Grid>
            </div>

            <div className="about__container__about-grid">
              <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <div className="about__container__image">
                    <img src={aboutus4} alt="aboutus1"/>
                  </div>
                  <div className="about__container__info">
                    <h2>ĐÃI NGỘ VÀ TRI ÂN</h2>
                    <p>"VuKie Store xây dựng các chính sách phúc lợi mang tính cạnh tranh cho nhân viên theo đúng quy định của nhà nước. 
                      Bên cạnh những chính sách ưu đãi mà người lao động được hưởng, chúng tôi thường xuyên tổ chức khen thưởng định 
                      kì hàng tháng cho các cá nhân xuất sắc, vinh danh và tri ân những đóng góp thành tựu nổi bật hàng năm.Chúng tôi 
                      luôn mong muốn tạo ra một cộng đồng lành mạnh, một gia đình gắn kết, vì vậy ở VuKie Store không thể thiếu các hoạt 
                      động tổ chức tiệc sinh nhật tập thể hàng tháng; team building và du lịch nghỉ mát theo quý, theo năm. IVY đặc biệt 
                      coi trọng việc chăm lo cho đời sống tinh thần và thể chất của CBNV, giúp mọi người tìm được sự cân bằng, hồi sức 
                      sau những giờ làm việc căng thẳng, mệt mỏi."</p>
                  </div>
              </Grid>
            </div>

            <div className="about__container__about-grid">
              <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <div className="about__container__info">
                  <h2>ĐÓNG GÓP CHO CỘNG ĐỒNG</h2>
                  <p>"Chia sẻ trách nhiệm cộng đồng là một trong những tâm niệm quan trọng với một doanh nghiệp thuần Việt, trong 
                    suốt nhiều năm qua, người IVY đã chung tay thực hiện nhiều hoạt động cộng đồng giá trị, ý nghĩa. Nổi bật nhất
                    là chiến dịch đồng hành cùng Mạng lưới Ung thư vú Việt Nam, và chiến dịch ""Light it up the blue"" - vì trẻ em
                    tự kỉ. Bằng hàng loạt các hoạt động như tổ chức hòa nhạc, gây quỹ từ thiện, thiết kế trang phục, triển lãm 
                    hình ảnh...2 chiến dịch đã nhận được sự quan tâm, ghi nhận và tán dương của giới truyền thông cũng như khách
                    hàng trong suốt nhiều năm thực hiện. "</p>
                </div>
                <div className="about__container__image">
                  <img src={aboutus5} alt="aboutus1"/>
                </div>
              </Grid>
            </div>
              
            <div className="about__container__about-grid">
              <Grid col={2} mdCol={2} smCol={1} gap={20}>
                <div className="about__container__image">
                    <img src={aboutus6} alt="aboutus6"/>
                  </div>
                  <div className="about__container__info">
                    <h2>ĐÀO TẠO CHUYÊN NGHIỆP</h2>
                    <p>Là thành viên của gia đình VuKie Store, bạn sẽ có đặc lợi được đào tạo kiến thức và kĩ năng bài bản. 
                      Chúng tôi thường xuyên tổ chức các buổi đào tạo hàng tuần, hàng tháng cho các cấp từ quản lý đến 
                      nhân viên; đào tạo theo khu vực và đào tạo với quy mô cả nước. Các kiến thức thời trang liên tục 
                      được cập nhật theo thị hiếu và xu hướng thế giới.VuKie Store hiểu rằng việc tạo ra một môi trường học
                      hỏi sẽ kích thích mỗi cá nhân không ngừng phát triển bản thân để tạo ra giá trị cho tổ chức cũng 
                      như cho chính mình."</p>
                  </div>
              </Grid>
            </div>

            
            <div className="about__container__forpeople">
              <Grid col={3} mdCol={3} smCol={1} gap={30}>
                  <div>
                    <div className="about__container__image">
                      <img src={aboutus7} alt="aboutus6"/>
                    </div>
                    <h3>VuKie Women</h3>
                    <p>"Tuyên ngôn thời trang của tôi"</p>
                  </div>

                  <div>
                    <div className="about__container__image">
                        <img src={aboutus8} alt="aboutus6"/>
                    </div>
                      <h3>VuKie Men</h3>
                      <p>"Thời trang của người dẫn đầu"</p>
                  </div>

                  <div>
                    <div className="about__container__image">
                        <img src={aboutus9} alt="aboutus6"/>
                    </div>
                      <h3>VuKie Kids</h3>
                      <p>"Trẻ em cũng phải mặc đẹp"</p>
                    </div>
              </Grid>
          </div>  
          <h1>JOIN WITH US</h1>
        </div>       
      </div>
    </Helmet>
  )
}

export default About
