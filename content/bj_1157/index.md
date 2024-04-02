---
emoji: ✨
title: 백준 1157번 단어 공부 / python, 파이썬
date: '2022-01-28 23:30:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 1157번
categories: CodingTest
---

👉👉 [1157번 문제 바로가기](https://www.acmicpc.net/problem/1157) 👈👈

## 👊 문제

알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

<br/>


## 👉 입출력

- __입력:__ 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.


- __출력:__ 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.



<br>
<br>



## 💬 풀이
처음에 딱 문제보고, 아 금방 풀겠네 싶었던 내 오산...
대소문자 구분안하고 빈도수 구하는 것과 최댓값을 출력하는 것이 아닌, 알파벳(그것도 대문자)를 출력한다는 것을 구현하면서 뇌정지 조금 왔다.🤯


- 우선 입력값을 받을 땐, `upper()`을 통해 대문자로 모두 전환을 시켜준다.
그리고 `set()`을 통하여 입력값들의 중복값들을 제거한 뒤 리스트로 만들어준다.
```py
data = input().upper()
data_list = list(set(data))
```
<br>
<br>

- data_list(중복 업는 리스트)의 각 알파벳들을 data에서 몇 개가 카운트 되는지 `count()`를 통해 센 후, 숫자들을 앞에서 준비한 count_list라는 리스트에 넣는다. 이때 count()를 통해 나타난 값은 integer이다.
```py
for i in data_list:
    count_list.append(data.count(i))
```
<br>
<br>

- 문제의 조건에서 말했듯, 만약 mississipi 처럼 s가 4개, i가 4개인 (동점인)경우는 출력값이 ?로 나타나도록 해야한다. 그래서 조건문을 통해 count_list의 최대값의 개수가 2개 이상인 경우에는 ?를 출력하도록 하였으며, 그 외의 경우(최대 빈도 알파벳이 1개)에는 알파벳을 출력하도록 하였다.
```py
if count_list.count(max(count_list)) >= 2:
    print("?")
else:
    print(data_list[count_list.index(max(count_list))])
```
<br>
<br>
여기서 프린트 안에 한번에 쓰면서 오류가 나서 헤맬 뻔 했다. 아래에서 예시를 통해 설명 ...

### 🍌 example
만약 banana를 입력받았다면, set함수를 통해 data_list정리, for문을 통해 count_list의 값이 추가되어 아래와 같이 정리되었을 것이다.
```py
data_list = ['B', 'A', 'N']
count_list = [1, 3, 2]
```
여기서 최대 빈도수는 3이고, max(count_list)=3으로 나올 것이다.
if문에서 count_list.count(3) = 1 일 것이다. count_list에 3은 1개이니까! <br>
그래서 else문으로 넘어가면, 3의 인덱스는 count_list의 1번째이므로, 1이다. 이 인덱스를 data_list에 적용시키면, data_list[1] = 'A'이기 때문에 출력값은? 'A'가 될 것이다.

<br>
<br>

## 🌱 전체 코드

```py
data = input().upper()
data_list = list(set(data))
count_list = []

for i in data_list:
    count_list.append(data.count(i))


if count_list.count(max(count_list)) >= 2:
    print("?")
else:
    print(data_list[count_list.index(max(count_list))])
```





```toc

```
