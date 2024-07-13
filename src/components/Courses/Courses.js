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
              courseNumber="CMPUT 272"
              courseName="Formal Systems and Logic in Computing Science / Discrete Math"
              description="An introduction to the tools of set theory, logic, and induction, and their use in the practice of reasoning about algorithms and programs. Basic set theory; the notion of a function; counting; propositional and predicate logic and their proof systems; inductive definitions and proofs by induction; program specification and correctness"
              whatIDone="We had weekly quizzes where we had to prove things based on induction and more. Dealt with sets, functions, relations and more"
              whatILearnt="Just proving in general. Did well and got 4.0"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 201"
              courseName="Practical Programming Methodology"
              description="Introduction to the principles, methods, tools, and practices of the professional programmer. The lectures focus on the fundamental principles of software engineering based on abstract data types and their implementations. The laboratories offer an intensive apprenticeship to the aspiring software developer. Students use C and software development tools of the Unix environment."
              whatIDone="An introduction to C, with extensive labs due everything from ranging to pointers, structs, bit wise operations and more. Used it in the linux system and was a fun course to debug."
              whatILearnt="Learnt C, had an introduction to C++, learnt linux commands, dealt with bitwise operators, pointers, structs and more."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 204"
              courseName="Algorithms I"
              description="The first of two courses on algorithm design and analysis, with emphasis on fundamentals of searching, sorting, and graph algorithms. Examples include divide and conquer, dynamic programming, greedy methods, backtracking, and local search methods, together with analysis techniques to estimate program efficiency"
              whatIDone="The course is about algorithms. We had quizzes due everything where questions were from different algorithm questions and we had to write pseudocode on it. The course had no implementation of actual code but we did write pseudocodes. We even had to prove algorithms with induction and loop invariant. Other things involved were doing recurrence trees, dealing with big O, small O, and more from a theoretical and mathematical POV."
              whatILearnt="Learned about different algorithms like sorting (Merge, Quick, Bubble, Insert and more), Dynamic, Greedy, BST, Graphs, MST and more. Overall a fun course and enjoyed it."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 291"
              courseName="Introduction to File and Database Management"
              description="Basic concepts in computer data organization and information processing; entity-relationship model; relational model; SQL and other relational query languages; storage architecture; physical organization of data; access methods for relational data. Programming experience (e.g., Python) is required for the course project."
              whatIDone="A course about database management. The first part went on with learning about ER Diagrams, SQL and relational database. Had an assignment on developing a database system with ER Diagrams and Relational tables on Twitter, and the second assignment was on solving 10 challenging queries. We had 2 mini projects. The first was that we as a group of 4 developed a python program where we built a twitter simulator in the command prompt and fetched/added data from sql. We could make an account, post, get suggested feed, search user, like, follow, reply and more. The second project is similar to the first one where here we used MongoDB to deal with a larger database which was found from Kaggle. The other part of the course was about file management system"
              whatILearnt="Developed a deep understanding of how databases and file management system works in a technical level. Learnt to collaborate with a team by using visual communicative techniques like the ER Diagram. Learnt MongoDB and SQL"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 301"
              courseName="Introduction to Software Engineering"
              description="Object-oriented design and analysis, with interactive applications as the primary example. Topics include: software process; revision control; Unified Modeling Language (UML); requirements; software architecture, design patterns, frameworks, design guidelines; unit testing; refactoring; software tools."
              whatIDone="The main objective of this course was to build an app with a team for 4 months by having a 'client' who is your TA. We built an event organization app which has geolocation, creating, viewing, scanning qr codes to check into events, notifications and more. Other than the app, in class we learnt about design patterns, various UML diagrams, CRC Cards, State patterns and more"
              whatILearnt="Learnt Java. Integrated it with a noSQL database like Firebase. Documented code with Javadocs. Wrote Unit tests with JUnit and Mockito. Implemented a lot of features in the app which made me work on apis, maps, firebase messaging for notification, scanning qr codes, and the overall structure of the app. BEST COURSE EVER SO FAR."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 267"
              courseName="Basics of Machine Learning"
              description="This course introduces the fundamental statistical, mathematical, and computational concepts in analyzing data. The goal for this introductory course is to provide a solid foundation in the mathematics of machine learning, in preparation for more advanced machine learning concepts. The course focuses on univariate models, to simplify some of the mathematics and emphasize some of the underlying concepts in machine learning, including: how should one think about data, how can data be summarized, how models can be estimated from data, what sound estimation principles look like, how generalization is achieved, and how to evaluate the performance of learned models.."
              whatIDone="Implemented estimation algorithms such as maximum likelihood and linear regression using Julia. Analyzed various types of data and performed tasks such as summarizing scalar data and analyzing paired data. Applied optimization techniques, including gradient descent, and worked on regression and classification problems."
              whatILearnt="Developed a solid foundation in statistical and mathematical principles underlying machine learning. Learned the data analysis process, including understanding data properties, choosing models, and defining computational problems. Gained practical skills in implementing estimation techniques, optimization methods, and evaluating model performance."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 365"
              courseName="Introduction to Reinforcement Learning"
              description="This course provides an introduction to reinforcement learning, which focuses on the study and design of learning agents that interact with a complex, uncertain world to achieve a goal. The course will cover multi- armed bandits, Markov decision processes, reinforcement learning, planning, and function approximation (online supervised learning). The course will take an information-processing approach to the study of intelligence and briefly touch on perspectives from psychology, neuroscience, and philosophy. The course will use the University of Alberta MOOC on Reinforcement Learning. Any student who understands the material in this course will understand the foundations of much of modern probabilistic artificial intelligence (AI) and be prepared to take more advanced courses, or to apply AI tools and ideas to real-world problems."
              whatIDone="WILL TAKE IT FALL 2024"
              whatILearnt="WILL TAKE IT FALL 2024"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 366"
              courseName="Search and Planning in Artificial Intelligence"
              description="This course provides an introduction to search and planning in artificial intelligence. The course covers deterministic single-agent and multi-agent problems. Students will learn how to model real-world problems as state-space search problems and how to solve such problems. The course covers algorithms for solving deterministic shortest path problems with factored and non-factored states, combinatorial optimization problems, constraint satisfaction problems, and multi- agent problems."
              whatIDone="WILL TAKE IT FALL 2024"
              whatILearnt="WILL TAKE IT FALL 2024"/>
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="CMPUT 229"
              courseName="Computer Organization and Architecture I"
              description="Number representation, computer architecture and organization, instruction-set architecture, assembly-level programming, procedures, stack frames, memory access through pointers, exception handling, computer arithmetic, floating-point representation, datapath, control logic, pipelining, memory hierarchy, virtual memory."
              whatIDone="WILL TAKE IT FALL 2024"
              whatILearnt="WILL TAKE IT FALL 2024"
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
              courseName="Calculus for Business and Economics I"
              description="The derivative as a rate of change. Differentiation of elementary, trigonometric, exponential, and logarithmic functions. The definite integral as a summation. Integration. The Fundamental Theorem of Calculus. Optimization. Applications in the context of business and economics"
              whatIDone="Completed assignments, quizzes, and exams covering limits, derivatives, integrals, and applications of calculus."
              whatILearnt="Developed a solid understanding of calculus concepts and their applications in various fields, but mainly business."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 156"
              courseName="Calculus for Business and Economics II"
              description="Techniques and applications of integration. Improper integrals. Partial differentiation. Multivariate optimization. Probability and calculus. Applications in the context of business and economics."
              whatIDone="Completed assignments, quizzes, and exams covering limits, derivatives, integrals, and applications of calculus."
              whatILearnt="Developed a solid understanding of calculus concepts and their applications in various fields, but mainly business."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 125"
              courseName="Linear Algebra I"
              description="Systems of linear equations. Vectors in n-space, vector equations of lines and planes. Matrix algebra, inverses and invertibility. Introduction to linear transformations. Subspaces of n-space. Determinants. Introduction to eigenvalues and eigenvectors. Complex numbers. Dot product, cross product and orthogonality."
              whatIDone="Completed assignments, quizzes, and exams covering linear algebra as a whole"
              whatILearnt="Developed a solid understanding of the course"
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="MATH 214"
              courseName="Calculus 3"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Completed assignments, quizzes, and exams covering limits, derivatives, integrals, and applications of calculus."
              whatILearnt="Developed a solid understanding of calculus concepts and their applications in various fields"
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="STAT 151"
              courseName="Introduction to Applied Statistics I"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="USED R. Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
          <Col md={4} className="course-card">
            <CourseCard
              courseNumber="STAT 252"
              courseName="Introduction to Applied Statistics II"
              description="Introduction to descriptive statistics, probability, random variables, and inferential statistics including confidence intervals and hypothesis testing."
              whatIDone="Worked on statistical analysis projects, completed assignments, and exams."
              whatILearnt="USED IBM SPSS. Gained knowledge of fundamental statistical concepts and their applications in data analysis."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;
