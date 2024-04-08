---
emoji: ✨
title: 99클럽 코테 스터디 11일차 TIL
date: '2024-04-08 23:30:00'
author: 원희
tags: 파이썬 프로그래머스 괄호회전하기 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [괄호 회전하기 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/76502)


<br>
<br>

## 🌱 전체 코드
```py
from collections import deque

global opens, closes
opens = ['[', '(', '{']
closes = [']', ')', '}']

def check(queue):
    a = queue.popleft()
    if a in closes:
        return 0
    else:
        # 바로 닫을 때
        if not queue:
            return 0
        if queue[0] in closes:
            # 다른 닫는게 나오면 꽝
            if closes.index(queue[0]) != opens.index(a):
                return 0
            # 짝이 맞으면 다음 체크
            else:
                queue.popleft()
                
                if not queue:
                    return 1
                else:
                    check(queue)
        # queue[0] in opens
        # else:
        #     print(queue)
    return 1

def solution(s):
    answer = 0
    queue1 = deque(s)
    if len(s) % 2 == 1:
        return 0
    for _ in range(len(s)):
        queue1.append(queue1.popleft())
        answer += check(queue1)
    return answer
```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
문제의 내용은 주어진 괄호리스트에 대해서 회전을 하면서 괄호가 맞게 되었는지 카운트를 하는 것이다.
우선 괄호가 열고 닫히기 위해서는 주어진 괄호리스트의 길이가 짝수여야 하기 때문에 연산량을 줄이기 위해서 길이가 짝수인지 먼저 확인을 하였다. (홀수면 return 0)
짝수인 리스트는 deque로 만들어서 deque의 왼쪽부터 괄호 한 개씩 뽑아서 popleft(), append()를 하게 만들어서 회전을 시켰다.
1회전마다 괄호가 제대로 되었는지 확인을 해야한다. 이 때, 제일 첫 번째 괄호가 닫힌 괄호가 나오면 바로 return 0을 한다.
만약 열린 괄호가 나오면, 그 다음에 닫힌 괄호가 쌍이 맞는 지 확인을 하고, 쌍이 맞으면 deque에서 제거를 한 다음, 남은 것들을 다시 체크한다. (열렸는지 부터 ..)
근데 여기서 열린 괄호가 나온 뒤에, 또 열린 괄호가 나왔을 때, 그 다음도 열린 괄호가 나왔을 때의 함수 구성을 어떻게 해야하는지 복잡해졌다. 
처음에는 열린 괄호가 2연속 이상으로 나올 때, 리스트를 생성해서 열린 괄호를 쭉 모은다. (닫힌 괄호가 나올 때까지)
그리고 닫힌 괄호도 리스트에 닫힌 괄호끼리 모은다. (열린 괄호의 개수만큼 for문 돌려서 만약 열린괄호가 나오거나 그거보다 짧으면 return 0)
그 후, 닫힌 괄호 리스트를 [::-1]으로 뒤집어서 열린 괄호 리스트와 같은 순서로 열고 닫히는지 확인해서 다 맞으면 다음 괄호가 또 있으면 그 다음 진행, 그게 끝이면 return 1로 종료.
이런 식으로 카운트를 하려고 했는데, 일단 코드가 너무 복잡해졌고, deque가 비었는데 pop을 한다고 오류나고, 리스트 out of range 뜨고 오류 무한 반복해서 .. 2시간 내내 이 문제만 풀다가 끝났다. (근데 못 품)

함수 정의도 그렇고 여러 부분에서 부족한게 많이 보였다. 특히 조건문이 많아질 수록 나까지 헷갈려지는데 그걸 깔끔하게 정리하는 방법을 못했다. 함수 정의부터 다시하고, 파라미터를 이걸 넣었다가 저걸 넣었다가 무한 반복했다. 


<br>

- 오늘 배운 것: 나의 부족함 ...




<br>

- 오늘의 사담:
내일 퇴근해서 다시 한번 풀어봐야겠다. 



<br>
<br>









```toc

```
