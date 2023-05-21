import { useAppContext } from "../hooks/UseAppContext";

const Alert = () => {
  const { alert } = useAppContext();

  const danger = "mb-2 border-l-4 border-red-500 bg-red-100 p-4 text-red-700";
  const success =
    "mb-2 border-l-4 border-green-500 bg-green-100 p-4 text-green-700";

  return (
    <div>
      <p>Log in Successfully! please wait...</p>
    </div>
  );
};

export default Alert;
