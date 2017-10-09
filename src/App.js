import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>

    <div className="main-content home">
				<h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>

      <div className="main-content">
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
  </div>
)
 
const Teachers = (props) => {
   return (
      <div  className="main-content"> 
        <h2> Teachers </h2> 
        <ul>
          <li className="teacher">
            <img className="teacher-img" src="https://www.creativosonline.org/blog/wp-content/uploads/2016/06/freelance-gif.png" alt=""/>
            <h2>Teacher 1</h2>
            <p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://blog.getmagic.com/wp-content/uploads/2017/05/freelancer-hire-1.jpg" alt=""/>
            <h2>Teacher 2</h2>
            <p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.researchsnipers.com/wp-content/uploads/2017/02/How-to-Become-a-Successful-Pakistani-Freelancer.jpg" alt=""/>
            <h2>Teacher 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.researchsnipers.com/wp-content/uploads/2017/02/How-to-Become-a-Successful-Pakistani-Freelancer.jpg" alt=""/>
            <h2>Teacher 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.creativosonline.org/blog/wp-content/uploads/2016/06/freelance-gif.png" alt=""/>
            <h2>Teacher 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.creativosonline.org/blog/wp-content/uploads/2016/06/freelance-gif.png" alt=""/>
            <h2>Teacher 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
        </ul>
      </div>
      

      
   );
}
const HTML =  () => {
   return (
     <div>
       <div className="content"> 
            <h1> HTML </h1>  
        </div>
        <div className="content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png" alt=""/>
									<div>
                    <h2>How to Make a Website</h2>
									  <p>If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.</p>
                  </div>
               </li>
          </div>
          <div className="content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png" alt=""/>
									<div>
                    <h2>HTML FORMS</h2>
									  <p>The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.</p>
                  </div>
						 	</li>
          </div>
          <div className="content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png" alt=""/>
									<div>
                    <h2>HTML Video and Audio</h2>
									  <p>Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.</p>
                  </div>
						 	</li>
          </div>
          <div className="content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png" alt=""/>
									<div>
                    <h2>SVG Basics</h2>
									  <p>Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density.</p>
                  </div>
               </li>
          </div>
          <div className="content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png" alt=""/>
									<div>
                    <h2>Responsive Images</h2>
									  <p>Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.</p>
                  </div>
               </li>
          </div>
          <div className="content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png" alt=""/>
									<div>
                    <h2>Introduction to HTML and CSS</h2>
									  <p>Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.</p>
                  </div>
               </li>
          </div>
      </div>
   );
}
const CSS =  () => {
   return (
      <div> 
        <div className="content"> 
            <h1> CSS </h1>  
        </div>
        <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png" alt=""/>
									<div>
                    <h2>CSS Basic</h2>
									  <p>CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.</p>
						 	    </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_css_selectors_stage01.png" alt=""/>
									<div>
                    <h2>CSS Selectors</h2>
									  <p>In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage3.png" alt=""/>
									<div>  
                    <h2>Responsive Layouts</h2>
									  <p>Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage1.png" alt=""/>
									<div>
                    <h2>CSS Flexbox Layout</h2>
									  <p>Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/css-transitions-and-transforms-badge-02.png" alt=""/>
									<div>  
                    <h2>CSS Transitions and Transforms</h2>
									  <p>Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage01.png" alt=""/>
									<div>
                    <h2>Bootstrap 4 Basics</h2>
                    <p>Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.</p>
                  </div>
               </li>
          </div>
      </div>
   );
}
const JavaScript =  () => {
   return (
      <div> 
        <div className="content"> 
            <h1> JAVASCRIPT </h1>  
        </div> 
        <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png" alt=""/>
									<div>
                    <h2>JAVASCRIPT Basic</h2>
                    <p>JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png" alt=""/>
									<div>
                    <h2>JavaScript Loops, Arrays and Objects</h2>
                    <p>JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage1.png" alt=""/>
									<div>
                    <h2>jQuery Basics</h2>
                    <p>JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage3.png" alt=""/>
									<div>
                    <h2>AJAX Basics</h2>
                    <p>JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-12.png" alt=""/>
									<div>
                    <h2>Interactive Web Pages with JavaScript</h2>
                    <p>JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.</p>
                  </div>
               </li>
          </div>
          <div className = "content"> 
							<li className="course media group" id="repos">
									<img className= "course-img" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png" alt=""/>
									<div>
                    <h2>Node.js Basics</h2>
                    <p>JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.</p>
                  </div>
               </li>
          </div>

      </div>
   );
}

const Courses = () => {
   return (
      <div>
          <div className="main-content courses">
				<div className="course-header group">							
					<h2>Courses Available</h2> 
          <ul className="course-nav"> 
             <li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
             <li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
             <li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>            
          </ul>
        </div>
      </div>

          <Switch> 
            <Route exact path= "/courses" 
                   render={()=><Redirect to="/courses/html" /> } />

            <Route path = "/courses/html" component = {HTML}/>
            <Route path = "/courses/css" component = {CSS}/>
            <Route path = "/courses/javascript" component = {JavaScript}/>
          </Switch>
      </div>
   );   
}

const NotFoundPage = (props) => {
   return (
      <div> <h2> Error 404! </h2> </div>
   );
}

const App = () => (
  <BrowserRouter>
    <div>
    <header><span className="icn-logo"><i className="material-icons">code</i> </span>
      <ul className="main-nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li> 
        <li><NavLink to="/teachers">Teachers</NavLink></li> 
        <li><NavLink to="/courses">Courses</NavLink></li> 
                
      </ul>
    </header>

      <hr/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/> 
         <Route path="/teachers" component={Teachers}/> 
         <Route path="/courses" component={Courses}/> 
         
         <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default App;