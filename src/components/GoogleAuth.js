import React, { useEffect } from "react";

const GoogleAuth = () => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientID:
          "181309971120-lv3mf5lqndcl9be697shp0f8mqf368gu.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }, []);

  return <div>Google Auth</div>;
};

export default GoogleAuth;
