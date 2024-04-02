---
emoji: ✨
title: 백준 18870번 좌표 압축 / python, 파이썬
date: '2022-02-12 19:00:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 18870번
categories: CodingTest
---

👉👉 [18870번 문제 바로가기](https://www.acmicpc.net/problem/18870) 👈👈

## 👊 문제

수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다. Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다. X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

<br/>

## 👉 입출력

- **입력:** 첫째 줄에 N이 주어진다. 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

- **출력:** 첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

<br>
<br>

## 💬 풀이

"Xi > Xj를 만족하는 서로 다른 좌표의 개수" 라는 문장의 말 뜻을 이해 못해서 도대체 뭔 소리인가 싶었다. 여기서 국어를 못한다는 것이 드러나는 부분 ....
다양한 문제를 접함으로써 문제의 의도를 파악하도록 해야겠다.

```py
import sys
N = int(sys.stdin.readline())
data = list(map(int, sys.stdin.readline().split()))
arr = []
```

- 우선 sys를 통해 input함수를 대신하여 입력받음을 통해 시간복잡도를 줄일 수 있다. input()과 달리 sys.stdin.readline()은 prompt message의 여부를 따지지 않고 입력값만 받기 때문이다.
- 그 후, 입력값들인 Xi인자들을 리스트data의 인자로 입력받는다.
- 아래에 사용할 arr배열을 미리 정의해놓는다.

<br>
<br>

```py
arr = list(sorted(set(data)))
arr2 = {arr[i]:i for i in range(len(arr))}
```

- arr배열은 data배열을 중복제거 && 오름차순 정렬으로 만든 배열이다.
- 여기서 `sorted` 함수는 값들을 오름차순으로 정렬하는 함수이고, `set` 함수는 중복값들을 제거하는 함수이다.
  > `sort` 함수와 다르게 `sorted` 함수는 원래의 리스트는 그대로 둔 채, 정렬한 새로운 리스트를 반환하는 함수이다.
- 그럼 여기서 만약 예제 입력 1과 같이 data를 2 4 -10 4 -9로 입력받았다면, arr = [-10, -9 2 4] 로 정렬되었을 것이다.
- arr2는 정렬된 리스트arr를 통해 dictionary 자료형으로 만든 것이다.
- 위의 예제 입력 1의 예시를 들면 arr2 = {-10:0, -9:1, 2:2, 4:3} 일 것이다.

<br>
<br>

```py
for i in data:
    print(arr2[i], end=" ")
```

- 한 칸 띄고 출력이기 때문에 end=" "이 붙는 것은 알 것이다.
- 위의 예제 입력 1을 계속 활용하자면, data는 처음 입력받은 리스트이다. for i in data를 통해 i의 값은 2, 4, -10, 4, -9로 변할 것이고 출력되는 값들은 i가 2일 때 arr2[2]는 2이므로 2, i가 4일 때 arr2[4]는 3, i가 -10일 때 arr2[-10]은 0, ,,, 이렇게 출력이 될 것이다.

<br>
<br>

## 🌱 전체 코드

```py
import sys

N = int(sys.stdin.readline())
data = list(map(int, sys.stdin.readline().split()))
arr = []

arr = list(sorted(set(data)))

arr2 = {arr[i]:i for i in range(len(arr))}

for i in data:
    print(arr2[i], end=" ")
```

```toc

```
