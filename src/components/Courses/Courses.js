import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";
import Particle from "../Particle";

function Courses() {
  return (
    <Container fluid className="course-section">
      <Particle />
      <Container>
        <h1 className="course-heading">
          My <strong className="purple">Courses</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few courses I've taken recently and will take in the upcoming semester.
        </p>
        <h2 className="course-category-heading">
          Computer Science Courses
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Add your Computer Science courses here */}
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 174"
              courseName="Introduction to the Foundations of Computation I"
              description="CMPUT 174 and 175 use a problem-driven approach to introduce the fundamental ideas of Computing Science. Emphasis is on the underlying process behind the solution, independent of programming language or style. Basic notions of state, control flow, data structures, recursion, modularization, and testing are introduced through solving simple problems in a variety of domains such as text analysis, map navigation, game search, simulation, and cryptography. Students learn to program by reading and modifying existing programs as well as writing new ones. No prior programming experience is necessary."
              whatIDone="The course was primarily in Python as it is an introduction course to Computer Science. We have started learning about the typical lists, loops, and more. Towards the end, we learnt about APIs and Object Oriented Programming. We had assignments every week."
              whatILearnt="Helped me gain thinking logically while coding. Gave me experiences in problem solving and my first experience in OOP and API usage."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 175"
              courseName="Introduction to the Foundations of Computation II"
              description="A continuation of CMPUT 174, revisiting topics of greater depth and complexity. More sophisticated notions such as objects, functional programming, and Abstract Data Types are explored. Various algorithms, including popular searching and sorting algorithms, are studied and compared in terms of time and space efficiency. Upon completion of this two course sequence, students from any discipline should be able to build programs to solve basic problems in their area, and will be prepared to take more advanced Computing Science courses."
              whatIDone="The course was a continuation and a 2nd fundamental course to the intro of CS. Here we went into data structures and algorithm implementations in Python as we learnt about BSTs, Stacks, Queues, Linked Lists, Sorting. We had 3 main assignments which made us explore all of this while making us scrape data and using objects"
              whatILearnt="Gained a solid understanding of data structures and algorithm by implementing it in Python"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 201"
              courseName="Practical Programming Methodology"
              description="Introduction to the principles, methods, tools, and practices of the professional programmer. The lectures focus on the fundamental principles of software engineering based on abstract data types and their implementations. The laboratories offer an intensive apprenticeship to the aspiring software developer. Students use C and software development tools of the Unix environment."
              whatIDone="Developed efficient algorithms for complex problems."
              whatILearnt="Enhanced problem-solving and algorithmic thinking."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 204"
              courseName="Algorithms I"
              description="The first of two courses on algorithm design and analysis, with emphasis on fundamentals of searching, sorting, and graph algorithms. Examples include divide and conquer, dynamic programming, greedy methods, backtracking, and local search methods, together with analysis techniques to estimate program efficiency"
              whatIDone="Managed software projects and implemented best practices for product management."
              whatILearnt="Learned about agile methodologies, product lifecycles, and quality assurance."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 291"
              courseName="Introduction to File and Database Management"
              description="Basic concepts in computer data organization and information processing; entity-relationship model; relational model; SQL and other relational query languages; storage architecture; physical organization of data; access methods for relational data. Programming experience (e.g., Python) is required for the course project."
              whatIDone="Completed projects involving supervised and unsupervised learning."
              whatILearnt="Developed a deep understanding of various machine learning algorithms and their applications."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 301"
              courseName="Introduction to Software Engineering"
              description="Object-oriented design and analysis, with interactive applications as the primary example. Topics include: software process; revision control; Unified Modeling Language (UML); requirements; software architecture, design patterns, frameworks, design guidelines; unit testing; refactoring; software tools."
              whatIDone="Designed and implemented distributed systems projects."
              whatILearnt="Gained insights into the challenges and solutions in building distributed systems."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 267"
              courseName="Basics of Machine Learning"
              description="This course introduces the fundamental statistical, mathematical, and computational concepts in analyzing data. The goal for this introductory course is to provide a solid foundation in the mathematics of machine learning, in preparation for more advanced machine learning concepts. The course focuses on univariate models, to simplify some of the mathematics and emphasize some of the underlying concepts in machine learning, including: how should one think about data, how can data be summarized, how models can be estimated from data, what sound estimation principles look like, how generalization is achieved, and how to evaluate the performance of learned models.."
              whatIDone="Designed and implemented distributed systems projects."
              whatILearnt="Gained insights into the challenges and solutions in building distributed systems."
            />
          </Col>
        </Row>

        <h2 className="course-category-heading">
          Math/Stat Courses
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Add your Math/Stat courses here */}
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 154"
              courseName="Calculus I"
              description="Introduction to the fundamental concepts of calculus, including limits, derivatives, integrals, and their applications."
              whatIDone="Completed assignments, quizzes, and exams covering limits, derivatives, integrals, and applications of calculus."
              whatILearnt="Developed a solid understanding of calculus concepts and their applications in various fields."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 156"
              courseName="Introduction to Applied Statistics I"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 125"
              courseName="Introduction to Applied Statistics I"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 214"
              courseName="Introduction to Applied Statistics I"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="STAT 151"
              courseName="Introduction to Applied Statistics I"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="STAT 252"
              courseName="Introduction to Applied Statistics I"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;
