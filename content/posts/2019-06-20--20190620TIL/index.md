---
title: 20190620 TIL
category: "TIL"
cover: django-logo-negative.png
author: KyleXID
---

### 동시에 request가 올 경우 데이터를 처리하는 방법에 대해,,
- queue를 이용하여 데이터를 쌓고 하나씩 처리하는 방법이 있다.
- transaction 자체가 lock의 역할을 할 수 있다.
