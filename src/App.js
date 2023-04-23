import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./components/Loader/Loader";

const Home = lazy(() =>
  import("./pages/Home/Home").then((module) => ({ default: module.Home }))
);
const Tweets = lazy(() =>
  import("./pages/Tweets/Tweets").then((module) => ({
    default: module.Tweets,
  }))
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
