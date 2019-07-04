# loadingdots

## Brief 

This package is a very tiny helper utility to enable displaying a "loading" message until a promise is resolved.

i.e. Show dots like \".....\" on the console window while the promise is pending. Stop the dots once promise resolves.

## Output

If p1 through p4 are 4 promises, loadingdots for each promise is printed on a separate line

```
Starting p1......... Finished p1
Starting p2............................. Finished p2
Starting p3.. Finished p3
Starting p4............... Finished p4
```

## Usage

For a promise named promiseX, 

```javascript
startLoadingDots('p1');
promiseX.then( d => stopLoadingDots('p1'))
```

```javascript
startLoadingDots('p1');
await promiseX
stopLoadingDots('p1')
```

## Credits
