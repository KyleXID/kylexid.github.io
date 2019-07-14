---
title: "20190625 TIL"
category: "TIL"
cover: django-logo-negative.png
author: KyleXID
---

### 파이썬 [`time.time()`](https://docs.python.org/2/library/time.html#time.time)
파이썬 `time.time()`은 우분투가 생성된 시점부터 지금까지의 시간을 초로 나타낸 함수이다.  
파이썬 시간 계산의 기초가 된다.


### 장고에서 thread test를 할 때 test database를 읽어오지 못하는 이유
기존 `TestCase`대신 `TransactionTestCase`모듈을 import해서 쓰자.
TestCase모듈은 데이터를 메모리에만 두고 실제 DB에 입력하지 않는다. Thread 테스트는 DB에 직접 접근하는 방식의 테스트이기 떄문에, `SetUp`에서 `TestCase`모듈을 통해 생성된 테스트DB를 확인 할 수 없는것이다.  

`TransactionTestCase`를 사용하여 해결할수있다.

[stackoverflow링크)thread database error-in-django](https://stackoverflow.com/questions/10948537/database-errors-in-django-when-using-threading)

### Race Condition 테스트
Thread를 통해 Race Condition 테스트를 구현하였다.  
추후에 포스팅으로 한번 다시 정리하자.

### 장고에서 raw sql
- 장고에서 왠만하면 raw sql은 지양하자. ORM은 생산성이 높고, 단순 쿼리를 만들어내는 것에 더 나아가, 모델에 접근하여 업데이트를 할 때 유효성 검사와 보안을 제공한다.
[초보몽키님 블로그](https://wayhome25.github.io/django/2017/08/01/tsd7-django-query-database2/)
- raw sql을 사용 시 앱의 이식성이 떨어지고, 다른종류의 db로 마이그레이션이 어려워진다.
  (사실 서비스를 하면서 다른종류의 db로 옮겨간다는 것이 매우 극히 드문 일이긴 하다.)
- 그렇다면 언제 사용하는게 좋을까?
  raw sql을 이용하여 코드가 월등히 간결해질때만 사용하자.

### row lock을 하는 방법
- 주로 금융기관에서 사람이 몰리는 경우 데이터 정보차이를 메꾸려고 할때 사용한다.
[참고문서](https://medium.com/@hakibenita/how-to-manage-concurrency-in-django-models-b240fed4ee2)

### 파이썬 `str()`과 `repr()`의 차이
- 두 메서드 모두 객체의 문자열 표현을 나타내는데 사용이 된다.
- `str()`은 일반 유저가 보기 좋게, 즉 이해할 수 있는 방식으로 나타내는 반면,  
  ` repr()`은 객체의 공식적인 표현을 출력하며, 주로 디버깅/개발에 사용된다.
[GeeksforGeeks](https://www.geeksforgeeks.org/str-vs-repr-in-python/)
