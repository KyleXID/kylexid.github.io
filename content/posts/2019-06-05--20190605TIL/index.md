---
title: 20190605 TIL
category: "TIL"
cover: django-logo-negative.png
author: KyleXID
---

### ENUM 필드 or 튜플을 이용하여 장고 choices 사용 시 display하는 법
- 모델 객체에 대해 `get_필드명_display()` 메서드를 호출할 시 튜플의 두번째 값을
    얻을 수 있다. 이 메서드는 장고에서 기본적으로 지원해주는 메서드이다.

### related_name옵션은 포린키로 연결한 모델에서 해당 이름으로 접근할 수 있게만들어주는 키이다.
  
### 관계형 데이터베이스시 remind
- 기본적으로 관계형 데이터베이스를 사용 할 때, 테이블에서 id값을 가져와서
    접근하는 것이 맞다. 하지만 id값은 하드코딩하는 것이 아니라, 다른 값을
    이용해서 얻어와서 넣는 것이 일반적이다.