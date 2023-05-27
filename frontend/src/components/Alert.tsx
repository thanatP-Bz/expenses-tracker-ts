import { useAppContext } from "../hooks/UseAppContext";

const Alert = () => {
  const { authentication } = useAppContext();

  return (
    <div className={`alert-${authentication.alertType}`}>
      <p>{authentication.alertText}</p>
    </div>
  );
};

export default Alert;
