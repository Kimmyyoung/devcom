import React, {useState, useEffect} from 'react'
import axios from 'axios';

interface UserType {
  id: number, 
  username: string,
  email: string,
}

interface UserFetch {
  user: UserType | null,
  loading: boolean,
  error: Error | null
}

const useUserFetch = (token: any) : UserFetch => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);


  const profileURL = "http://localhost:8080/users/profile";

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

    fetchData();
  }, [token]);

  return ({ user, loading, error})
}

export default useUserFetch;

