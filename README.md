﻿# Bubo
 ![](https://img.shields.io/github/issues/Huusky/bubo?style=flat-square)
 ![](https://img.shields.io/github/issues-closed/Huusky/bubo?style=flat-square)
 ![](https://img.shields.io/github/issues-pr/Huusky/bubo?style=flat-square)
---
### Features

- Search for courses by code and return course name
- Describe courses by code and return a course description
- Search for degrees by name and return classes in each term (upcoming)

### Usage

**Help command**:
To get a list of commands, use `bubo help` 
To get specific help with a command, use `bubo help <command>`

**Course command**:
To search for a course, use `bubo course <course code>`
If the course exists, it will reply to the invoker with the course name.
If the course does not exist, it will reply to the invoker that no course exists in the DB.
**note: should the course be an actual course, but bubo does not have it, please open a new issue on github to have it added. Please provide the course code, as well as the description copied directly from the course page on your WGU portal**

**Certification command**:
To get information on a certification, use `bubo certification <certification name or code>`
If the certification exists, it will reply to the invoker with the certifiation name, a brief description, whether multiple exams are required, and the passing score

### Issues or Feature Requests?

Feel free to create a new issue for feature requests, course add requests, certification add requests, or general issues. Please use the templates if it fits.
