import { KindeProvider } from "@kinde-oss/kinde-auth-react";
export const AuthProvider = ({ children }) => (
  <KindeProvider
    clientId="aba1b093f743450cab4937d7f9d22d48"
    domain="https://moknine.kinde.com"
    redirectUri="https://movico4u.netlify.app/"
    logoutUri="https://movico4u.netlify.app/"
  >
    {children}
  </KindeProvider>
);
