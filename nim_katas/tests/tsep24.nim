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
    check(arrayDiff(@[1, 2, 2], empty) == @[1, 2, 2])
    check(arrayDiff(@[], @[1, 2]) == empty)
    check(arrayDiff(@[1, 2, 3], @[1, 2]) == @[3])

suite "Tortoise race":
  test "Basic tests":
    check(calculateLead(720, 850, 70) == [0, 32, 18])
    check(calculateLead(820, 81, 550) == [-1, -1, -1])
