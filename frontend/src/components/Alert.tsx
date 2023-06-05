import { useAppContext } from "../hooks/UseAppContext";

const Alert = () => {
  const { alert } = useAppContext();

  return (
    <div className={`alert-${alert.alertType}`}>
      <p>{alert.alertText}</p>
    </div>
  );
};

export default Alert;
