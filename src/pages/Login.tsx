import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="flex items-center justify-center">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div>
          <h1>Welcome back!</h1>
          <div className="my-10">
            <div className="mb-3">
              <input className="p-3 rounded w-full" placeholder="Email" />
            </div>
            <div>
              <input className="p-3 rounded w-full" placeholder="••••••••" />
            </div>
          </div>
          <div>
            <button className="w-full mb-3">Sign in</button>
          </div>
          <div>
            <button className="w-full">Sign in with Google</button>
          </div>
          <div className="flex justify-center text-center mt-5">
            Don't have an account?
            <Link to="/signup" className="ml-3">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">CoOL IMAGE</div>
    </section>
  );
};

export default Login;
