/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-02-22 21:21:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-25 14:36:29
 */
function Promise(executor) {

  this.state = 'pending'

  this.value = ''

  this.callbackList = []
  let self = this

  function resolve(val) {
    if (self.state !== 'pending') {
      return
    }
    self.state = 'fulfilled'
    self.value = val

    if (self.callbackList.length > 0) {
      // self.callbackList.
      setTimeout(() => {
        self.callbackList.forEach(element => {
          element.onResolve(self.value)
        });
      })
    }
  }

  function reject(val) {
    if (self.state !== 'pending') {
      return
    }
    self.state = 'rejected'
    self.value = val

    if (self.callbackList.length > 0) {
      // self.callbackList.
      setTimeout(() => {
        self.callbackList.forEach(element => {
          element.onReject(self.value)
        });
      })

    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }

}
Promise.prototype.then = function (onResolve, onReject) {
  //  用于错误穿透和 值传递
  onResolve = typeof onResolve === 'function' ? onResolve : value => value
  onReject = typeof onReject === 'function' ? onReject : resson => {
    throw resson
  }



  // let self = this

  return new Promise((resolve, reject) => {

    let callback = (fn) => {
      let result = fn(this.value)
      if (result instanceof Promise) {
        result.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      } else {
        resolve(result)
      }


    }
    if (this.state === 'fulfilled') {
      setTimeout(() => {
        callback(onResolve)
      })
      // let result = onResolve(this.value)
      // if (result instanceof Promise) {
      //   result.then(v => {
      //     resolve(v)
      //   }, r => {
      //     reject(r)
      //   })
      // } else {
      //   resolve(result)
      // }
    }
    if (this.state === 'rejected') {
      setTimeout(() => {
        callback(onReject)
      })
      // onReject(this.value)
      // let result = onReject(this.value)
      // if (result instanceof Promise) {
      //   result.then(v => {
      //     resolve(v)
      //   }, r => {
      //     reject(r)
      //   })
      // } else {
      //   resolve(result)
      // }
    }

    if (this.state === 'pending') {
      this.callbackList.push({
        onResolve: function () {
          // 执行成功的回调函数
          // onResolve(self.value)
          callback(onResolve)
        },
        onReject: function () {
          // 执行失败的回调函数
          // onReject(self.value)
          callback(onReject)

        }
      })
    }
  })




}

Promise.prototype.catch = function (onReject) {

  // console.log(this);
  return this.then(undefined, onReject)
}


// 两种情况    如果value的类型String  返回成功的Promise  成功的值就是 value
//             如果value的类型是Promise 则由 传入的promise 的状态和结果决定
Promise.resolve = function (val) {
  return new Promise(function (resolve, reject) {
    if (val instanceof Promise) {
      val.then(v => {
        resolve(v)
      }, r => {
        reject(r)
      })
    } else {
      resolve(val)
    }
  })
}

Promise.reject = function (val) {
  return new Promise(function (resolve, reject) {
    reject(val)
  })
}


// 传入数组  返回Promise  都成功则为成功状态的Promise 值为三个传入promise的值的数组,且按照传入的顺序
// 有一个失败就是 失败状态的promise 值为失败的那个值
// 这种写法会导致顺序问题
Promise.all = function (arr) {
  return new Promise((resolve, reject) => {
    let len = arr.length
    let successResult = []
    arr.forEach((element, index) => {
      element.then(v => {
        successResult.push(v)
        // successResult[index] = v
        if (successResult.length == len) {
          resolve(successResult)
        }
      }, r => {
        reject(r)
      })
    })
  })
}
// 第二种 all   不会导致顺序问题
Promise.all2 = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let arr = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        count++
        arr[i] = v
        if (count == promises.length) {
          resolve(arr)
        }
      }, r => {
        reject(r)
      })
    }
  })

}
// 
Promise.race = function (arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(v => {
        resolve(v)
      }, r => {
        reject(r)
      })
    }
  })
}