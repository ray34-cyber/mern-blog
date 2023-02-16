import { Footer, Header } from "@/components";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/config";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <div className="flex flex-col h-[100vh]">
          <Header />
          <div className="flex-[1] container mx-auto w-full">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }

  return <Component {...pageProps} />;
}
