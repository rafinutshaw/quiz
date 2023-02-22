import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "frontpayment.us.auth0.com";
  const clientId = "i3lsXE0lC0fr0Cdy8LegKx2Q0vHzlqHL";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      //   onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
