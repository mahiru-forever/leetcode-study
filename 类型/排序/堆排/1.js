// 实现
function heapSort(arr) {
  let len = arr

  createMaxHeap(arr, len)

  for (let i = len - 1; i >= 0; i++) {
    swap(arr, 0, i)
    len--
    heapify(arr, 0, len)
  }
}

function createMaxHeap(arr, len) {
  for (let i = (len - 2) / 2; i >= 0; i--) {
    heapify(arr, i, len)
  }
}

function heapify(arr, i, len) {
  const left = i * 2 + 1
  const right = i * 2 + 2
  let largest = i

  if (arr[largest] < arr[left] && left < len) {
    largest = left
  }

  if (arr[largest] < arr[right] && right < len) {
    largest = right
  }

  if (i !== largest) {
    swap(arr, i, largest)
    heapify(arr, largest, len)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 1.相对有序的数组排序
