--- 
title: 20190613 TIL/파이썬 스터디
category: "TIL"
cover: django-logo-negative.png
author: KyleXID
--- 

### 파이썬 더블언더스코어에 대해
- Special Method , DUNDER Method 라고 불리며, 파이썬에서 객체를 사용할 때 이 메서드를 이용하여 편하게 작업을 할 수 있다.  다양한 메서드들이 있기 때문에 어떤것들이 있는지 인지를 해놓는 것이 좋을것같다. 추후 포스팅으로 정리!

### 클래스에 대해 다시한번 정리
- 클래스, 객체지향언어의 꽃이라고 할 수 있는 개념이다. 추상화를 시키는데 유용한 방법이며, 비슷한 속성을 가진 객체를 묶어줄 수 있다.

### 파이썬 캡슐화
- 클래스에 대해 스터디원들과 말하면서 파이썬 캡슐화에 대한 이야기가 나와서 이야기하게 되었다.  
  정보은닉은 public, protected, private가 있으며, 기본적으로 파이썬은 public상태이다.  
  (클래스 외부에서 속성, 메서드에 접근이 가능)  
  - protected는 파이썬에서 실제로 접근을 막거나 하진 않고 경고수준에서 끝난다.  
  - private는 외부에서 접근이 불가능하고, 속성이름 앞에 Dunder를 붙여주면 된다.
    name mangling을 통해 private 설정가능하다.

### 함수에 대해 다시한번 정리
- 함수는 반복적으로 사용되는 코드를 정리하여 작업을 효율적으로하고 코딩을 깔끔하게 하는 역할을 해준다.

### 딕셔너리에 대해 다시한번 정리
- 키와 밸류를 한 쌍으로 갖는 자료형, 말그대로 사전과 비슷하다고 생각하면 된다. 영한사전으로 비교했을때 dog은 key, 강아지는 value이다.
- 딕셔너리는 리스트나 튜플처럼 sequential(순차적)으로 값을 구하는 것이 아니라, key를 통해서 바로 접근 가능하다. 

### 파이썬 이터러블, 이터레이터, 제너레이터
- 파이썬 iterable, iterator, generator에 대해서는 다시한번 포스팅으로 정리하는게 좋을것 같다.
  - iterable: 요소를 하나씩 차례로 반환가능한 객체를 의미함.(list, string, tuple / dict, file, set)
  - iterator: `next()`메서드를 사용하여 순차적으로 호출가능한 객체, 이터러블을 이터레이터로 만들어주기위해서는 `iter()`함수를 사용하면 된다.
  - generator: 이터레이터의 한 종류, 다수의 연속적인 데이터를 갖고있지만,  한번 호출할때 하나의 값만 리턴한다. 데이터의 수가 많아질수록 메모리적으로 효율적인 성능을 보여준다.