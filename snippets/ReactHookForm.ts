export const ReactHookFormSnippets = `import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z.object({
    email: z.string().email()
    .min(5, "Email trop court").max(50, "Email trop long"),
    password: z.string()
    .min(12,"Mot de passe trop court").max(50, "Mot de passe trop long"),
    confirmPassword: z.string()
    .min(12,"Mot de passe trop court").max(50, "Mot de passe trop long"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
    });

export default function FormWithReactHookFormZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      // Si le status de réponse est différent de 200
      alert("Erreur de soumission du formulaire");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;

      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong!");
      }
    }

    reset();
  };

  return (
    <div className='bg-slate-600 w-[40%] h-[60dvh] flex justify-center items-center rounded-md drop-shadow-lg'>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <h2 className='text-3xl mb-8 text-white '>Formulaire de connexion</h2>
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className='px-8 py-2 rounded'
      />
      {errors.email && (
        <p className="text-red-500">{errors.email.message}</p>
      )}

      <input
        {...register("password")}
        type="password"
        placeholder="Mot de passe"
        className='px-8 py-2 rounded'
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirmation du mot de passe"
        className='px-8 py-2 rounded'
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className='bg-blue-700 px-8 py-4 rounded-full text-lg mt-4 text-white hover:bg-blue-600 disabled:bg-gray-300' 
      >
        Envoyer
      </button>
    </form>
    </div>
  );
} `;
