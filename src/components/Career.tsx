import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>Syntexchub (Remote)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed backend APIs using Node.js and Express, implemented server-side logic, and worked with REST APIs and backend architecture. Built a professional developer portfolio while following industry best practices
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Yuga Yatra Retail (OPC) Pvt. Ltd., Bangalore</h5>
              </div>
              <h3>2025  –   2026</h3>
            </div>
            <p>
              Worked on web and mobile applications using modern AI-based tools and Firebase technologies. Designed UI/UX elements, contributed to e-commerce platform tasks, collaborated on real client projects, and supported digital product development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & Computer Science Learner</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Building full-stack applications using React, Next.js, Node.js, and Python. Developing projects such as a cloud storage platform and an emotion detection app while continuously improving problem-solving and software engineering skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
