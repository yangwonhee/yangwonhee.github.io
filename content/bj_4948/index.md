---
emoji: ✨
title: 백준 4948번 베르트랑 공준 / python, 파이썬
date: '2022-01-31 18:20:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 4948번
categories: PYTHON
---

👉👉 [4948번 문제 바로가기](https://www.acmicpc.net/problem/4948) 👈👈

## 👊 문제

베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

<br/>

## 👉 입출력

- **입력:** 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다.
  입력의 마지막에는 0이 주어진다.

- **출력:** 각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

- **제한:** 1 ≤ n ≤ 123,456

<br>
<br>

## 💬 풀이

처음에 일반적인 소수문제와 비슷하게 접근했다가 시간초과가 나왔다..

```py
# TIMEOUT_VER
from math import sqrt

def isPrime(num):
    for i in range(2, int(sqrt(num))):
        if num % i == 0:
            return False
        else:
            return True



while True:
    n = int(input())
    if n == 0:
        break

    cnt = 0
    for i in range(n, 2*n+1):
        if i == 1:
            continue
        elif i == 2:
            cnt += 1
            continue
        else:
            if isPrime(i) == True:
                cnt += 1

    print(cnt)
```

어떻게 시간을 줄이지🤔💬 라고 고민 30분 정도(별로 안했을지도..) 했는데 도저히 모르겠어서 다른 블로그를 참고했다. 이 문제는 `제한`을 잘 확인했어야 하는 문제였다고 생각한다. 여태 시간초과에 대한 고민이 잘 없었어서 확인 할 생각을 못한듯 .. 그래도 이번 문제를 통해 배웠다고 생각한다.

우선 math 라이브러리에서 sqrt함수를 받아왔다. 제곱근 \**0.5로 해도 되지만 그래도 슬슬 라이브러리 함수 사용할 때가 왔다싶어서 ,,,
그 후, 최대값을 제한 요소인 123456으로 두어야하는데, 문제에서 n ~ 2n 사이의 개수를 구하는 것이므로, 만약 123455의 수가 나온다면 123455*2 까지의 개수를 구해야하는 것이니까, 최댓값을 `max = 123456 * 2 + 1`로 설정한다.

---

예를 들어 제한값이 10이라고 해보자. 그럼 max는 21이 될 것이다. 리스트인 T는 [True]가 21개 있는 리스트가 될 것이다. 바깥 for문으로 i가 2부터 22의 제곱근까지, 소수가 아닌 것을 찾아서 참인 값을 거짓으로 변경해준다. 그러기 위해서는 2\*i부터 21까지 i간격으로 T[j]는 False로 설정하였다.

i가 2일 때 4부터 21인데 2간격이므로 [4, 6, 8, 10,,, 20], 3일 때 [6, 9, 12, 15 ,,, 21], 4일 때 [8, 12, 16,,,20] ,,, 으로 소수가 아닌 값들을 False로 바꿔준다. 그럼 list T의 참값은 모두 소수만 남을 것이다.

---

다시 돌아와서, 두 번째 문단의 소수를 세는 함수를 보도록 하면, 카운트를 0으로 초기화 한 후, `입력값`+1부터 `입력값`\*2까지 T[i]의 값이 참일 때만 카운트를 1씩 늘린다. 그 후 개수를 프린트 하도록 한다.
여기서 입력값을 받음에 따라 출력값이 나오는 함수인 것이다.

마지막으로 while문을 통해 입력값이 0일 때 종료하도록 하고 아니면 두 번째 문단의 함수를 돌리도록 한다.

<br>
<br>

## 🌱 전체 코드

```py
from math import sqrt

max = 123456 * 2 + 1
T = [True] * max
for i in range(2, int(sqrt(max)+1)):
    for j in range(2*i,max,i):
        T[j] = False

def countPrime(num):
    cnt = 0
    for i in range(num+1, num*2+1):
        if T[i]:
            cnt += 1
    print(cnt)

while True:
    num = int(input())
    if num == 0:
        break
    countPrime(num)

```

```toc

```
