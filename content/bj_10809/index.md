---
emoji: ✨
title: 백준 10809번 알파벳 찾기 / python, 파이썬
date: '2022-01-28 15:30:00'
author: 코린이
tags: 파이썬 python baekjoon 백준 10809번
categories: PYTHON
---


## 👊 문제

알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
<br/>

## 👉 입출력

- __입력:__ 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.
- __출력:__ 각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다. 만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.


## 💬 풀이

우선 단어 S의 입력을 string으로 받은 후에,

```py
word = input()
```

for문을 이용하여 문자열의 각 문자가 알파벳에 있는지 찾도록 한다. 이때 소문자 알파벳은 리스트로 구성하며, 리스트의 범위 값을 아스키코드의 숫자 범위를 통해 지정한다.

```py
apb = list(range(97,123))
for i in apb:
    print(word.find(chr(i)))
```

여기서 find함수는 index함수와 비슷하지만 조금 다르다. 
index함수는 찾는 문자가 없으면 에러가 발생하지만, find함수는 문자가 문자열에 없으면 -1을 출력한다. 

find함수는 문자열만 받을 수 있으므로 현재 i의 값은 지금 아스키코드 숫자로 표현되어있기 때문에 chr()을 통해 아스키코드숫자에서 문자로 변환하도록 한다.


## 🌱 전체 코드

<script src="https://gist.github.com/yangwonhee/5fd5b7629f1391ddd38241582954376d.js"></script>


```toc

```
