import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getPasswordResetToken } from "../services/operations/authAPI";
import Spinner from '../components/common/Spinner'


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-richblack-900 text-white px-4">
      {loading ? (
        <div><Spinner></Spinner></div>
      ) : (
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-richblack-5">
            {!emailSent ? "Reset your password" : "Check your email"}
          </h1>

          <p className="text-richblack-100 text-sm">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you don’t have access to your email we can try account recovery."
              : `We have sent the reset email to ${email}`}
          </p>

          <form onSubmit={handleOnSubmit} className="space-y-4">
            {!emailSent && (
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm text-richblack-5 font-medium"
                >
                  Email Address <sup className="text-pink-200">*</sup>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full rounded-lg bg-richblack-800 text-richblack-5 px-4 py-2 border border-richblack-700 focus:outline-none focus:ring-1 focus:ring-yellow-50 placeholder:text-richblack-400"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-50 text-richblack-900 font-medium py-2 rounded-lg hover:bg-yellow-100 transition-all duration-200"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>

          <div className="text-sm">
            <Link
              to="/login"
              className="flex items-center text-blue-300 hover:underline gap-1"
            >
              <BiArrowBack /> Back to login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
