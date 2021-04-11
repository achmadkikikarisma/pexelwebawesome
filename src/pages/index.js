import React from "react"
import {Helmet} from "react-helmet";
import {useStaticQuery,graphql} from "gatsby"
import { Link } from "gatsby"


import Nav from "../components/nav"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Footer from"../components/footer"

import team2 from"../images/team2.png"
import productdesign from"../images/productdesign.png"
import development from"../images/development.png"
import graphicdesign from"../images/graphicdesign.png"
import design_icon from"../images/design.png"
import idea_icon from"../images/idea_icon.png"
import development_icon from"../images/development_icon.png"
import testing_icon from"../images/testing_icon.png"
import deliverables_icon from"../images/deliverables_icon.png"
import our_team from"../images/ourteam.jpeg"



const IndexPage = () => (
  <Layout>
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Pexel Design</title>
    <link rel="canonical" href="http://pexel.design" />
  </Helmet>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Banner> </Banner>
    <section className="section1 position-relative">
      <h1></h1>
     <div className="container">
      <div className="row align-items-center mt-5">
      <div className="col-md-7">
          <img className="team2" src={team2}/>
        </div>
        <div className="col-md-5">
          <h4 className="title">
          Hire a team of professional engineers and<br/>
          designers to build your apps and websites
          </h4>
          <span className="team2-text d-inline-block mb-6">
          A laser focus engineer and designer that will cater to your needs. Think of Pexel as your home builder in the digital world.
          </span>
        </div>
      </div>
     </div>
     {/* <img className="illustration" src={illustration}/> */}
   </section>

   <section className="sectiontwo">
   <div className="container">
   <center className="title-pexel">Services<br/><br/>
    </center>
    <p className="title-desc">At Pexel, we bring your ideas to life. From strategy, design and <br/>development to deployment for the world to see
</p>
  <div className="row">
    <div className="col-sm">
      <center>
        <img className="icon-services" src={productdesign}></img>
        <h6 className="title-service">Product Design</h6></center>
      <p className="description-service">UX/UI, Wireframe, Mobile App Design,Web Design, Layout, Market Research</p>
    </div>
    <div className="col-sm">
    <center>
    <img className="icon-services" src={development}></img>
    <h6 className="title-service">Development</h6></center>
    <p className="description-service">Design, Build, Testing,
Websites, Web Apps, Mobile Apps,
MVP & Continuous Development</p>
    </div>
    <div className="col-sm">
    <center>
    <img className="icon-services" src={graphicdesign}></img>
    <h6 className="title-service">Graphic Design</h6></center>
    <p className="description-service">Logo, Icon Design, Illustration, Digital Printing, Philosophy, Social Media </p>
    </div>
  </div>
</div>
   </section>

  <section className="sectionthree">
  <center className="title-process">Development Process<p className="title-process-desc">Create stunning applications that are on-time<br/>and on-budget</p> 
  <p className="process-desc">Usually, we customize that process depending on the project needs and final goals.<br/>We have mastered and streamlined every step of our development process, from the<br/> preparations necessary to launch a successful project</p>
  </center>
  {/* <div className="container"> */}
  <div class="row-flex">
  <div class="col">
    <img className="icon-process" src={idea_icon}></img>
    <h6 className="title-process-1">Understanding Requirment</h6>
    <p className="description-process">We analyze requirment and prepare the budget, team, and technical documentation</p>
    </div>
    <div class="col">
    <img className="icon-process" src={design_icon}></img>
    <h6 className="title-process-1">Layout & Design</h6>
    <p className="description-process">Designer create an interactive design of your application with Sketch, Figma and Zeplin</p>
    </div><div class="col">
    <img className="icon-process" src={development_icon}></img>
    <h6 className="title-process-1">Development</h6>
    <p className="description-process">We analyze requirment and prepare the budget, team, and technical documentation</p>
    </div>
    <div class="col">
    <img className="icon-process" src={testing_icon}></img>
    <h6 className="title-process-1">Usabillity Testing</h6>
    <p className="description-process">We analyze requirment and prepare the budget, team, and technical documentation</p>
    </div>
    <div class="col">
    <img className="icon-process" src={deliverables_icon}></img>
    <h6 className="title-process-1">Deliverables File</h6>
    <p className="description-process">We analyze requirment and prepare the budget, team, and technical documentation</p>
    </div>
</div>

  </section>
  <section className="sectionfour"> 
  <div className="container">
      <div className="row align-items-center mt-5">
      <div className="col-md-7">
          <img className="ourteam" src={our_team}/>
        </div>
        <div className="col-md-5">
          <h4 className="meet">
          Meet Our Team
          </h4>
          <span className="team-desc d-inline-block mb-6">
          We're based in Indonesia, but work with companies worldwide.
          </span>
          <span className="team-desc-1 d-inline-block mb-6">
          We are a team of full-stack programming experts and designers with surprisingly deep knowledge of knitting and photography.
          </span>
          <button className="contact-us">See Our Team <i class="fa fa-chevron-right fa-fw"></i> </button>
        </div>
      </div>
     </div>
  </section>
    <Footer/>
  </Layout>

)



export default IndexPage
