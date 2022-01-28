import React, { useState } from 'react';

export const CardLogin = () => {

  const [token, setToken] = useState();
  
  return (
    <div className='wrapper p-[20px]'>
      <div className="login-wrapper flex flex-col items-center">
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}