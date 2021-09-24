import unittest
import nim_katas/sep24

test "can say `Hello World`":
  #arrange
  let want = "Hello World"
  #act
  let actual = hello_world()
  #assert
  check want == actual

suite "Array diff":
  const empty: seq[int] = @[]

  test "Basic tests":
    check(arrayDiff(@[1, 2], @[1]) == @[2])
    check(arrayDiff(@[1, 2, 2], @[1]) == @[2, 2])
    check(arrayDiff(@[1, 2, 2], @[2]) == @[1])
    check(arrayDiff(@[1, 2, 2], @[]) == @[1, 2, 2])
    check(arrayDiff(@[], @[1, 2]) == empty)
    check(arrayDiff(@[1, 2, 3], @[1, 2]) == @[3])
