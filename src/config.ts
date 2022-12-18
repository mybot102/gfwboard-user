// types
import { DefaultConfigProps } from "@/types/config";

export const drawerWidth = 260;

export const twitterColor = "#1DA1F2";
export const facebookColor = "#3b5998";
export const linkedInColor = "#0e76a8";

// ==============================|| THEME CONFIG  ||============================== //

const config: DefaultConfigProps = {
  defaultPath: "/sample-page",
  fontFamily: `'Public Sans', sans-serif`,
  i18n: "en",
  miniDrawer: false,
  container: true,
  mode: "light",
  presetColor: "default",
  themeDirection: "ltr",
  api: {
    baseURL: "https://direct.gfwservice.xyz/api/v1/"
  }
};

export default config;