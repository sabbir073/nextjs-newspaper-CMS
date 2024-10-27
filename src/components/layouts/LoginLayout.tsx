import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

// This layout ensures only the login page is wrapped with SessionProvider
export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    
      <div className="login-layout">{children}</div>
    
  );
}
