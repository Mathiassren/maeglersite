import React, { useState } from "react";
import { useAuth } from "../components/Auth/AuthContext"; // Correct the path as necessary
import ReactLoading from "react-loading";

function LoginForm() {
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setLoginError("");
  };

  //loading logic
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      setIsLoading(false);
    } catch (error) {
      setLoginError(error.message || "Login failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pt-[120px] pb-[120px] bg-gray-100">
      <div className="w-[920px] h-[720px] bg-white shadow-lg">
        {!isSignUp ? (
          <>
            <div className="flex items-center justify-center bg-gray-100">
              <div className="w-[920px] h-[720px] flex flex-col justify-between p-12 bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Log ind på din konto
                </h3>
                <div className="flex flex-col items-center">
                  <form onSubmit={handleLogin} className="w-full max-w-md">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        id="email"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        id="password"
                        required
                      />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <button
                        type="submit"
                        className="w-full px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 flex justify-center items-center"
                      >
                        {isLoading ? (
                          <ReactLoading
                            type="spin"
                            color="#fff"
                            height={20}
                            width={20}
                          />
                        ) : (
                          "Log ind"
                        )}
                      </button>
                    </div>
                    {loginError && (
                      <div className="text-center">
                        {" "}
                        <p className="text-red-500 text-center mt-4">
                          Forkert email eller password
                        </p>
                        <a>Glemt email/password</a>
                      </div>
                    )}
                  </form>
                </div>
                <div className="">
                  <p className="pl-[145px] mb-[16px] text-left">Log ind med</p>
                  <div className="flex justify-center">
                    <button className="py-2 w-[170px] text-white bg-red-500 rounded-md hover:bg-red-700 flex items-center justify-center mx-2">
                      Google
                    </button>
                    <button className="px-4 py-2 w-[170px] text-white bg-blue-600 rounded-md hover:bg-blue-800 flex items-center justify-center mx-2">
                      Facebook
                    </button>
                    <button className="px-4 py-2 w-[170px] text-white bg-blue-400 rounded-md hover:bg-blue-600 flex items-center justify-center mx-2">
                      X
                    </button>
                  </div>
                </div>
                <div className="mt-6 text-center text-sm">
                  <a
                    href="#"
                    onClick={toggleForm}
                    className="text-blue-600 hover:underline"
                  >
                    Har du ikke en konto? Opret bruger.
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold pt-[72px] text-center mb-8">
              Opret bruger hos Din Mægler
            </h3>
            <div className="flex flex-col items-center">
              <form action="" className="w-full max-w-md">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Fulde navn
                  </label>
                  <input
                    type="text"
                    placeholder="Fulde navn"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="fullName"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email adresse
                  </label>
                  <input
                    type="email"
                    placeholder="Email adresse"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="password"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Bekræft password
                  </label>
                  <input
                    type="password"
                    placeholder="Bekræft password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="confirmPassword"
                  />
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button className="w-full px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                    Opret bruger
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
