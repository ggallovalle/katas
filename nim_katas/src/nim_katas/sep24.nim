import sequtils, strformat

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
