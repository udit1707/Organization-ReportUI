import style from "./style.module.scss";

interface DetailsCardInfoProps {
  icon: any;
  name: any;
}
const DetailsCardInfo: React.FC<DetailsCardInfoProps> = ({ icon, name }) => {
  return (
    <span className={style["info-cnt"]}>
      <span className={style["icon"]}>{icon}</span>
      <span className={style["info-text"]}>{name}</span>
    </span>
  );
};

export default DetailsCardInfo;
