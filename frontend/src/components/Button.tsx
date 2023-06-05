interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#eb5777] px-5 py-2 text-white shadow-lg"
    >
      log out
    </button>
  );
};

export default Button;
