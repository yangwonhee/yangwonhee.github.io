---
emoji: 👩‍💻
title: 배열과 문자열
date: '2021-11-25 17:00:00'
author: 코린이
tags: C c언어 문법 c언어기초
categories: lecture
---

이번 2학기에 새로 배우는 내용인 배열부터 포스팅을 하도록 하겠습니다 :)
<br/>
> 이전 학기에 배웠던 내용은 [이곳](https://blog.naver.com/friendlilo)에서 볼 수 있습니다. 차근차근 옮길 예정..

## 1. 배열의 기본

같은 데이터 형의 변수를 메모리에 연속적으로 할당하고, 같은 이름으로 사용하는 방법.
배열의 각 원소는 메모리에 연속적으로 할당된다.

### 배열의 선언
- 배열을 선언할 때는 우선, 배열의 `데이터 형`, `배열의 이름`이 필요하고, []안에 `배열의 크기`를 써주어야 한다.


```c
int arr[5];    // 크기가 5인 int 배열의 선언
```
<br/>

- 배열의 크기는 반드시 0보다 큰 `정수형 상수`로만 지정할 수 있다.

```c
int arr1[];           // 배열의 크기가 없으므로 컴파일 에러
int arr2[0];          // 배열의 크기가 0이므로 컴파일 에러

int size = 5;
int arr3[size];       // 배열의 크기가 변수이므로 컴파일 에러
int arr4[size + 10];  // 배열의 크기가 변수를 포함한 수식이므로 컴파일 에러
```

<br/>

- 배열의 크기는 `매크로 상수`로 지정할 수 있다.

```c
#define MAX 100
int arr5[MAX];      // 매크로 상수로 배열의 크기를 지정할 수 있다.
```
<br/>

- 배열의 크기를 구할 때 `sizeof` 연산자를 이용할 수 있다.

```c
int arr[5];
int size;
size = sizeof(arr) / sizeof(int);
```

<br/>


### 배열의 사용
- 배열을 사용할 때는 첨자 또는 `인덱스`를 이용한다.

-- 같은 이름의 배열 중 몇 번째 원소인지를 []안에 써준다. <br/>
-- 배열의 인덱스는 항상 0부터 시작하고 하나씩 증가된다.

- 배열을 사용할 때는 for문을 활용한다. (예제 7-1)

```c
for(i = 0; i < 5; i++){
  printf("arr[%d] = %d\n", i, arr[i]);
}
```
<br/>

- 배열의 인덱스가 유효 범위를 넘어서지 않아야한다.
- 배열도 따로 초기화를 하지 않으면 쓰레기 값을 갖는다.
<br/><br/>





## 2. 이동진 바보

이제 실제로 수정하고 배포할 수도록 내 컴퓨터(local)에 Repsitory를 가져와볼 건데요! 먼저 Repository에서 아래와 같이 초록색 Code 버튼을 클릭하면 링크가 나오게 되는데, 이 링크를 복사합니다.


그리고 아래 명령어를 수행하여 블로그를 다운로드합니다.

```c
cd [Repository를 저장할 폴더]
git clone [복사한 주소]
```

## 3. Blog 설치하기

이제 블로그를 동작시킬 수 있도록 패키지들을 다운로드 해야하는데, 다음 명령어를 실행하시면 받을 수 있습니다.

```c
cd [Repository 주소]
npm install
```

## 4. Blog 배포 준비하기

그리고 이제 Gatsby 테마를 GitHub 페이지에 올리기 위해 gh-pages라는 패키지를 설치해야 합니다. 설치는 다음 명령어를 실행하시면 됩니다.

```c
npm install gh-pages --save-dev
```

그리고 나서 package.json에 다음을 추가합니다.

```json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public" // 추가
  }
}
```

## 5. Blog 배포하기

드디어 배포 준비는 다 끝났습니다. 이제 다음 명령을 실행하시면 github page에 배포하실 수 있습니다.

```c
npm run deploy
```

조금 기다리신 후에 다음과 같이 `Published`라는 메시지를 받으셨다면 배포는 잘 끝났습니다!

> 🙋‍♂️ 제 블로그 템플릿을 사용하시는 분들을 `node 버전이 14 이상`이어야 합니다.
> node -v를 통해 node 버전을 확인하신 후 낮은 버전이라면 업그레이드를 진행해주세요!

> 💡 혹시 그 외에 다른 에러가 발생하신다면 아래에 댓글로 에러 내용을 알려주세요!


## 6. Repository Source Branch 변경하기

마지막으로 GitHub 페이지가 작동하려면 GitHub의 Repository 설정에서 배포 할 Branch를 선택해야 합니다. 이를 위해서 Repository에 있는 Settings를 클릭하고 죄측 메뉴에서 Pages를 클릭하여 Github Pages 설정 페이지로 이동합니다.


여기서 Source에 있는 Branch를 master(main)에서 gh-pages로 변경한 후에 저장합니다.


## 7. 배포된 페이지 확인하기

이제 실제로 잘 배포가 되었는지 확인해봅시다. 여태까지 문제가 없으셨다면 [GitHubID].github.io에 접근했을 때 블로그가 잘 보이는 것을 확인하실 수 있으실 겁니다.


## 8. 수정하고 배포하기

블로그를 수정하시는 방법은 각 블로그 테마마다 다를텐데요. 그에 맞춰서 변동사항을 commit하신 후에 아래 명령어를 실행하시면 변동사항이 블로그에 배포됩니다!

```c
npm run deploy
```

<br/>

## ⭐️ 이 블로그 테마를 이용하고 싶으시다면!

마지막으로 제 블로그 테마를 활용하고 싶으시다면 아래 링크를 참고해주세요!
[https://www.zoomkoding.com/gatsby-starter-zoomkoding-introduction](https://www.zoomkoding.com/gatsby-starter-zoomkoding-introduction)

궁금하신 점이 있으시다면 [이슈](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/new)로 남겨주시면 최대한 빠르게 답변 드리도록 하겠습니다!🙋‍♂️

> 🤔 혹시 특정 기능이 없어서 테마 사용을 망설이시거나 제안하고 싶으신 기능이 있으시다면,  
> 👉 [여기](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/40)에 댓글 남겨주세요! 적극적으로 반영하겠습니다 :)

<br/>

**위 과정을 따라하시면서 궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc
```
