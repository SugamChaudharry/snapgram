import { IContextType } from '@/types'
import {createContext, useContext, useEffect, useState} from 'react'

export const INITIAL_USER = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
  bio: '',
}

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticted: false,
  setUser: ()=>{},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IContextType> (INITIAL_STATE);

const AuthProvider = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext