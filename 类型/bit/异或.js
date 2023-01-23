// 1.若干数中有一个数出现奇数次，找出这个数
const arr = [2, 2, 3, 3, 3, 1, 1, 1, 1]
function fn(arr) {
  let eor = 0
  for (let i = 0; i < arr.length; i++) {
    eor = eor ^ arr[i]
  }
  return eor
}

// 2.不等于0的数，提取出最右侧的1
eor & (~eor + 1)

// 3.若干数中有两个数出现奇数次，找出这个两个数
const arr = [2, 2, 3, 3, 3, 1, 1, 1, 1]
function fn(arr) {
  let eor = 0
  for (let i = 0; i < arr.length; i++) {
    eor = eor ^ arr[i]
  }

  const rightOne = eor & (~eor + 1)

  let a = 0
  for (let i = 0; i < arr.length; i++) {
    if ((rightOne & arr[i]) == 0) {
      a = a ^ arr[i]
    }
  }
  b = a ^ eor

  return [a, b]
}

// 4.两数中点
mid = L + ((R - L) >> 1)
