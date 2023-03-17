import { TextField } from "@/components";
import { AuthContext } from "@/context/auth.context";
import { Form, Formik } from "formik";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import * as Yup from "yup";

const Auth = () => {
  const [auth, setAuth] = useState<"signup" | "signin">("signin");
  const { error, isLoading, signIn, signUp, user } = useContext(AuthContext);
  const router = useRouter();

  if (user) router.push("/");
  

  const toggleAuth = (state: "signup" | "signin") => {
    setAuth(state);
  };

  const onSubmit = (formDate: { email: string; password: string }) => {
    if (auth === "signin") {
      signIn(formDate.email, formDate.password);
    } else {
      signUp(formDate.email, formDate.password);
    }
  };

  const validation = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "6 minimum character")
      .required("Password is required"),
  });

  return (
    <div className="relative flex h-screen md:items-center md:justify-center flex-col bg-black md:bg-transparent">
      <Head>
        <title>Auth page</title>
        <meta
          name="description"
          content="Sign in our website for watching free new movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Image
        src={"https://i.ibb.co/vXqDmnh/background.jpg"}
        fill
        className="object-cover -z-10 !hidden sm:!inline opacity-60"
        alt={"bg"}
      />
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={70}
        height={70}
        className="absolute left-4 top-4 cursor-pointer object-contain"
      />
      <div className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h2 className="text-4xl font-semibold">
          {auth === "signin" ? "Sign In" : "Create account"}
        </h2>
        {error && (
          <p className="text-red-500 font-semibold text-center">{error}</p>
        )}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          <Form>
            <div className="space-y-4">
              <TextField name="email" placeholder="Email" type="text" />
              <TextField
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[#E10856] mt-4 py-3 font-semibold"
            >
              {isLoading
                ? "Loading..."
                : auth === "signin"
                ? "Sign In"
                : "Sign Up"}
            </button>
          </Form>
        </Formik>
        {auth === "signin" ? (
          <div className="text-[gray]">
            Not yet account?{" "}
            <button
              onClick={() => toggleAuth("signup")}
              type="button"
              className="text-white hover:underline"
            >
              Sign up now
            </button>
          </div>
        ) : (
          <div className="text-[gray]">
            Already have account?{" "}
            <button
              onClick={() => toggleAuth("signin")}
              type="button"
              className="text-white hover:underline"
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
