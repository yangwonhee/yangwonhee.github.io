---
emoji: ✨
title: 백준 15649번 N과 M(1) / python, 파이썬
date: '2022-02-12 19:40:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 15649번
categories: CodingTest
---

👉👉 [15649번 문제 바로가기](https://www.acmicpc.net/problem/15649)
👉👉 [reference: 코드1](https://jamesu.dev/posts/2020/04/13/baekjoon-problem-solving-15649/)
👉👉 [reference: 코드2](https://jiwon-coding.tistory.com/21)
👉👉 [reference2: 백트래킹](https://velog.io/@seanlion/bfsdfs)

## 👊 문제

자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

- 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

<br/>

## 👉 입출력

- **입력:** 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

- **출력:** 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다. 수열은 사전 순으로 증가하는 순서로 출력해야 한다.

<br>
<br>

## 💬 풀이

~~c언어로 DFS를 배웠다지만 ... 전공수업에 따라가기 벅차서 제대로 사용할 줄도 몰랐다. 백트랙킹 첫 문제여서 접근 방식 조차 몰라서 그냥 검색 해버렸다.~~

재귀함수 && 백트래킹을 이용하는 문제이다.

- 백트랙킹이란, 해결책에 대한 후보를 구축해 나아가다 가능성이 없다고 판단되는 즉시 후보를 포기해 정답을 찾아가는 범용적인 알고리즘으로, 제약 충족 문제를 풀 때 주로 쓰인다.
- 가능성이 없는 즉시 제외함을 통해 시간복잡도를 줄일 수 있다.
- 이러한 것을 `가지치기(Pruning)` 이라고 한다.

```py
import sys

N, M = list(map(int, sys.stdin.readline().split()))

data = []
```

- n과 m을 리스트로 담아낸다. 추후에 필요한 data를 리스트로 정의해놓는다.

<br>
<br>

```py
def dfs():
    if len(data) == M:
        print(' '.join(map(str, data)))
        return

    for i in range(1, N+1):
        if i not in data:
            data.append(i)
            dfs()
            data.pop()
dfs()
```

- 리스트data의 길이가 M개가 되면 출력 후 return을 해준다.
- 그 전까지는 i를 1부터 N까지 중복되지 않는 값일 때 리스트data에 추가를 해주고 재귀함수를 호출한다. 호출함으로써 `가지치기(Pruning)` 가 된다.
- 만약 N = 4, M = 3이라면 아래와 같은 형태로 진행이 될 것이다.
- data: [1] -> [1, 2] -> [1, 2, 3] -> [1, 2] -> [1, 2, 4] -> [1, 2] -> [1] -> [1, 3] -> ...

<br>
<br>

## 🌱 전체 코드

```py
import sys

N, M = list(map(int, sys.stdin.readline().split()))

data = []

def dfs():
    if len(data) == M:
        print(' '.join(map(str, data)))
        return

    for i in range(1, N+1):
        if i not in data:
            data.append(i)
            dfs()
            data.pop()

dfs()
```

```toc

```
