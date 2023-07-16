import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="flex items-center justify-center">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div>
          <h1>Sign up to Propagate!</h1>
          <div className="my-10">
            <div className="mb-3">
              <input className="p-3 rounded w-full" placeholder="What should we call you?" />
            </div>
            <div className="mb-3">
              <input className="p-3 rounded w-full" placeholder="Email" />
            </div>
            <div>
              <input className="p-3 rounded w-full" placeholder="••••••••" />
            </div>
          </div>
          <div>
            <button className="w-full mb-3">Sign up</button>
          </div>
          <div>
            <button className="w-full">Sign up with Google</button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">CoOL IMAGE</div>
    </section>
  );
};

export default Signup;
