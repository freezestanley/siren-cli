window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
  if (process.env.NODE_ENV === 'production') {
  } else {
    alert(`errorMessage:${errorMessage};scriptURI:${scriptURI};lineNumber:${lineNumber};columnNumber:${columnNumber};errorObj:${errorObj};`)
  }
}
