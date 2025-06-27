import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" >
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Roeland Ticlao</strong>
              </h1>

              <p className="heading-description blockquote">
                I'am passionate about making working websites that have appealing user experience.
                I've been developing themes on E-Commerce platforms like Bigcommerce, Shopify, Magento and Wordpress for about 8 years now.
                I can make your design into a working website with latest front-end and back-end technologies.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
        <Row>
            <Col md={12} className="home-porfolio-section">
              <p>I’m a Senior Web Developer at Always Open Commerce, specializing in full-stack eCommerce development. I implement custom and high-performance storefronts across platforms like BigCommerce, Shopify, Magento, and WordPress.</p>
              <p>I work closely with UI/UX designers, turning their designs from tools like Figma, Adobe XD, and Photoshop into pixel-perfect, responsive websites. I also manage domain setups, business email systems, VPS hosting, and general server/network administration — making me a go-to person for both frontend and backend infrastructure.</p>

              <section class="skills">
                <h2>💼 Technical Skills</h2>

                <div class="skill-group">
                  <h3>🛒 eCommerce Platforms</h3>
                  <ul>
                    <li>BigCommerce (Stencil, Page Builder, Widget Builder SDK)</li>
                    <li>Shopify (Theme Development, Liquid, Apps Integration)</li>
                    <li>Magento (Theme Customization, Admin Setup)</li>
                    <li>WordPress + WooCommerce (Custom Themes & Plugins)</li>
                  </ul>
                </div>

                <div class="skill-group">
                  <h3>💻 Frontend Development</h3>
                  <ul>
                    <li>HTML5, CSS3, SCSS</li>
                    <li>JavaScript / jQuery</li>
                    <li>Responsive & Cross-browser Design</li>
                    <li>Slick Slider, Swiper.js, GSAP (if applicable)</li>
                    <li>JSON / Handlebars for BigCommerce</li>
                  </ul>
                </div>

                <div class="skill-group">
                  <h3>📐 Design Implementation</h3>
                  <ul>
                    <li>Convert UI designs from: Figma, Adobe XD, Photoshop</li>
                    <li>Ensure design accuracy, responsiveness, and usability</li>
                  </ul>
                </div>

                <div class="skill-group">
                  <h3>🛠️ Backend & Infrastructure</h3>
                  <ul>
                    <li>Domain & DNS configuration</li>
                    <li>Business email setup (Google Workspace, cPanel, Zoho, etc.)</li>
                    <li>VPS & Server management (Linux, Apache, NGINX)</li>
                    <li>FTP, SSH, PHPMyAdmin, WHM/cPanel</li>
                  </ul>
                </div>

                <div class="skill-group">
                  <h3>🔧 Tools & Workflow</h3>
                  <ul>
                    <li>Git (GitHub, Bitbucket)</li>
                    <li>CLI tools & deployment scripts</li>
                    <li>PageSpeed optimization & debugging</li>
                    <li>Collaboration with PMs, Designers, and Clients</li>
                  </ul>
                </div>
              </section>

              
            </Col>
          </Row>


          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
