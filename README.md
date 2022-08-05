
# Coding challenge

Dynamic programming: good sequence. This code receives by parameter an string that has the sequence
 that will be optimized. The sequence will be read as follows: the first value will be N, this number
 will define the amount of paired towers. Then, H will be assembled by taking the first N numbers after the first element
 and M will be the remaining values.


## Prerequisites

**Client:** Node


## How to run


```bash
  node codeChallenge.js <SEQUENCE TO OPTIMIZE>

```
    
## Examples

#### String order

```
    node codeChallenge.js "3 2 2 3 4 1 5"
```

N: 3

| H | M     |
| :-------- | :------- |
| 2 | 4 | 
| 2 | 1 |
| 3 | 5 |  

#### Result
Optimized cost : 2

