import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        "loginPageBg": "#302e2b",
        "loginBoxBg" : "#262421",
        "loginInputBox" : "#3d3937",
        "loginButton": "#80b64b",
        "loginBottom": "#211f1c",

        "signupPageBg": "#302e2b",
        "signupButton": "#80b64b",
        "signupGoogle": "#262522",
        "signupApple": "#262522",
        "signupLevelButton": "#3d3937",
      },
      borderColor: {
        "signupLevel": "#80b64b"
      }
    },
  },
  plugins: [],
};
export default config;
