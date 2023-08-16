<?php

class MyClass
{
    public static $str = "Hello World!";

    public static function hello()
    {
        echo self::$str;
    }
}

echo MyClass::hello();

echo "I'll be eating \xF0\x9F\x8D\x94 for dinner tonight! (using emoji's UTF-8 Bytes)<br />";
echo "I'll be eating \u{1F351} for dinner tonight! (using emoji's unicode)";
