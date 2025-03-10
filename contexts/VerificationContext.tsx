import { createContext, useState } from "react";

const VerificationContext = createContext();

export const VerificationProvider = ({ children }: any) => {
  const [verificationCode, setVerificationCode] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const verifyCode = (verCode: string) => {};

  const verifyPassword = () => {};

  return (
    <VerificationContext.Provider
      value={{ verificationCode, verifyCode, verifyPassword }}
    >
      {children}
    </VerificationContext.Provider>
  );
};
