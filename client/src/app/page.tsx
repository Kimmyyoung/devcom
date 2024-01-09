'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import RootLayout from './dashboard/layout';
import Home from './dashboard/page';
import validator from 'validator';
import DarkMode from '@/components/DarkMode';

const loginURL = 'http://localhost:8080/users/login';
const signupURL = 'http://localhost:8080/users/signup';

const Page = () => {
	const [token, setToken] = useState(sessionStorage.getItem('token') || "");
	const [showLogin, setShowLogin] = useState(true);
	
	const [isLoginError, setIsLoginError] = useState(false);
	const [isSignupError, setIsSignupError] = useState(false);
	const [errormessage, setErrorMessage] = useState("");
	const [validError, setValidError] = useState("");

	// form validation
	const checkEmail = (email : string) => {
		validator.isEmail(email) ? setValidError("") : setValidError("Please enter valid email")
	};

	const checkPassword = (password : string) => {
		validator.isStrongPassword(password) ? setValidError("") : setValidError("Please enter over 8 characters password");
	}


	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post(loginURL, {
				email: e.target.email.value,
				password: e.target.password.value
			});
			

			sessionStorage.setItem('token', res.data.token);
			setToken(res.data.token);
			setIsLoginError(false);
			setErrorMessage("");
		} catch (err) {
			setIsLoginError(true);

			if (err.response.status === 401) {
				setErrorMessage("Please check your email and password");
			}
			setErrorMessage("Please check your email and password");
		}
	};

	const handleSignup = async (e) => {
		e.preventDefault();
	
		try {
			const res = await axios.post(signupURL, {
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
				role: e.target.role.value
			});
			
			setIsSignupError(false);
			setErrorMessage(`Successfully created account ${res.config.data.username}}`);

		} catch (err) {
			if (err.request.status === 401) {
				setIsSignupError(true);
				setErrorMessage("Already have account? Please login");
			}
		}
	};

	const renderLogin = () => {
		return (
			<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-slate-800">
				<div className="relative py-3 sm:max-w-xl sm:mx-auto">
			<div
				className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
			</div>
					<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-slate-800">
					<DarkMode />
				<div className="max-w-md mx-auto">
					<div className="flex flex-row gap-3">
								<h1 className="text-2xl text-white rounded px-3 bg-gradient-to-r from-blue-300 to-blue-600 font-semibold">DEVCOM</h1>
								<h1 className="text-2xl font-semibold uppercase dark:text-white">Login</h1>
							</div>
							

							<form className="divide-y divide-gray-200" onSubmit={handleLogin}>
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 dark:text-white">
							<div className="relative">
										<input id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:text-white dark:bg-slate-800" placeholder="Email address" 
  									onBlur={(e) => checkEmail(e.target.value)} 
										/>

										<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-white">Email Address</label>
							</div>
							<div className="relative">
								<input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:bg-slate-800 dark:text-white" placeholder="Password" 
								onBlur={(e) => checkPassword(e.target.value)}
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-white">Password</label>
									</div>
									
							<div className="relative flex flex-col gap-2">
										<button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
										<span className="text-gray-500 dark:text-slate-400">You don't have account?
											<span onClick={()=>setShowLogin(!showLogin)}  className="cursor-pointer ml-2 text-blue-500">Signup</span>
										</span>
							</div>
						</div>
							</form>
							
							<div className="text-red-500 text-center dark:text-white">
								{validError && <p>{validError}</p>}
							</div>

							<div className="text-red-500 text-center dark:text-white">
								{isLoginError && <p>{errormessage}</p>}
							</div>	

				</div>
			</div>
		</div>
	</div>
		)
	}

	const renderSignup = () => {
		return (
			<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-slate-800">
		<div className="relative py-3 sm:max-w-xl sm:mx-auto">
			<div
				className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
			</div>
					<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-slate-800">
					<DarkMode />
				<div className="max-w-md mx-auto">
					<div className="flex flex-row gap-3">
								<h1 className="text-2xl text-white rounded px-3 bg-gradient-to-r from-blue-300 to-blue-600 font-semibold">DEVCOM</h1>
								<h1 className="text-2xl font-semibold uppercase dark:text-white">Signup</h1>
						</div>
							<form className="divide-y divide-gray-200" onSubmit={handleSignup}>
								<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 dark:text-white">
									<div className="relative">
									 <input id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:text-white dark:bg-slate-800" placeholder="User Name" />
										<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-white">User Name</label>
									</div>
	
									<div className="relative">              
								<input id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:text-white dark:bg-slate-800" placeholder="Email address"
								onBlur={(e)=>checkEmail(e.target.value)}
								/>
								<label className="absolute left-0 -top-5.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-white">Email Address</label>
							</div>
							<div className="relative">
								<input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:text-white dark:bg-slate-800" placeholder="Password" 
								onBlur={(e)=>checkPassword(e.target.value)}
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-white">Password</label>
									</div>

									<div className="relative">
										<select id="role" name="role" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 dark:text-white dark:bg-slate-800">
											<option value="" disabled selected hidden>Select Role</option>
											<option value="admin">Admin</option>
											<option value="developer">Developer</option>
										</select>
										<label htmlFor="role" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:text-slate-400">Role</label>
									</div>

									<div className="text-red-500 text-center dark:text-slate-400">
										{validError && <p>{validError}</p>}
									</div>

									<div className="text-red-500 text-center dark:text-slate-400">
										{isSignupError && <p>{errormessage}</p>}
									</div>

									
							<div className="relative flex flex-col gap-2">
								<button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
										<span className="text-gray-500 dark:text-slate-400">Do you already have account? <span onClick={()=>setShowLogin(!showLogin)} className="cursor-pointer text-blue-500">Login</span></span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
		)
	}

	

  return (
    <>
			 {!token ? (
        <>
          {showLogin ? renderLogin() : renderSignup()}
        </>
      ) : (
					<>
						<RootLayout token={token}>
							<Home />
						</RootLayout>
					</>
      )}
    </>
  );
};


export default Page;
