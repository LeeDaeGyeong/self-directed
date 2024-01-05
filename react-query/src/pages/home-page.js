import { useQuery } from "react-query";
import { getFetchData } from "../api";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const { data } = useQuery(["data"], () => getFetchData(), {
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60,
  });

  const onGoSidePage = () => {
    navigate("/side");
    /*
        [staleTime]

        staleTime의 기본값은 0이다.
        따라서 staleTime을 지정하지 않고 sidePage로 이동했다가 다시 homePage로 돌아오면
        react-query는 데이터를 신선하지 않은 상태로 판단하고 다시 네트워크 요청을 하게된다.

        하지만 staleTime을 지정하고 sidePage로 이동했다가 homePage로 돌아왔을때
        지정한 staleTime이 지나지 않았다면 데이터가 아직 신선하다고 판단해, 다시 요청하지않는다
    */
  };

  return (
    data && (
      <>
        {data.map((el, index) => (
          <div key={index}>{el.data}</div>
        ))}
        <button onClick={onGoSidePage}>사이드 페이지 이동</button>
      </>
    )
  );
};

export default HomePage;
