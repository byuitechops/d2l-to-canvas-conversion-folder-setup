# D2L to Canvas Conversion Folder Setup
### *Package Name*: d2l-to-canvas-conversion-folder-setup

This module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

When the conversion tool is run, it requires certain folders to exist in the repo where the d2l course will be downloaded to. The tool will throw errors if the correct folders do not exist when the tool is run. This module aims to remedy that.

## How to Install

```
npm install d2l-to-canvas-conversion-folder-setup
```

## Run Requirements

None 

## Options

None

## Outputs

None

## Process

Describe in steps how the module accomplishes its goals.

1. Creates two arrays of the needed folder names
2. Loops through the arrays and for each:
    - Check if the folder exists already
    - If it doesn't, then make it in the correct location
    - Log that it was made

## Log Categories

None that are included in the conversion reports.

Logs on the console: `Made folder: <folderName>`

## Requirements

Add the needed folders to the repo so the d2l course will be downloaded properly.
