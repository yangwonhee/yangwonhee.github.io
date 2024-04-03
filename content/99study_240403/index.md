---
emoji: ✨
title: 99클럽 코테 스터디 7일차 TIL
date: '2024-04-03 23:45:00'
author: 원희
tags: 파이썬 프로그래머스 기사단원의무기 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [기사단원의 무기 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/136798)



<br>
<br>

## 🌱 전체 코드
```py
def count_yaksu(num):
    cnt = 0
    for n in range(1, int(num**0.5)+1):
        if num % n == 0:
            if (num // n) == n:
                cnt += 1
            else:
                cnt += 2

    return cnt
            
def solution(number, limit, power):
    answer = 0
    for num in range(1, number+1):
        kg = count_yaksu(num)
        if kg > limit:
            kg = power
        answer += kg
    return answer

```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
오늘 하루종일 논문에 매달렸는데 발전은 없었다. ..^^ 
내일 혼나고 수정하지 모 .. ~ 어차피 혼날 거 그냥 문제풀고 집 갈래 .. 라는 마인드로 문제 풀었다.
시간초과 날거 같았는데 역시나 ,,
리스트로 풀어야되나 ..? 하다가 제곱근이 int면 홀수개고 아니면 짝수개인데 라는 아이디어에서 코드를 짰다.
제곱근까지만 for문 돌려서 그동안의 약수는 2씩 더하고, 제곱근이 딱 int면 +1, 아니면 그냥 거기서 끝으로 짜니까 시간초과 안났다.

<br>


처음에 푼 코드 ㅎㅎ 

```py
def count_yaksu(num):
    cnt = 0
    for n in range(1, num+1):
        if num % n == 0:
            cnt += 1
    return cnt
            
def solution(number, limit, power):
    answer = 0
    for num in range(1, number+1):
        kg = count_yaksu(num)
        if kg > limit:
            kg = power
        answer += kg
    return answer
```
이렇게 풀면 무한으로 굴러갈거 .. 알고 있었잖아 ... !

<br>

- 내일 학습할 것은 무엇인지:
논문 쓰기 ..... 오늘 진짜 너무너무 피곤하다 .....
EM을 이용한 GMM 수식 넣을지 고려..
kneighbors 좀 더 읽어보고,, 루베인 알고리즘 ... 코드에 왜 있는지 누가 설명좀 ㅠㅠ (는 나)

<br>
<br>









```toc

```
