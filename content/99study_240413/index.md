---
emoji: ✨
title: 99클럽 코테 스터디 16일차 TIL
date: '2024-04-13 23:30:00'
author: 원희
tags: 파이썬 프로그래머스 모음사전 TIL 스택
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [모음사전 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/84512)


<br>
<br>

## 🌱 전체 코드

### 정답 코드
```py
# from itertools import product
def solution(word):
    word_dict = ['A', 'E', 'I', 'O', 'U']
    rend = [5**i for i in range(5)]
    answer = 0
    for i in range(len(word)-1, -1, -1):
        inx = word_dict.index(word[i])
        for j in range(5-i):
            answer += rend[j]*inx
        answer+=1
    return answer
```



## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지: 🤦‍♀️

처음 제출했을 때의 제출내역이 기록에 안남아서 .. (아마 틀려서 그런 듯) 코드가 없어졌다. 기억을 대충 꺼내보자면,, 정답 코드에서는 경우의 수를 사전 순에 맞게 계산을 해준거라면, 처음 짠 코드에서는 앞의 경우의 수를 다 계산해서 더했다고 해야하나 ..
일단 ㅠㅠ 오늘 TIL 시간이 조금 늦어서 ..! 

회고를 짧게 쓸 수 밖에 ㅠㅠ

완탐 관련해서 조금 더 공부를 해야겠다고 느꼈다.





<!-- - 다른 사람의 풀이:  -->

<!-- 

👉 [다른 사람의 풀이 링크](https://school.programmers.co.kr/learn/courses/30/lessons/70129/solution_groups?language=python3) -->

<!-- ```py
``` -->

<br>

- 오늘 배운 것: `완전 탐색` 부족함.




<br>

<!-- - 오늘의 사담: 

오늘 이력서 특강을 들었는데, 내가 여태 쓴 서류는 서류도 아니었다는 것을 느꼈다. 다른 사람들의 이력서를 직접 구경해보니, 정말 깔끔하고 정리가 잘 되어있어서 놀랐다. <del>그 와중에 단점 피드백 하시는 거에 더 놀라버린</del> 

이력서도 몇 번 넣은 상태에서 보니까 충격먹었는데, 다음에 서류 붙고나서 면접 스터디할 때도 충격먹을 것 같다. 덜 놀라기 위해 CS 지식도 탄탄하게 공부를 해야하는데 ...
화이팅 .. !! -->



<br>
<br>









```toc

```
