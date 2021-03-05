School report company
Find out how students did on test
String of comma seperated values from the school
Build a sample report

String of comma seperated values from the school

INPUT => OUTPUT

"Green" => "Green: 1"
"Amber" => "Amber: 1"
"Red" => "Red: 1"

"Green, Green" => "Green: 2"
"Amber, Amber" => "Amber: 2"
"Red, Red" => "Red: 2"

"Green, Red, Amber, Red" => "Green: 1\nAmber: 1\nRed: 2"
"Green, Red, Red" => "Green: 1\nRed: 2"

EDGE CASES

"Green, Cat, Red" => "Green: 1\nRed: 2\nUncounted: 1"
"Green, Cat, Dog, Red" => "Green: 1\nRed: 2\nUncounted: 2"
