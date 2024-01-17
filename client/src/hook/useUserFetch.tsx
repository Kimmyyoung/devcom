import React, {useState, useEffect} from 'react'
import axios from 'axios';

interface UserType {
  id: number, 
  username: string,
  email: string,
  role: string,
}

interface UserFetch {
  user?: UserType,
  loading: boolean,
  error?: Error
}

const profileURL = "https://devcom-0cbe786b171a.herokuapp.com/users/profile";


const useUserFetch = () : UserFetch => {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  // const [token, setToken] = useState("");

	const [token, setToken] = useState(sessionStorage.getItem('token') || "");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedToken = sessionStorage.getItem('token') || "";
  //     setToken(storedToken);
  //   }
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<UserType>(profileURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } );
        setUser(res.data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    }
  
    if (typeof window !== "undefined") {
      fetchData();
    }
  }, [token]);

  return ({ user, loading, error})
}

export default useUserFetch;

