import React, {useState} from 'react';

// context to be used for sharing user state
import UserContext from './context/UserContext';

const App = () => {
  const [user, setUser] = useState(null);
 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      Hey
    </UserContext.Provider>
  );
}

export default App;
