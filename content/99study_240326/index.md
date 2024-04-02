---
emoji: ✨
title: 99클럽 코테 스터디 2일차 TIL
date: '2024-03-26 22:20:00'
author: 원희
tags: 파이썬 프로그래머스 달리기경주 TIL
categories: CodingTest
---


## 💬 오늘의 회고
깃허브 블로그 글을 공유하고 의견을 나누기 위해서는 utterances를 적용해야겠다는 생각이 들었다. 그동안은 나 혼자만의 기록용이었는데 확실히 혼자하니까 나태해지는 것 같다. 그래서 오늘은 댓글기능을 적용해볼 것이다. 일단 TIL 쓰고 ㅎㅎ 
오늘도 스터디에서 문제들이 올라왔다. 스터디 아닌 날도 올려주시는 줄 몰랐다. 오히려 좋아 .. 내가 골랐으면 문제 쇼핑하고 있었을 것 같다. 아직은 미들러만 풀려고 한다. 일단 논문쓰고 자소서 서류들 넣느라 정신이 좀 없는 상태이다. 오후 6시 퇴근인데 요즘 논문때문에 오후 7시 퇴근이면 일찍 퇴근하는 편 .. ㅠㅠ
교수님께서 일단 졸업논문 먼저 완성하라고 하셔서 졸업논문에 집중하는 중이다. 팟팅..

<br>
<br>


- 무엇을 새롭게 알았는지:
네이버 코테봤을 때, '해시맵으로 푸는거죠?' 다들 이 말을 했다. 나는 해시맵이 뭐지 .. 이러고 조용히 있었다. 근데 ? 파이썬에서는 해시맵 = 딕셔너리였다. 
이래서 기본개념이 중요한거 같다. 

1. ==Hashmap== dict() 탐색, 삽입, 삭제의 시간복잡도는 O(1)이다.
2. ==TreeMap== SortedDict()의 탐색, 삽입, 삭제의 시간복잡도는 O(logN)이다. 
3. ==HashSet== set()의 탐색, 삽입, 삭제의 시간복잡도는 O(1)이다.
4. ==TreeSet== SortedSet()의 탐색, 삽입, 삭제의 시간복잡도는 O(logN)이다. 

<br>
<br>


- 내일 학습할 것은 무엇인지:
퇴근하고 스터디 문제 미들러 하나 풀고, XGboost관련 내용 정리하기.
<br>
<br>



## 프로그래머스 코딩테스트 문제
👉 [달리기경주 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/178871)

<br>
<br>

## 🌱 전체 코드

```py
def solution(players, callings):
    answer = []
    dic = {player: i for i, player in enumerate(players)}

    for call in callings:
        num = dic[call]
        dic[call] -= 1
        swap_p = players[num - 1]
        dic[swap_p] += 1
        players[num], players[num-1] = players[num-1], players[num]

    return players
```





```toc

```
