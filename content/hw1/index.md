---
emoji: ๐ฉโ๐ป
title: ๋์  ๋ฉ๋ชจ๋ฆฌ ํ ๋น ๊ณผ์ 
date: '2021-11-28 17:30:00'
author: ์ฝ๋ฆฐ์ด
tags: ๋์ ๋ฉ๋ชจ๋ฆฌ ๋ฉ๋ชจ๋ฆฌํ ๋น ๋์ ๋ฉ๋ชจ๋ฆฌํ ๋น malloc C c์ธ์ด ๋ฌธ๋ฒ c์ธ์ด๊ธฐ์ด
categories: c์ธ์ด
---


## 1. ๐ ๋ฌธ์ 

<br/>

 ๋์  ๋ฉ๋ชจ๋ฆฌ ํ ๋น์ ์ฌ์ฉํ์ฌ ์ ์ํ ๋ฐฐ์ด์ ์์ฑํ๊ณ , ๊ทธ ๋ฐฐ์ด์ ํฌ๊ธฐ๋งํผ ์ ์๋ฅผ ์๋ ฅ๋ฐ๋๋ค. ์ด๋ ๊ฐ์ ์ ์๊ฐ 1๋ฒ ์ด์ ์๋ ฅ๋  ์ ์์ผ๋ฉฐ, ์ค๋ณต๋์ง ์์ ์ ์๋ค๋ง์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค. 3๊ฐ์ง ๋ค๋ฅธ ๋ฐ์ดํฐ์ ๋ํด ํ๋ก๊ทธ๋จ์ ์คํํ์์ค.


```bash
๋ฐฐ์ด์ ํฌ๊ธฐ๋ฅผ ์๋ ฅ: 10
์ ์ ์๋ ฅ:10 20 30 10 30 50 60 60 70 10
์ถ๋ ฅ: ์ค๋ณต๋์ง ์์ ์ ์๋ค :20 50 70
```




## 2. ๐ค ์ฝ๋ ์ค๋ช


```bash
#include <stdio.h>
#include <stdlib.h>

int main(){
    int size, i, j;

    printf("๋ฐฐ์ด์ ํฌ๊ธฐ๋ฅผ ์๋ ฅ: ");
    scanf("%d", &size);                         // ๋ฐฐ์ด์ ํฌ๊ธฐ ์๋ ฅ๋ฐ์
    int *num = malloc(sizeof(int)* size);       // ์ ์๋ฅผ ์๋ ฅ๋ฐ๋ numํฌ์ธํฐ์ ๋์ ๋ฉ๋ชจ๋ฆฌ ํ ๋น
    int *result = malloc(sizeof(int)* size);    // ์ค๋ณต๋ ์ ์๋ฅผ ํ์ธํ๋ resultํฌ์ธํฐ์ ๋์ ๋ฉ๋ชจ๋ฆฌ ํ ๋น

    printf("์ ์ ์๋ ฅ: ");
    for(i = 0; i < size; i++){
        scanf("%d", &num[i]);                   // ์ ์ ์๋ ฅ๋ฐ์
    }

    for(i = 0; i < size; i++){
        for(j = i+1; j < size; j++){
            if(num[i] == num[j]){
                result[i] = 1;                  // ์ค๋ณต ์ ๊ฐ = 1
                result[j] = 1;                  // ์ค๋ณต ์ ๊ฐ = 1
            }
        }
    }
    printf("์ค๋ณต๋์ง ์์ ์ ์๋ค: ");
    for(i = 0; i < size; i++){
        if(result[i] != 1){                     // ์ค๋ณต ๋ ๊ฐ์ 1, ์ค๋ณต ์๋ ์ ์ ๊ฐ์ 0
            printf("%d ", num[i]);
        }
    }
    printf("\n");

    free(num);                                  // ๋์ ์ผ๋ก ํ ๋นํ ๋ฉ๋ชจ๋ฆฌ ํด์ 
    free(result);

    return 0;
}
```

## 3. ๐ ์ฝ๋ ์ ์ฒด

์ฃผ์์ด ์๋ ์ ์ฒด ์ฝ๋์๋๋ค.

```bash
#include <stdio.h>
#include <stdlib.h>

int main(){
    int size, i, j;

    printf("๋ฐฐ์ด์ ํฌ๊ธฐ๋ฅผ ์๋ ฅ: ");
    scanf("%d", &size);
    int *num = malloc(sizeof(int)* size);
    int *result = malloc(sizeof(int)* size); 

    printf("์ ์ ์๋ ฅ: ");
    for(i = 0; i < size; i++){
        scanf("%d", &num[i]);             
    }

    for(i = 0; i < size; i++){
        for(j = i+1; j < size; j++){
            if(num[i] == num[j]){
                result[i] = 1;     
                result[j] = 1;         
            }
        }
    }
    printf("์ค๋ณต๋์ง ์์ ์ ์๋ค: ");
    for(i = 0; i < size; i++){
        if(result[i] != 1){               
            printf("%d ", num[i]);
        }
    }
    printf("\n");

    free(num);       
    free(result);

    return 0;
}
```

## 4. ๐ป ์คํํ๋ฉด

![example.png](example.png)




**์ ์ฝ๋๋ฅผ ์ฐธ์กฐํ์๋ฉด์ ๊ถ๊ธํ์  ์ ์ด ์๋ค๋ฉด ์๋ `๋๊ธ`๋ก ๋จ๊ฒจ์ฃผ์ธ์!๐**

<script src="https://utteranc.es/client.js"
        repo="yangwonhee/blog-comments"
        issue-term="pathname"
        label="๐"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>


```toc

```
