## hpdfweekone
This is simple project, for tasks of HPDF weekone.

> This app based on [expressjs](https://expressjs.com) framework.
 ### Dependencies
    "bluebird": "^3.5.1",
    "body-parser": "^1.18.2",
    "cookie-parser": "^1.4.3",
    "express": "^4.16.2",
    "path": "^0.12.7",
    "request": "^2.83.0",
    "request-promise": "^4.2.2"
    
## Running locally
### TEST NODE and TEST NPM
Make sure you have [Nodejs](https://nodejs.org/en/) installed.
To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type
```
node -v
```
This should print a version number if node is properly installed.

To see if NPM is installed, type
```
npm -v
```
This should print a version number if npm is properly installed.

### Cloning from git repository
Open a command line tool and type
```
git clone https://github.com/sharmasoumyadip/hpdfweekone.git
cd hpdfweekone
npm install
```
This install the required dependencies for the app.
** To Run the app type **
```
node app.js
```
The app should run on (http://localhost:8000)[http://localhost:8000] on local Machine.

## HPDF TASKS
- Task one:  
  > At http://localhost:8000, it responds with a simple simple "Hello World - Soumyadip"
- Task 2
  > At http://localhost:8000/authors
    It fetches a list of authors and post from two different request two different REST API.
    and responds with a list of authors and the count of their posts.
- Task 3
  > At http://localhost:8080/setcookie 
  it set two cookies.
- Task 4
  > http://localhost:8080/getcookies
  It displays the stored values in the cookies.
- Task 5
  > It denies Deny requests to at http://localhost:8000/robots.txt
- Task 6
  > At http://localhost:8000/html
  It responds with a html file
- Task 7
  >At http://localhost:8080/input
  It responds with a text box and submit button, which sends the data as POST to a [endpoint](http://localhost:8080/input).
  This endpoint logs the recieved data to stdout.
