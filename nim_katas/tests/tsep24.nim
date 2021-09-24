import unittest
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
