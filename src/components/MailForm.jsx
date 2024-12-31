import axios from "axios";
import React, { useState } from "react";

export default function MailForm() {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("https://mainsender2.vercel.app/send-mail", formData);
      setResponse(result.data.message);
    } catch (err) {
      setResponse("Error sending mail. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          📧 Send Email
        </h2>
        <form onSubmit={sendMail} className="space-y-6">
          {/* Recipient Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-blue-600">
                Recipient Email
              </span>
            </label>
            <input
              type="email"
              name="to"
              className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter recipient email"
              onChange={handleChange}
              required
            />
          </div>
          {/* Subject */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-blue-600">
                Subject
              </span>
            </label>
            <input
              type="text"
              name="subject"
              className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter email subject"
              onChange={handleChange}
              required
            />
          </div>
          {/* Message */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-blue-600">
                Message
              </span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Type your message here..."
              rows="5"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold"
          >
            Send Email
          </button>
        </form>
        {/* Response Message */}
        {response && (
          <div
            className={`mt-4 text-center font-medium ${
              response.includes("Error") ? "text-red-600" : "text-green-600"
            }`}
          >
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
