import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NeuralRace from "../../Assets/Projects/NeuralRace.jpg";
import Emoji2 from "../../Assets/Projects/Emoji2.png";
import ThreadsClone from "../../Assets/Projects/ThreadsClone.jpg";
import FineTuning from "../../Assets/Projects/FineTuning.jpg";
import MovieAPI from "../../Assets/Projects/MovieAPI.jpg";
import FootballScraping from "../../Assets/Projects/FootballScraping.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the list of the few projects I have worked on/been working on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emoji2}
              isBlog={false}
              title="Event Organizing Android App - EmojiBrite"
              description="
Emoji Brite is an innovative event management platform developed over four months by a team of six, led by me, using Java, Android Studio, Firebase, JUnit, XML, and Mockito. Designed to simplify hosting and attending events, the app allows organizers to create events without passwords, generate QR codes for check-ins, and track attendees in real-time with geolocation services. It supports profile management, notifications, and social media sharing, enhancing user engagement. The app offers a user-friendly experience with quick check-ins and event browsing without login credentials. Robust data management and real-time messaging are handled through Firebase, ensuring data integrity. Extensive testing using JUnit and Mockito ensured the app's reliability."
              ghLink="https://github.com/SnehalRay/Emoji-Brite---Event-Organizing-App?"
              demoLink="https://drive.google.com/file/d/1yMNuwP4ircgTUtEfdN_-0FOkczy_7bZC/view?usp=drive_link"
              demoText="Download"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NeuralRace}
              isBlog={false}
              title="Brain-Controlled Multiplayer Racing game"
              description="Neural Drive is an innovative car racing game developed during the NatHacks hackathon. Using the Muse 2 device, the game captures the player's focus level to control the car's acceleration and uses head tilts for steering. Built with Unity and C#, it features multiplayer support and real-time brain wave analysis via the BrainFlow API. The game aims to make training focus levels fun and engaging."
              ghLink="https://github.com/SnehalRay/Neural_Drive"
              demoLink="https://youtube.com/shorts/HXh4owlW1L8?feature=shared"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThreadsClone}
              isBlog={false}
              title="Social Media Clone - Threads Clone with AI ChatBot"
              description="Threads Clone is a full-stack MERN application designed to mimic the social media experience of Twitter, offering a dynamic and engaging UI developed using React.js and Chakra UI. The backend is robustly built with Node.js and Express.js, featuring RESTful APIs for authentication, post creation, editing, and interactions. MongoDB schemas and JWT ensure secure data management and authentication, while middleware protects APIs. A standout feature is the integration of a chatbot using Dialogflow, providing an interactive and intelligent user experience. Future plans include integrating Socket.io for real-time chat functionality."
              ghLink="https://github.com/SnehalRay/threads-clone"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FineTuning}
              isBlog={false}
              title="Text Summarization - Fine tuning model"
              description="Developed and fine-tuned a machine learning text summarization model using Facebook’s BART transformer, enhancing performance with over 200 diverse text samples from the Hugging Face dataset. Deployed the model through a user-friendly Flask web interface, incorporating HTML and CSS for real-time summarization, which improved user interaction and accessibility. The project included the implementation and optimization of a custom training pipeline with Hugging Face’s Trainer API, and conducted comprehensive testing for model robustness, reliability, and scalability."
              ghLink="https://github.com/SnehalRay/Text-Summarization-ML-project"
              demoLink="https://youtube.com/shorts/hXSdcm1JbjE?feature=share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieAPI}
              isBlog={false}
              title="Movie Search Engine"
              description="A simple website where user can browse through movies from a Movie db api and then you can click on it and get redirected to the movie trailer on youtube."
              ghLink="https://github.com/SnehalRay/Movie-API"
              demoLink="https://youtube.com/shorts/WOURmrPjOf4?feature=share" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FootballScraping}
              isBlog={false}
              title="Premier League Data & Match Predictor (Ongoing)"
              description="Developing a comprehensive web application that displays detailed data from the last two Premier League seasons, utilizing web scraping techniques. The platform features a machine learning model to predict match outcomes. Built with Springboot, React, and PostgreSQL, this project aims to provide an interactive and insightful experience for football enthusiasts."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
