import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style["header"]}>
      <div className={style["left-cnt"]}>
        <span className={style["dot-icon"]}></span>
        <span className={style["dot-icon"]}></span>
        <span className={style["dot-icon"]}></span>
      </div>
    </div>
  );
};

export default Header;
