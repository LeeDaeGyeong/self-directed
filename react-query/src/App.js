import { RouterProvider } from "react-router-dom";
import { worker } from "./__mock__/browser";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./router/router";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
