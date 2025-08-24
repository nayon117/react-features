import { useForm } from "react-hook-form";

export function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Registration Form
        </h2>

        <div>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
            placeholder="Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            type="email"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
              maxLength: { value: 20, message: "Password cannot exceed 20 characters" },
            })}
            placeholder="Password"
            type="password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("aboutYou", {
              required: "About you is required",
              minLength: { value: 10, message: "Must be at least 10 characters" },
            })}
            placeholder="About you"
            rows="3"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.aboutYou && (
            <p className="text-red-500 text-sm mt-1">{errors.aboutYou.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
