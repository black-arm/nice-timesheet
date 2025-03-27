import React from 'react';

const AddUsers: React.FC = () => {
  return (
    <div>
      <h1>Add Users Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;