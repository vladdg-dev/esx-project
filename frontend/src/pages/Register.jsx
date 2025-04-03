import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import EsxLogo from "../assets/EsxLogo";
import { useAuth } from "../contexts/auth-context-helper";

export default function Register() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  // Register user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = e.target.elements;
    const body = {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: cpassword.value,
    };
    try {
      const resp = await axios.post("/register", body);
      if (resp.status === 200) {
        setUser(resp.data.user);
        navigate("/");
      }
    } catch (error) {
      if (error?.response?.status === 422) {
        console.log(error?.response?.data.errors);
        if (error?.response?.data.errors.name) {
          setNameError(error?.response?.data.errors.name[0]);
        } else {
          setNameError("");
        }
        if (error?.response?.data.errors.email) {
          setEmailError(error?.response?.data.errors.email[0]);
        } else {
          setEmailError("");
        }
        if (error?.response?.data.errors.password) {
          setPasswordError(error?.response?.data.errors.password[0]);
        } else {
          setPasswordError("");
        }
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <EsxLogo height="150" width="250" color="white" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Înregistrare
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Numele de familie
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Vlad Dragusanu"
                  required
                />
                {nameError && (
                  <p className="text-sm text-red-600">{nameError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresa de email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="vlad.dragusanu@gmail.com"
                  required
                />
                {emailError && (
                  <p className="text-sm text-red-600">{emailError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parola
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {passwordError && (
                  <p className="text-sm text-red-600">{passwordError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cpassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirmă parola
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Înregistrează-te
              </button>
              <p className="text-sm mx-2 font-light text-gray-500 dark:text-gray-400">
                Ești deja înregistrat?
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1"
                >
                  Intră în cont
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
