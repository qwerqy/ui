#!/bin/bash

# Protect master from accidental commits.
echo -e "===\n>> Checking branch name"
branchName=$(git branch | grep '*' | sed 's/* //')

if [ $branchName == 'main' ]
then
  echo -e "\n🚫 Commit directly to master branch is not allowed!\n" && exit 1
fi

if [ $branchName == 'develop' ]
then
  echo -e "\n🚫 Cannot push to remote develop branch, please create your own branch and use PR." && exit 1
fi

if [[ $branchName = *[![:ascii:]]* ]]
then
  echo -e "\n🚫 Branch name should not have any ascii and upper case letters, please rename your branch name.\n" && exit 1
fi

if [[ $branchName =~ [A-Z] ]]
then
  echo -e "\n🚫 Branch name should not have any ascii and upper case letters, please rename your branch name.\n" && exit 1
fi

echo -e ">> Finish checking branch name\n==="

exit 0