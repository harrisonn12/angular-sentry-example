# Angular Sentry Example
---
Angular example for error catching using Sentry

## How to use
1. Install Angular ```npm install -g @angular/cli```
2. Clone this project
3. Paste your provided DSN into src/app/app.module.ts
```javascript
Sentry.init({
  dsn: "INSERT DSN HERE",
});
```
4. Start your server via ```ng serve```
5. Access example at http://localhost:4200/

### Optional
- change **showDialog** in src/app/app.module.ts to **false** if you do not want a pop up dialog box to appear after an error
```javascript
providers: [
  {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: true,
    }),
  },
],
```
