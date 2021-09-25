import sequtils, strformat, strutils, options

func hello_world*(): string = 
    ## Says `Hello World`
    result = "Hello World"

func arrayDiff*(a: seq[int], b: seq[int]): seq[int] =
  ## It should remove all elements in seq `a` which are present in seq `b`.
  const empty: seq[int] = @[]
  result = 
    if len(a) == 0:
      empty
    elif len(b) == 0:
      a
    else:
      # Not eficcient enough
      a.filterIt(not b.contains(it))

type 
  HoursMinSec = array[0..2, int]

func calculateLead*(a, b, lead: int): HoursMinSec =
  ## Calculate how much time will it take to `b` to catch `a` if a has `lead`.
  ## - if `b` is greater than `b` return [-1, -1, -1]
  if a > b:
    [ -1, -1, -1 ]
  else:
    [ -1, -1, -1 ]

func isPrime(n: int): bool =
  for x in 2..<n:
    if n mod x == 0:
      return false
  return true
  

iterator primes(initial, finish: int): int =
  for it in initial..finish:
    if it.isPrime:
      yield it


iterator primesInPairs(initial, finish: int): tuple[prev: int, curr:  int] =
  var pair: seq[int] = @[]
  for it in initial..finish:
    if it.isPrime:
      if pair.len == 2:
        yield ( pair[0], pair[1] )
        pair.setLen(0)
      add(pair, it)

func primeNumbersStep*(step, initial, finish: int): seq[int] =
    ## Find the first two prime number between `initial` and `finish` which have
    ## an `step` between the two.
    # var prev = 0
    var previous = 0
    for prime in primes(initial, finish):
      if prime - previous == initial:
        return @[previous, initial]
      previous = prime

    return @[0, 0]

# [a,b,c,d] len: 4, until: 4 - 2 = 2
# 0 1 - 0 a b
# 1 2 - 1 b c
# 2 3 - 2 c d
# NOTE v1
# func longestConsec*(s: seq[string], k: int): string =
#   let sLen = s.len
#   if k <= 0: return ""
#   if k > sLen: return ""
#   if sLen == 0: return ""

#   var longestIndex = 0
#   var longestCount = 0
#   for i in 0..<(sLen - k):
#     if i + k > sLen:
#       break
#     let currCount = s[i..<(i + k)].foldl(a + b.len, 0)
#     if longestCount < currCount:
#       longestCount = currCount
#       longestIndex = i

#   return s[longestIndex..<(longestIndex + k)].foldl(a & b)

func longestConsec*(s: seq[string], k: int): string =
  let sLen = s.len
  if k <= 0: return ""
  if k > sLen: return ""
  if sLen == 0: return ""

  var longestIndex = 0
  var longestCount = 0
  for i in 0..(sLen - k):
    let currCount = s[i..<(i + k)].foldl(a + b.len, 0)
    if longestCount < currCount:
      longestCount = currCount
      longestIndex = i

  return s[longestIndex..<(longestIndex + k)].foldl(a & b)


func findShort*(s: string): int =
  return s.split(" ").foldl(if a < b.len: a else: b.len, 100)


func first_non_consecutive*(arr: seq[int]): Option[int] =
  var prev = arr[0]
  for curr in arr[1..<arr.len]:
    if prev != curr - 1:
      return some(curr)
    prev = curr
  return none(int)  

# proc gap*(g, m, n: int): seq[int] =
#   for ( a, b ) in primesInPairs(m, n):
#     if b - a == g:
#       return @[a, b]
#   return @[]
