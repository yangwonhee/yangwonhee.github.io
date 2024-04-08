---
emoji: ✨
title: 99클럽 코테 스터디 10일차 TIL
date: '2024-04-07 17:10:00'
author: 원희
tags: 파이썬 프로그래머스 두개뽑아서더하기 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [두 개 뽑아서 더하기 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/68644)


<br>
<br>

## 🌱 전체 코드
```py
from collections import deque
def solution(numbers):
    answer = []
    numbers = deque(numbers)
    while numbers:
        a = numbers.popleft()
        for i in numbers:
            answer.append(a+i)
    answer = list(sorted(set(answer)))
    return answer
```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
오늘도 deque를 사랑하는 나.. 아마 시간복잡도는 O(n(n-1))..? 마지막에 sorted 안쓰고 제출한거 빼고는 잘 푼 것 같당. .. .
근데 제출하고 이거 쓰다가 combination 함수로 깔끔하게 푼 사람들 보고 새로운 함수 알아감니다 ..

<br>

- 오늘 배운 것: combination 함수(시간복잡도 O(nCk)) 이 문제에서는 O(nC2) = O(n(n-1))
함수 선언 및 사용
```py
from itertools import combinations

lst = [1, 2, 3, 4]
comb = combinations(lst, 2) # combinations(list, count)
for c in comb:
    print(c)
# res : (1, 2), (1, 3), (1, 4), (2, 3) ... 
```



<br>

- 오늘의 사담:
졸업 논문 쓰기 전 워밍업 ..! 졸업논문 쓰고 있는 것도 심사 후에 .. 논문 작성한 총 과정을 블로그에 남길 예정 (~˘▾˘)~ 



<br>
<br>









```toc

```
