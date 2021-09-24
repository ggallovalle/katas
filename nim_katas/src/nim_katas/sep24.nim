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
      a.filterIt(not b.contains(it))
