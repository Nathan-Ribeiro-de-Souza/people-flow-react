function Home({ users }){
  return(
    <div className='page'>
      <div className='card'>
        <h1>React User Manager</h1>

        <p>
          A simple CRUD application built with React,
          React Router and LocalStorage.
        </p>

        <h2>Total Users: {users.length}</h2>
      </div>
    </div>
  )
}

export default Home