import { createContext, useState } from 'react';

//? Ini hanya untuk patokan awal, jika disini diubah ga akan ngefek
export const AuthContext = createContext({
  isSignedIn: false,
  setIsSignedIn: () => {},
});

export default function AuthProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
