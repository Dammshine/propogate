import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  };

  return (
    <section className="flex items-center justify-center">
      <form className="flex-1 flex flex-col justify-center items-center">
        <div>
          <h1>Sign up to Propagate!</h1>
          <div className="my-10">
            <div className="mb-3">
              <input className="p-3 rounded w-full" placeholder="What should we call you?" />
            </div>
            <div className="mb-3">
              <input className="p-3 rounded w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input className="p-3 rounded w-full" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button className="w-full mb-3">Sign up</button>
          </div>
          <div>
            <button className="w-full">Sign up with Google</button>
          </div>
        </div>
        <div className="flex justify-center text-center mt-5">
          Already have an account?
          <Link to="/login" className="ml-3">
            Sign in
          </Link>
        </div>
      </form>
      <div className="flex-1 flex justify-center">CoOL IMAGE</div>
    </section>
  );
};

export default Signup;
