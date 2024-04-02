---
emoji: ✨
title: 99클럽 코테 스터디 4일차 TIL
date: '2024-03-28 23:30:00'
author: 원희
tags: 파이썬 프로그래머스 바탕화면정리 가장먼노드 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [바탕화면 정리 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/161990)

👉 [가장 먼 노드 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/49189)


<br>
<br>

## 🌱 전체 코드
```py
## 바탕화면 정리
from collections import deque
def solution(wallpaper):
    min_y = len(wallpaper)
    min_x = len(wallpaper[0])
    max_x = 0
    max_y = 0
    queue = deque()
    for y, row in enumerate(wallpaper):
        for x, col in enumerate(row):
            if col == '#':
                queue.append([x, y])
    # 이거 그냥 min max 함수로 풀면 됨.. 
    while queue:
        li = queue.popleft()
        x, y = li
        if x < min_x:
            min_x = x
        if y < min_y:
            min_y = y
        if x > max_x:
            max_x = x
        if y > max_y:
            max_y = y
    answer = [min_y, min_x, max_y+1, max_x+1]

    return answer
```

```py
## 가장 먼 노드
def solution(s):
from collections import deque
def solution(n, edge):
    edges = [[] for _ in range(n+1)]
    visit = [0 for _ in range(n+1)]
    for li in edge:
        a, b = li
        edges[a].append(b)
        edges[b].append(a)
    queue = deque([1])
    visit[1] = 1
    while queue:
        point = queue.popleft()
        for p in edges[point]:
            if not visit[p]:
                visit[p] += visit[point] + 1
                queue.append(p)
    
    answer = visit.count(max(visit))
    return answer
```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
미들러 문제 '바탕화면 정리' 한 문제 풀고 챌린저 문제 '가장 먼 노드' 풀었다. 
일단 바탕화면 정리 문제도 스터디원 한분이(성함이 기억 안난다 ㅜㅜ) min max로 짧고 간결하게 잘 푸신걸 보고 앗차 싶었ㄷㅏ .. 혼자 if else문 남발하면서 이상하게 풀어버린 .. 그리고 deque를 너무 좋아해버린 ..

링크가 2개씩 있는 줄 모르고 ,, 그냥 눌렀는데 얼떨결에 둘 다 2번을 풀었다. 당구 연습도 풀려고 했는데 .. 문제 접근을 잘못 했다. 
스터디에서 비유님 설명보고 아차 싶었다. 아이디어 없이 허겁지겁 풀었더니 빙빙 돌아가고 있었다 .. 
근데 비유님 코드 짜는게 상당히 깔끔하고 비트연산자라던가 포인터라던가 사용하는 솜씨가 대단하셨다. 둘 다 예전에 c언어 할 때 쓰고 잊고있었는데 코딩테스트 공부를 하면 할 수록 나의 무지함을 알게 되는 것 같다. 


- 내일 학습할 것은 무엇인지:
오늘 XGboost에 대해 대충 정리를 했는데, 블로그에 쓰기 위해서는 좀 더 정리를 해야할 것 같다. bagging, boosting, GBM 등등 XGboost에 대해 쓰기 위해 정리할 용어들이 좀 있어서 주말에 정리해야 할 것 같다. (아마 일요일..) 내일이랑 모레는 약속이 있어서 아마 연구실 업무만 할 수 있을 것 같다. 업무하다가 짬짬히 스터디 문제 풀어봐야겠다! 

<br>
<br>









```toc

```
