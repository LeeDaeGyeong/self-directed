import { useQueryClient } from "react-query";
import { getFetchData } from "../api";

const SidePage = () => {
  // QueryClient 인스턴스를 반환.
  const queryClient = useQueryClient();

  // getQueryData
  const data = queryClient.getQueryData("data");
  /*
    쿼리에 데이터를 반환. "data" 쿼리에 캐시된 데이터를 받아온다.
  */

  // getQueryState
  const state = queryClient.getQueryState("data");
  /*
    해당 쿼리에 상태를 반환
  */

  // invalidateQueries
  queryClient.invalidateQueries("data");
  /*
    해당 쿼리를 무효화 하고 데이터를 다시 가져옴.
    업데이트 시킨다?
  */

  // removeQueries
  queryClient.removeQueries("data");
  /*
    해당 쿼리를 캐시에서 제거함.
  */

  // prefetchQuery
  queryClient.prefetchQuery("data", getFetchData);
  /*
    주로 사용자 경험 향상을 위해 사용한다.
    사용자가 특정 페이지로 이동하기 전에 데이터를 미리 가져와서 캐시에 저장해두고,
    이를 통해 사용자가 해당 페이지로 이동할 때 데이터를 볼 수 있게 해준다.
  */

  return <div>sidePage</div>;
};

export default SidePage;
