// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Main from "./components/Main/Main";
import "./root.css";
import { ConfigProvider } from "./Contexts/ConfigContext";
import { GlobalVariablesProvider } from "./Contexts/GlobalVariables";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>MeetApp</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <ConfigProvider>
              <GlobalVariablesProvider>
                <Main />
              </GlobalVariablesProvider>
            </ConfigProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
