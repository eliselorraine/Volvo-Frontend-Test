import "../public/css/styles.css";
import type { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from 'vcc-ui';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
       <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  )
}

export default MyApp; 
