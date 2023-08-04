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
