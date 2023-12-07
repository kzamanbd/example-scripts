<?php


$directory = './images/';

// Get the list of files in the directory
$files = scandir($directory);

// Remove . and .. from the list
$files = array_diff($files, ['.', '..']);

// Create an associative array to store file names and their modified dates
$fileDates = [];

foreach ($files as $file) {
    $filePath = $directory . $file;

    // Check if the item is a file
    if (is_file($filePath)) {
        // Get the file's modified date
        $fileDates[$file] = filemtime($filePath);
    }
}

// Sort the array by modified date in ascending order
asort($fileDates);

// Iterate through the sorted array and rename the files
foreach ($fileDates as $file => $modifiedDate) {
    $oldFilePath = $directory . $file;

    // Define the new file name as per your requirements
    $newFileName = 'IMG_.' . pathinfo($file, PATHINFO_EXTENSION);

    $newFilePath = $directory . $newFileName;

    // Rename the file
    if (rename($oldFilePath, $newFilePath)) {
        echo "File '$file' renamed to '$newFileName' successfully.<br>";
    } else {
        echo "Error renaming file '$file'.<br>";
    }
}
