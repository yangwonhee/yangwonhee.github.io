---
emoji: ✨
title: 99클럽 코테 스터디 6일차 TIL
date: '2024-04-02 12:45:00'
author: 원희
tags: 파이썬 프로그래머스 피보나치수 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [피보나치 수 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12945)



<br>
<br>

## 🌱 전체 코드
```py
def solution(n):
    rend = {}
    for i in range(n):
        if i == 1:
            rend[i] = 1
        elif i == 0:
            rend[i] = 0
        if i not in rend.keys():
            rend[i] = rend[i-1] + rend[i-2]
    answer = (rend[n-1] + rend[n-2]) % 1234567
    return answer

```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
당연하다는 듯이 재귀함수로 풀고 오류가 났다! 시간초과 때문에 정의한 fibo 함수 안에 나눗셈을 넣고 별 짓을 다 했는데 계속 오류가 나서 .. 그냥 딕셔너리로 풀어볼까? 싶어서 일단 그냥 짜봤는데 바로 성공할 줄은 ...!
원래 오늘 논문 좀 쓰고 오후에 문제풀이 하려고 했는데, 연구실 출근해서 머리 비울겸 푸니까 괜찮은 것 같다! 그래서 논문은 언제 쓰지 ...


- 내일 학습할 것은 무엇인지:
이따 글 수정할 것 같은데 일단 업로드 해놓기!!!

<br>
<br>









```toc

```
