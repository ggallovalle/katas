import unittest, options
import nim_katas/sep24

test "can say `Hello World`":
  check hello_world() == "Hello World"

suite "Array diff":
  const empty: seq[int] = @[]

  test "Basic tests":
    check arrayDiff(@[1, 2], @[1]) == @[2]
    check arrayDiff(@[1, 2, 2], @[1]) == @[2, 2]
    check arrayDiff(@[1, 2, 2], @[2]) == @[1]
    check arrayDiff(@[1, 2, 2], empty) == @[1, 2, 2]
    check arrayDiff(@[], @[1, 2]) == empty
    check arrayDiff(@[1, 2, 3], @[1, 2]) == @[3]

# suite "Tortoise race":
#   test "Basic tests":
#     skip()
#     check(calculateLead(720, 850, 70) == [0, 32, 18])
#     check(calculateLead(820, 81, 550) == [-1, -1, -1])

# suite "Step in prime numbers":
#   test "Basic tests":
#     check primeNumbersStep(2,100,110) ==  @[101, 103]
#     check primeNumbersStep(4,100,110) == @[103, 107]
#     check primeNumbersStep(6,100,110) == @[101, 107]
#     check primeNumbersStep(8,300,400) ==  @[359, 367]
#     check primeNumbersStep(10,300,400) ==  @[307, 317]

suite "longestConsec":
  test "fixed tests":
    proc testing(strarr: seq[string], k: int, expect: string) =
      let actual: string = longestConsec(strarr, k)
      check(actual == expect)

    testing(@["zone", "abigail", "theta", "form", "libe", "zas"], 2, "abigailtheta")
    testing(@["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1, 
        "oocccffuucccjjjkkkjyyyeehh")
    testing(@[], 3, "")
    testing(@["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0, "")
    testing(@["xxxzzxxtt", "iokkii", "ywwwiyvv", "qqqgkkwwwsssvv", "xxiiibb", "hhhqqlllwwwybbbcvv", "bbbuufhhfffe", "zzyyyzz", "kkkjjjuucctttff"], 7, 
        "ywwwiyvvqqqgkkwwwsssvvxxiiibbhhhqqlllwwwybbbcvvbbbuufhhfffezzyyyzzkkkjjjuucctttff")

suite "Shortest Word":
  test "Basic tests":
    check(findShort("bitcoin take over the world maybe who knows perhaps") == 3)
    check(findShort("turns out random test cases are easier than writing out basic ones") == 3)
    check(findShort("lets talk about javascript the best language") == 3)
    check(findShort("i want to travel the world writing code one day") == 1)
    check(findShort("Lets all go on holiday somewhere very cold") == 2)
    check(findShort("Let's travel abroad shall we") == 2)

suite "First Non-consecutive Number":
    test "Six":
        check first_non_consecutive(@[1,2,3,4,6,7,8]) == some(6)
    test "None":
        check first_non_consecutive(@[1,2,3,4,5,6,7,8]) == none(int)
    test "Six":
        check first_non_consecutive(@[4,6,7,8,9,11]) == some(6)
    test "Eleven":
        check first_non_consecutive(@[4,5,6,7,8,9,11]) == some(11)
    test "None":
        check first_non_consecutive(@[31,32]) == none(int)
    test "Zero":
        check first_non_consecutive(@[-3,-2,0,1]) == some(0)
    test "Negative one":
        check first_non_consecutive(@[-5,-4,-3,-1]) == some(-1)


# suite "gap":
#   test "fixed tests":
#     var empty: seq[int] = @[]
#     check gap(2,100,110) == @[101, 103]
#     check gap(4,100,110) == @[103, 107]
#     check gap(6,100,110) == empty
#     check gap(8,300,400) == @[359, 367]
#     check gap(10,300,400) ==  @[337, 347]
