import s from "./ErrorMessage.module.css";

type Props = {
  error: boolean;
};

const ErrorMessage = ({ error }: Props) => {
  return (
    error && (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    )
  );
};

export default ErrorMessage;
