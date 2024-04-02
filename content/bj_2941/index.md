---
emoji: ✨
title: 백준 2941번 크로아티아 알파벳 / python, 파이썬
date: '2022-01-29 02:20:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 2941번
categories: CodingTest
---

👉👉 [2941번 문제 바로가기](https://www.acmicpc.net/problem/2941) 👈👈

## 👊 문제
예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

|크로아티아 알파벳|변경|
|------------|---|
|č	|c=|
|ć	|c-|
|dž	|dz=|
|đ	|d-|
|lj	|lj|
|nj	|nj|
|š	|s=|
|ž	|z=|

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.




<br/>


## 👉 입출력

- __입력:__ 첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.
단어는 크로아티아 알파벳으로 이루어져 있다. 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.


- __출력:__ 입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.




<br>
<br>



## 💬 풀이

`replace()`라는 함수가 있었다는 사실에 또 한번 놀라버린,, 코린이,, 
```py
# 뻘짓한 코드
croalpa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
data = input()
new_list = []

for i in croalpa:
    if i in data:
        new_list.append(i)


print(len(new_list))
```
초반에 이런 뻘짓하다가 ... 와 이건 문자열을 리스트 원소로 remove하기도 그렇고.. 하다가 서치하니까 다들 replace딱 쓰고 두 줄만에 코드 끝.. 😂 
코드는 아래에 있습니다.


<br>
<br>

## 🌱 전체 코드

```py
croalpa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
data = input()

for i in croalpa:
    data = data.replace(i,"^")

print(len(data))
```

[✨⌨️ github](https://github.com/yangwonhee/baekjoon/blob/4f62ff9f22f5d6aa306124cdbc202e48ccd0665b/2941.py)




```toc

```
|