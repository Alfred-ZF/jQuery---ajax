window.jQuery.ajax = ({url, method, successFn, failFn, body, request, headers})=>{

  // let url
  // if (options.length === 1) {
  //   url = options.url
  // }else if (options.length === 2) {
  //   url = arguments[0]
  //   options = arguments[1]
  // }

  // let method = options.method
  // let successFn = options.successFn
  // let failFn = options.failFn
  // let body = options.body
  // let request = new XMLHttpRequest()
  // let headers = options.headers

  // let {url, method, successFn, failFn, body, request, headers} = options

  request.open(method,url)

  for (let key in headers) {
    let value = headers[key]
    request.setRequestHeader(key, value)
  }

  request.onreadystatechange = (e)=>{
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 300) {
        successFn.call(undefined,request.responesText)
        
      }else if (request.readyState >= 400) {
        failFn.call(undefined,request) 
      }
    }
  }

  request.send(body)

}

//操作端
window.$ = window.jQuery

var f1 = (responesText)=>{}
var f2 = (responseText)=>{}

myButton.addEventListener('click',(e)=>{

  window.jQuery.ajax({
    url:'/xxx',
    method:'post',
    successFn:(x)=>{
      f1.call(undefined,x);
      f2.call(undefined,x);
    },
    failFn:(x)=>{
      console.log(x);
    },
    headers:{
      'content-type':'x-www-form-urlencoded',
      'fan':'27'
    }
  })

})