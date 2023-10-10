import { useRouteError } from "react-router-dom";

const Error = () => {

  const error = useRouteError();

  return (
    <div className="error">
      <h3>Page not found 😕!</h3>
      <h3>{error.data}</h3>        
    </div>
  )
}

export default Error;