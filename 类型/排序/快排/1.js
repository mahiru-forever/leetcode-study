function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
}

function partition(arr, left, right) {
  const povit = left
  let index = left + 1

  for (let i = index; i <= right; i++) {
    if (arr[povit] > arr[i]) {
      swap(arr, index++, i)
    }
  }

  swap(arr, index - 1, povit)

  return index - 1
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
