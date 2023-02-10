import tlogo from "../assets/letter-t.svg";

const Aboutme = () => {
  return (
    <>
    <div className="col-lg-8 mx-auto p-4 py-md-5">
    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
      <a className="d-flex align-items-center text-dark text-decoration-none">
        <img src={tlogo} width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"/>
        <span className="fs-4">Talha Demirtaş</span>
      </a>
    </header>
    <main>
      <h1>Hello</h1>
      <p className="fs-5 col-md-8">+1 years experienced in IT  front-end developer, (Formerly 6 year exprienced Mechanical Engineer) interested in tech and writing codes, skilled at developing complex solutions, creating responsive designs, high energy and integrity. Quickly grasp new technologies and concepts to develop innovative and creative solutions to problems. Ability to create algorithms effectively, and interact positively and communicate appropriately  with  team  members.  Always  eager  to  learn  various  technologies,  tools  and  libraries. Especially interested in the Front end/Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime student.</p>
  
      <div className="mb-5">
        <a href="https://github.com/TalhaDemirtas" target="_blank" className="btn btn-primary btn-lg px-4">My GitHub</a>
      </div>
  
      <hr className="col-3 col-md-2 mb-5"/>
  
      <div className="row g-5">
        <div className="col-md-6">
          <h2>Projects</h2>
          <ul className="icon-list ps-0">
          <hr/>
            <li className="d-flex align-items-start mb-1">Weather Condition App : The purpose of this project is to make a weather application using the https://api.openweathermap.org api.It is to bring and display the weather conditions of the location desired by the user. Skills/Tools : Async await methods.</li>
            <hr/>
            <li className="d-flex align-items-start mb-1">Movie App :  In this project, it is aimed to display cinema posters by using the tmdb api. There is a search feature according to the entered word. Skills/Tools : React-router library, Bootstrap library, Axios library and Firebase</li>
            <hr/>
            <li className="d-flex align-items-start mb-1">FireContact App : In this project, it is aimed to create a contact list using firebase realtime-database. Adding, deleting and updating contacts can be done. Skills/Tools : Firebase realtime-database library, Semantic-ui library and React-toastify library.</li>
            <hr/>
            <li className="d-flex align-items-start mb-1">Blog App :  In this project, it is aimed to create blog posts using firebase realtime-database and display them on the dashboard.Skills/Tools : Firebase realtime-database library, Material-ui library, React-router library, Formik and yup libraries, React-toastify library, Firebase.</li>
          </ul>
        </div>
  
        <div className="col-md-6">
          <h2>Certifications</h2>
          <ul className="icon-list ps-0">
          <hr/>
            <li className="d-flex align-items-start mb-1">Clarusway Front-End Dev Course Certificate - Aug 2022 </li>
            <hr/>
            <li className="d-flex align-items-start mb-1">Clarusway React Course Certificate - Aug 2022</li>
            <hr/>
            <li className="d-flex align-items-start mb-1">Clarusway JavaScript Course Certificate - Jun 2022 </li>
            <hr/>
            <li className="d-flex align-items-start mb-1">Clarusway HTML & CSS Course Certificate - Jun 2022</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
  </>
  )
}

export default Aboutme