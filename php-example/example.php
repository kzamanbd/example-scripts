<?php

function exampleFunction()
{
    // Static variable retains its value between function calls
    static $count = 0;

    $count++;
    echo "Function has been called $count times.\n";
}

// Calling the function multiple times
// exampleFunction();
// exampleFunction();
// exampleFunction();

// $a = '1';
// $b = &$a;
// $b = "2$b";
// echo $a . ", " . $b;


$name = "Welcome";

$Welcome = "To";

$To = "TechBeamers";

echo $name;
/*prints Welcome*/
echo $name;
/*prints To*/
echo $$name;
/*prints TechBeamers*/