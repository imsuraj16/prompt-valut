import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPrompt } from "../store/actions/promptActions"; 

const AddPrompt = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    dispatch(createPrompt(data)); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Add <span className="text-yellow-500">Prompt</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter prompt title"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">Title is required</p>
            )}
          </div>

          {/* Prompt Text */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Prompt Text
            </label>
            <textarea
              rows="4"
              placeholder="Write your prompt..."
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              {...register("promptText", { required: true })}
            ></textarea>
            {errors.promptText && (
              <p className="text-red-500 text-xs mt-1">
                Prompt text is required
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-yellow-500 text-black p-3 rounded font-semibold hover:bg-yellow-400"
          >
            Save Prompt
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPrompt;
