import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserType = 'personal' | 'company' | null;

interface UserProfile {
  email: string;
  name: string;
  age?: number;
  job?: string;
  companyName?: string;
  startingDate?: string;
  companyType?: string;
  preferences?: string[];
  usage?: Record<string, number>;
  transactions?: {date: string;description: string;amount: number;}[];
  cash?: number;
  type: UserType;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, userType: UserType) => Promise<void>;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: {children: ReactNode;}) {
  const [user, setUser] = useState<UserProfile | null>(null);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    // For demo purposes, we're just setting a mock user
    setUser({
      email,
      name: 'John Doe',
      type: 'personal',
      age: 30,
      job: 'Designer',
      preferences: ['Graphic Design', 'UI/UX'],
      usage: { JaluCourse: 2, JaluMentoring: 5, JaluRequest: 3 },
      transactions: [
      { date: '2023-10-15', description: 'Course Payment', amount: -20000 },
      { date: '2023-10-01', description: 'Top Up', amount: 100000 }],

      cash: 80000
    });
  };

  const signup = async (email: string, password: string, userType: UserType) => {
    // In a real app, this would make an API call to register the user
    if (userType === 'personal') {
      setUser({
        email,
        name: 'New User',
        type: 'personal',
        preferences: [],
        usage: { JaluCourse: 0, JaluMentoring: 0, JaluRequest: 0 },
        transactions: [],
        cash: 0
      });
    } else {
      setUser({
        email,
        name: 'New User',
        type: 'company',
        companyName: 'New Company',
        companyType: 'Creative Agency',
        startingDate: new Date().toISOString().split('T')[0],
        preferences: [],
        usage: { JaluCourse: 0, JaluMentoring: 0, JaluRequest: 0 },
        transactions: [],
        cash: 0
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    if (user) {
      setUser({ ...user, ...profile });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>);

}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}