function About(){
  return(
    <div className='page'>
      <div className='card'>
        <h1>About This Project</h1>

        <p>
          This project was created to practice React concepts
          and frontend development.
        </p>

        <h3>Features</h3>

        <ul>
          <li>CRUD Operations</li>
          <li>React Router</li>
          <li>LocalStorage</li>
          <li>Dark Mode</li>
          <li>Form Validation</li>
        </ul>

        <h3>Technologies</h3>

        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>React Router DOM</li>
        </ul>
      </div>
    </div>
  )
}

export default About