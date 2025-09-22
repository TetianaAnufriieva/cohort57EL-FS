import { useEffect, useState } from "react";
import "./App.css";

interface Address {
  city: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}
function App() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (!response.ok) {
          throw new Error("Ошибка запроса");
        }
        const result: User[] = await response.json();
        setData(result);
      } catch (error) {
        setError("Ошибка при загрузке. Попробуйте позже");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
      }
      {error && <div> Ошибка при загрузке {error}</div>}
      <table>
        <thead>
          <tr>
            <th>
              <strong>ID: </strong>
            </th>
            <th>
              <strong>Имя пользователя: </strong>
            </th>
            <th>
              <strong>Email: </strong>
            </th>
            <th>
              <strong>Город проживания: </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
