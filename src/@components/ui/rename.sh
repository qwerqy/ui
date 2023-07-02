#!/bin/bash

# Loop through all files in the directory
for oldfile in *; do
    # Extract the first letter of the filename
    first_letter="${oldfile:0:1}"

    # Check if the first letter is lowercase
    if [[ "$first_letter" =~ [a-z] ]]; then
        # Convert the first letter to uppercase
        first_letter_upper=$(echo "$first_letter" | tr '[:lower:]' '[:upper:]')

        # Concatenate the first letter with the rest of the filename
        newfile="${first_letter_upper}${oldfile:1}"

        # Use git mv to rename the file
        git mv "$oldfile" "$newfile"
    fi
done
