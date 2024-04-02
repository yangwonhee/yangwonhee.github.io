---
emoji: ✨
title: 백준 2675번 문자열 반복 / python, 파이썬
date: '2022-01-28 17:30:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 2675번
categories: CodingTest
---

👉👉 [2675번 문제 바로가기](https://www.acmicpc.net/problem/2675) 👈👈

## 👊 문제

문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.
<br/>


## 👉 입출력

- __입력:__ 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 
- __출력:__ 각 테스트 케이스에 대해 P를 출력한다.

<br>
<br>



## 💬 풀이

문제의 T, R, S를 모두 입력받아야 하는데, 우선 T의 수를 알아야 얼마나 반복할 지를 알기 때문에 `int형`으로 T의 값을 받는다.

```py
T = int(input())
```

<br>
<br>


그 후, for문 반복문을 통해 T만큼 입출력을 반복하도록 한다. 입력값은 ' '으로 구분할 수 있는 `split()`함수를 통해 R, S를 입력받는다.

```py
for i in range(T):
    R, S = input().split()
```

<br>
<br>

입력받은 후, `text = ""` 인 빈 문자열로 정의한다. 입력받은 문자열 S안의 있는 j를, R(숫자)만큼 반복하여 출력하여야 하는데, `input().split()`으로 입력받은 R을 정수형으로 변환시켜준 후 j를 R만큼 곱하여 text에 대입 후 출력한다.

```py
for j in S:
    text += j * int(R)
    print(text)
```


## 🌱 전체 코드

```py
T= int(input())

for i in range(T):
    R, S = input().split()
    text = ""
    for j in S:
        text += j * int(R)
    print(text)
```





```toc

```
