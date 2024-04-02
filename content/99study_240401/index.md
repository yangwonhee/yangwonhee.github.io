---
emoji: ✨
title: 99클럽 코테 스터디 5일차 TIL
date: '2024-04-01 23:30:00'
author: 원희
tags: 파이썬 프로그래머스 햄버거만들기 둘만의암호 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [햄버거 만들기 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/133502)

👉 [둘만의 암호 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/155652)


<br>
<br>

## 🌱 전체 코드
```py
## 햄버거 만들기
# from collections import deque <- 나 디큐 그만 좋아했으면..
def solution(ingredient):
    hamb = []
    done = [1, 2, 3, 1]
    answer = 0
    for ing in ingredient:
        hamb.append(ing)
        if hamb[-4:] == done:
            answer += 1
            for _ in range(4):
                hamb.pop()
            
    return answer
```

```py
## 둘만의 암호
def solution(s, skip, index):
    alpha = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p',
            'q','r','s','t','u','v','w','x','y','z']
    new_alpha = sorted(list(set(alpha) - set(skip)))
    new_name = []
    print(new_alpha)
    for origin in list(s):
        ind = new_alpha.index(origin)
        new_i = ind + index
        if new_i >= len(new_alpha):
            new_i = new_i % len(new_alpha)
        new_name.append(new_alpha[new_i])
    answer = ''.join(new_name)
    return answer
```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
오늘 솔직히 스터디 할 시간이 전혀 없는데.. 그냥 무작정 참여했다. 졸업논문 내일 미팅 진행해야해서 discussion을 작성해야 하는데.. 심지어 introduction도 ref를 다 안달았다. 내일 씨게 혼날 예정 .. 그래도 오늘 figure랑 result 부분은 싹다 마무리 했다. 그래도 바뀌겠지만 .... 
오늘 스터디 문제 얘기는 안하고 딴 소리 중이긴 한데 오늘 스터디 문제가 제법 쉬웠다. 근데 둘만의 암호 저렇게 푼거 조금 부끄러울지도... 다들 아스키코드로 변환하셨던데 나는 그냥 무작정 알파벳 리스트에 때려박기!! ㅎㅎ 이러다가 이제 코테 가가지고 알파벳 하나 빼먹어서 디버깅 지옥에 갇혀봐야 정신을 차리지 ... 그래도 그냥저냥 풀었다. 나름 스터디원들이랑 자기소개도 하고, 문제에 대해 이야기도 해보는 시간 가지면서 성장 ... 했을지도? 


- 내일 학습할 것은 무엇인지:
내일은 아쉽게도 따로 학습은 못할 것 같고, 논문 수정해야할 것 같다.
discussion 꽉 채우고 레퍼런스도 좀 더 찾을 예정이다.
그리고 스터디 문제 풀기는 꼭 할거다!

<br>
<br>









```toc

```
