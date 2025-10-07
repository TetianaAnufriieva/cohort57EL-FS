import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IUser } from "./UserList";
import axios from "axios";
import { LanguageContext, type ILanguageContext } from "../../utils/languageContext";

const UserDetails = () => {
  //Получаем инфо о параметре id из адресной строки
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
   const { language } = useContext<ILanguageContext>(LanguageContext);

  useEffect(() => {
    axios
      .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (!user){
    return <div className="container mt-4">{language === "ru"
              ? "Пользователь не найден"
              : language === "en"
              ? "User not found"
              : "Benutzer nicht gefunden"}</div>
  }

  return (
    <div className="container mt-4" >
     <h2>{language === "ru"
              ? "Профиль пользователя"
              : language === "en"
              ? "User profile"
              : "Benutzerprofil"}</h2>
     <div className="card mt-3 shadow-sm">
        <div className="card-body">
        <h4 className="card-title">{user.name}</h4>
         <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <p className="card-text"><strong>{language === "ru"
          ? "Емейл: "
          : language === "en"
          ? "Email: "
          : "Email: "}</strong>{user.email}</p>
          <p className="card-text"><strong>{language === "ru"
          ? "Телефон: "
          : language === "en"
          ? "Phone: "
          : "Telefon: "}</strong>{user.phone}</p>
          <p className="card-text"><strong>{language === "ru"
          ? "Вебсайт: "
          : language === "en"
          ? "Website: "
          : "Website: "}</strong><a href={`http://${user.website}`} target="blank">{user.website}</a></p>  
          <Link to="/users" className="btn btn-secondary btn-sm">{language === "ru"
          ? "Вернуться назад к списку пользователей"
          : language === "en"
          ? "Return to the user list"
          : "Zurück zur Benutzerliste"}</Link>      
        </div>
     </div>
      <div>
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div>{error && <>Ошибка при загрузке данных: {error}</>}</div>
    </div>
  );
};

export default UserDetails;
