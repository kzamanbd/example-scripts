<?php


$dir = './all-files'; // Replace with the path to your directory

if ($handle = opendir($dir)) {
    $i = 4000;
    while (false !== ($file = readdir($handle))) {
        if ($file != '.' && $file != '..') {
            $oldFilePath = $dir . '/' . $file;

            // You can modify the new file name as needed. This example adds "_new" to the original name.
            $newFilePath = $dir . '/IMG_' . $i++ . '.' . pathinfo($file, PATHINFO_EXTENSION);

            if (rename($oldFilePath, $newFilePath)) {
                echo 'File ' . $file . ' renamed successfully.<br>';
            } else {
                echo 'Error renaming file ' . $file . '.<br>';
            }
        }
    }

    closedir($handle);
}
