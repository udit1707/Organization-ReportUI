import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

const ErrorHandler = () => {
  const navigate = useNavigate();
  return (
    <div className={style["error-cnt"]}>
      <h1 className={style["main"]}>Error Loading</h1>
      <span className={style["back-home"]} onClick={() => navigate("/")}>
        Back to Home
      </span>
    </div>
  );
};

export default ErrorHandler;
