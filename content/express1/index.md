---
emoji: 🔮
title: 7장 [쉽게 풀어쓰는 c언어 express]
date: '2021-04-20 00:58:00'
author: 코린이
tags: c언어 반복문 난수생성
categories: lecture
---


`SW융합코딩` 강의를 수강하며 네이버 블로그에 기록해 두었다. 그게 벌써 작년이라니 🥲 

시간은 순식간에 흘러가는데 내 실력은 왜 ... 🤦‍♀️

네이버 블로그 글들 중 조회수가 유난히 많은 글들을 옮겨놓으려고 한다. 그 중에서도 조회수가 1500이 넘은 이 글부터 옮기기...

<!-- 원문은 [_여기_](https://blog.naver.com/friendlilo/222316107898, "네이버블로그") 에 있습니다. ~~근데 원문보다 이 글이 더 깔끔해요 ㅎㅎ 아마도..~~ -->

<br/>

## 🐬 __do while 문__
<br/>

적어도 한 번은 무조건 실행하고, while의 조건이 참이라면 do 안의 문장들을 반복한다.

```c
do{
문장1;
문장2;
...
} while (조건);
```


<br/>

_# 예제 1_ : 사용자가 0을 입력할 때 까지 숫자를 더한다.

```c
#include <stdio.h>
int main(){
    int number, sum = 0;
    do{
        printf("정수를 입력하시오.: ");
        scanf("%d", &number);
        sum += number;
    } while(number != 0);

    printf("입력받은 숫자 합 = %d\n", sum);
    return 0;
}
```


<br/>
_# 예제 2_ : do while 문을 이용한 메뉴 구성

```c
#include <stdio.h>

int main(){
    int i = 0;
    do {
        printf("1--- 새로만들기\n");
        printf("2--- 파일열기\n");
        printf("3--- 파일닫기\n");
        printf("하나를 선택하시오.\n");
        scanf("%d", &i);
    } while(i < 1 || i > 3);

    printf("선택된 메뉴 = %d\n", i);
    return 0;
}
```

<br/>

_# lab_ : 숫자 추측 게임 <br/>
프로그램이 가지고 있는 정수를 사용자가 맞추는 게임. (up down게임)
```c
#include <stdio.h>
int main(){
    int answer = 59;
    int guess;
    int tries = 0;
    do {
        printf("number? ");
        scanf("%d", &guess);
        tries++;
        if(guess > answer)
            printf("down\n");
        if(guess < answer)
            printf("up\n");
    } while (guess != answer);
    printf("correct! tires: %d\n", tries);
    return 0;

```

<br/>


_# 도전문제!_

위의 프로그램이 게임이 되려면 난수를 발생시키는 것이 좋다. 난수는 (rand()%100)으로 발생이 가능하다. stdlib.h 헤더 파일도 포함시켜야 한다.

​
를 위한 난수 생성의 개념과 적용 👇
​

​

## 🐳 __난수 생성__

1. 라이브러리 함수를 이용한 난수 생성

2. 주어진 범위 안에서 난수 생성

3. 실수형 난수의 생성

> 난수(random number): 특정한 배열순서나 규칙을 가지지않는, 연속적인 임의의 수 (로또복권 당첨번호)

> 난수는 주로 컴퓨터 게임이나 모의실험(simulation)에 사용 됨.


1. 라이브러리 함수를 이용한 난수 생성 <br/>
rand라는 라이브러리 함수를 사용. <br/>
함수 rand는 0 <= rand() <= 32767 범위 내에서 임의의 정수 난수 한 개를 반환 <br/> <br/>

__난수와 관련된 라이브러리 함수__ 

|함수 원형|사용|반환 값|컴파일러|
|-----------|-------|----|--------|
|int rand(void);|난수 생성|0~32767사이의 정수|visual c++, turbo c/c++|
|void srand (unsigned int seed);|난수 초기화|없음|visual c++, turbo c/c++|
|void randomize (void);|난수 초기화|없음|turbo c/c++|


<br/> 

매 실행마다 다른 난수를 생성하려면 함수 srand의 인수를 실행마다 다르게 설정해야 하는데 이때 현재의 시간값을 이용. 시간은 함수 time을 이용.

_# 예시_
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int i;
    srand(time(NULL));
    for(i = 1; i <= 10; i++){
        printf("%2d: %d\n", i, rand());
    }
    return 0;
}
```

<br/> <br/> 

2. 범위 내의 난수 생성 <br/>
로또 복권과 같이 1부터 45사이 또는 0부터 99사이와 같이 특정한 범위(구간) 내에서의 난수를 생성하는 방법. <br/>
`특정한 범위`내의 정수 난수를 생성하려면 함수 `rand`에 대해 아래와 같이 나머지 연산자 `%`와 `덧셈` 또는 뺄셈을 적절히 사용.
<br/>

​|정수 난수 생성범위|프로그램 연산식|설명|
|-----|-------|----|
|1 <= 정수난수 <= 6|rand()%6 + 1;|6으로 나눈 나머지 값의 범위는 0~5인데 이 값에 1을 더하므로 1~6 사이의 난수 생성.|
|1 <= 정수난수 <= 45|rand()%45 + 1;|45로 나눈 나머지 값의 범위는 0~44인데 이 값에 1을 더하므로 1~45 사이의 난수 생성.|
|0 <= 정수난수 <= 99|rand()%100;|100으로 나눈 나머지 값의 범위는 0~99이므로 0~99 사이의 난수 생성.|
|10  <= 정수난수 <= 30|rand()%21 + 10;|21으로 나눈 나머지 값의 범위는 0~20인데 이 값에 10을 더하므로 10~30 사이의 난수 생성.|
|-5 <= 정수난수 <= +5|rand()%11 - 5;|11으로 나눈 나머지 값의 범위는 0~10인데 이 값에 5을 감해주면 -5~+5 사이의 난수 생성.|


<br/><br/>


_# 예시_ : 주사위 10번 던져서 나온 눈금의 출력.

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int i;
    srand(time(NULL));
    for(i = 1; i<= 10; i++){
        printf("%2d: %d\n", i, rand()%6+1);
    }
    return 0;
}
```
_# 출력값1_
```c
 1: 4
 2: 5
 3: 3
 4: 1
 5: 4
 6: 6
 7: 4
 8: 4
 9: 3
10: 5
```
_# 출력값2_
```c
 1: 1
 2: 3
 3: 3
 4: 2
 5: 6
 6: 1
 7: 4
 8: 6
 9: 3
10: 5
```

