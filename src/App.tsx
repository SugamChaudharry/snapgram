import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*  public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-Up" element={<SignUpForm />} />
        </Route>
        {/* private routes */}
        <Route element= {<RootLayout/>}>
          <Route index element={<Home />} />
        </Route>
          
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
