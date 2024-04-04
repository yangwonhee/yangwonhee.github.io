---
emoji: ✨
title: 99클럽 코테 스터디 8일차 TIL
date: '2024-04-04 23:10:00'
author: 원희
tags: 파이썬 프로그래머스 할인행사 TIL
categories: CodingTest
---


## 프로그래머스 코딩테스트 문제
👉 [할인 행사 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131127)



<br>
<br>

## 🌱 전체 코드
```py
def solution(want, number, discount):
    answer = 0
    wanting = []
    for w, n in zip(want, number):
        for i in range(n):
            wanting.append(w)
    for day in range(len(discount)):
        shopping = wanting[:]
        today = discount[day:day+10]
        for t in today:
            if t in shopping:
                shopping.remove(t)
        if not shopping:
            answer += 1

    return answer

```

## 💬 오늘의 회고

- 어떤 문제가 있었고, 나는 어떤 시도를 했는지:
이중 for문을 두번이나 써서 풀었다. ... . 시간초과 안난게 신기할 정도 ... 
이중 for문 두번 썼으니 O(2n^2)을 더 넘는 것 같다. 왜냐면 그 내부에서 슬라이싱까지 했으니 .. ㅠ

스터디에서 collections의 Counter함수를 쓰셨다고 해서 찾아봤다.


<br>


```py
# 리스트의 요소 개수 세기
my_list = ['a', 'b', 'c', 'a', 'b', 'a']
counter = Counter(my_list)
print(counter)  # Counter({'a': 3, 'b': 2, 'c': 1})

# 문자열의 문자 개수 세기
my_string = 'hello'
counter = Counter(my_string)
print(counter)  # Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})
```

- 오늘 배운 것: Counter 함수


<br>

- 오늘의 사담:
맨날 내일 학습할 것은 무엇인지 칸에다가 사담 주저리 떨어서 그냥 사담으로 바꿨다. 
어떻게 보면 일기같은 ..~
오늘 드디어 교수님께서 논문 심사 신청 허락을 하셨다 !!!
드디어 .. 드디어 .. dobby is free... 
까진 아니고 그래도 자유의 경계선까지는 왔다 ...
이제 데이터 세트 하나만 더 추가하면 돼 !!!
figure 수정만 하면 돼 !!!
biological한 내용 추가만 하면 돼 !!
저널만 쓰면 돼 !!!


<br>
<br>









```toc

```
