import sequtils

func hello_world*(): string = 
    ## Says `Hello World`
    result = "Hello World"

proc arrayDiff*(a: seq[int], b: seq[int]): seq[int] =
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

proc calculateLead*(a, b, lead: int): HoursMinSec =
  ## Calculate how much time will it take to `b` to catch `a` if a has `lead`.
  ## - if `b` is greater than `b` return [-1, -1, -1]
  if a > b:
    [ -1, -1, -1 ]
  else:
    [ -1, -1, -1 ]
