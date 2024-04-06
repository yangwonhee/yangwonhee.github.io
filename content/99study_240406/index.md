---
emoji: ✨
title: 99클럽 코테 스터디 9일차 TIL
date: '2024-04-06 22:50:00'
author: 원희
tags: 파이썬 프로그래머스 문자열내마음대로정렬하기 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [문자열 내 마음대로 정렬하기 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12915)


<br>
<br>

## 🌱 전체 코드
```py
def solution(strings, n):
    answer = []
    rend = {}
    # 각 sorting할 문자 별로 dict 만들기
    for k in strings:
        key = k[n]
        rend.setdefault(key, []).append(k)

    # 문자 별로 sorting
    rend = dict(sorted(rend.items()))
    # 예제처럼 동일한 문자가 있으면 사전 순으로 배열하기
    for key in rend:
        if len(rend[key]) > 1:
            rend[key] = sorted(rend[key])
        # 동일한 것까지 sorting한 문자들 최종 반영
        answer += rend[key]
    
    return answer
```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
초반에 풀었던 코드는 아래에 있다. 설명을 하자면, 입력받은 strings를 sort by x[n]으로 놓고 정렬까지는 했는데, 그 다음에 내가 정한 n번째 알파벳이 여러 단어에 겹치면 사전 순으로 정렬을 해줘야되는데 이게 까다로웠다. 하 .. 그래서 결국 코드 갈아엎어버리고 다시 짰다. 

```py
def solution(strings, n):
    rend = []
    answer = []
    
    for st in strings:
        li = list(st)
        rend.append(li)
    rend.sort(key = lambda x: x[n])
    for ind in range(len(rend)-1):
        if rend[ind][n] == rend[ind+1][n]:
            if rend[ind] > rend[ind+1]:
                rend[ind], rend[ind+1] = rend[ind+1], rend[ind]
                
    for word in rend:
        answer.append("".join(word))
    return answer
```

<br>

- 오늘 배운 것: lambda의 사용.. 을 잘하자 라는 교훈


<br>

- 오늘의 사담:
분명 주말이 왔다고 행복해하던게 방금 전인거 같은데 왜 토요일이 끝났는지요? 왜 일요일인지요? 불행 중 다행인건 이번 주 수요일 선거로 빨간 날 !! (근데 논문 써야됨) 



<br>
<br>









```toc

```
