### staleTime

react-query는 항상 데이터가 오래되었다고 판단한다.

그렇기에 staleTime의 기본값은 0이다. (stale : 신선하지 않은)

staleTime의 값이 0이라는 뜻은 항상 데이터를 새로 받아온다는 뜻이다.

하지만 만약 불러온 데이터가 자주 바뀌지 않는 정적인 데이터라면,

불필요한 네트워크 요청이 발생하게 된다.

이러한 경우 staleTime의 값을 변경해서 불필요한 네트워크 요청을 막을 수 있다.

---

### cacheTime

cacheTime은 불러온 데이터가 유효한 시간을 의미한다.

이 시간이 지나면 해당 데이터는 가비지 콜렉터로 수집된다.

---

### staleTime을 cacheTime보다 작게 설정하는 이유

우리가 staleTime을 지정하는 이유는 staleTime 시간 동안 refetch 없이 저장된 데이터를 사용하기 위해서이다.

하지만 react-query는 해당 데이터의 cacheTime이 지나면 가비지 콜렉터로 수집하기 때문에,

아무리 staleTime 시간이 남아있어도 저장된 데이터를 사용할 수 없게 되기 때문이다.
