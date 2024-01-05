import { http, HttpResponse } from "msw";

export const getData = http.get("api/data", () => {
  return HttpResponse.json(
    [
      {
        data: "data1",
      },
      {
        data: "data2",
      },
      {
        data: "data3",
      },
    ],
    {
      status: 200,
    }
  );
});
