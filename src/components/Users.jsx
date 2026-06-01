function Users(props){
  return(
    <div className='users-page'>

      <div className='card'>
        <h1>User Management</h1>

        <div className='form-grid'>
          <input
            type='text'
            name='name'
            value={props.formData.name}
            onChange={props.handleChange}
            placeholder='Name'
          />

          <input
            type='email'
            name='email'
            value={props.formData.email}
            onChange={props.handleChange}
            placeholder='Email'
          />

          <input
            type='number'
            name='age'
            value={props.formData.age}
            onChange={props.handleChange}
            placeholder='Age'
          />

          <input
            type='text'
            name='city'
            value={props.formData.city}
            onChange={props.handleChange}
            placeholder='City'
          />
        </div>

        <div className='btn-row'>
          <button onClick={props.handleAdd}>
            {props.editing !== null ? 'Save' : 'Add User'}
          </button>

          {props.editing !== null &&
            <button onClick={props.handleCancel}>Cancel</button>
          }
        </div>

        {props.valid && <p className='error'>{props.valid}</p>}
      </div>

      <div className='sort-bar'>
        <button onClick={() => props.handleSort('name')}>
          Sort by Name
        </button>

        <button onClick={() => props.handleSort('age')}>
          Sort by Age
        </button>
      </div>

      {!props.users.length ? (
        <p className='empty'>No users registered.</p>
      ) : (
        <div className='user-list'>
          {props.users.map((user, index) => (
            <div className='user-card' key={index}>
              <h3>{user.name}</h3>

              <p>{user.email}</p>
              <p>Age: {user.age}</p>
              <p>City: {user.city}</p>

              <p>
                Status:
                <strong>
                  {user.active ? ' Active' : ' Inactive'}
                </strong>
              </p>

              <button
                onClick={() => props.handleEdit(index)}
                disabled={props.editing !== null && props.editing !== index}
              >
                Edit
              </button>

              <button onClick={() => props.handleDelete(index)}>
                Delete
              </button>

              <button onClick={() => props.handleActive(index)}>
                {user.active ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Users