이처럼, 매번 다른 값으로 출력이 됩니다.

<br/><br/> <br/><br/>

3. 실수형 난수의 생성 <br/>
함수 rand 는 int형 함수 <br/>
0 이상 32767(RAND_MAX)이하의 정수 난수를 생성. <br/>
0이상 1이하의 실수 난수를 생성해야 한다면 RAND_MAX를 이용하여 나눗셈 연산으로 처리. <br/>


0 <= rand() <= 32767  👉   0 <= rand()/RAND_MAX <= 1

> RAND_MAX도 정수형이므로 실제 프로그램에서는 cast 연산자를 이용하여 명시적 형변환을 사용해야 함.

_# 예시_
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int i;
    double rnd;
    srand(time(NULL));
    for(i =1; i<= 5; i++){
        rnd = rand()/(double)RAND_MAX;
        printf("%6.4f\n", rnd);
    }
    return 0;
}
```

<br/> <br/>

_# 난수발생_
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int x, y, answer, i;
    srand(time(NULL));

    for(i = 0; i < 10; i++){
        x = rand()%10;
        y = rand()%10;
        printf("%d + %d =", x, y);
        scanf("%d", &answer);
        if(x + y == answer){
            printf("correct!\n");
        }
        else {
            printf("no.......\n");
        }
        return 0;
    }
}
```

<br/><br/>


## 🌊 __도전문제__ 

- 위의 프로그램이 게임이 되려면 난수를 발생시키는 것이 좋다. 난수는 (rand()%100)으로 발생이 가능하다. stdlib.h 헤더 파일도 포함시켜야 한다.

​

```c
// number game
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    srand(time(NULL));
    int answer = (rand()%100 + 1);
    int guess;
    int tries = 0;
    do {
        printf("number? ");
        scanf("%d", &guess);
        tries++;
        if(guess > answer)
            printf("down\n");
        if(guess < answer)
            printf("up\n");
    } while (guess != answer);
    printf("correct! tries: %d\n", tries);
    return 0;
}
```
_# 출력값_
```c
number? 50
down
number? 25
up
number? 46
down
number? 36
down
number? 29
correct! tries: 5
```

<br/><br/>
<br/><br/>


**이 글의 `원문`으로!👇**

[_원문_](https://blog.naver.com/friendlilo/222316107898, "네이버블로그") 


```toc

```
