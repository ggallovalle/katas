import unittest
import nim_katas/sep24

test "can say `Hello World`":
  #arrange
  let want = "Hello World"
  #act
  let actual = hello_world()
  #assert
  check want == actual
