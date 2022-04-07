/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-02-22 21:21:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-07 22:43:53
 */

class Promise {
  constructor(executor) {
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
  then(onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ? onResolve : value => value
    onReject = typeof onReject === 'function' ? onReject : resson => {
      throw resson
    }
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
      }
      if (this.state === 'rejected') {
        setTimeout(() => {
          callback(onReject)
        })
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

  catch (onReject) {
    return this.then(undefined, onReject)
  }

  static resolve(val) {
    return new Promise((resolve, reject) => {
      if (val instanceof Promise) {
        val.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }else{
        resolve(val)
      }
    })
  }

  static reject(val) {
    return new Promise((resolve, reject) => {
      reject(val)
    })
  }

  static all(arr) {
    return new Promise((resolve, reject) => {
      let len = arr.length
      let count = 0
      let result = []
      arr.forEach(element => {
        count++
        element[i].then(res => {
          result[i] = res
          if (count == len) {
            resolve(result)
          }
        }, reg => {
          reject(reg)
        })
      });
    })
  }

  static race(arr) {
    return new Promise((resolve, reject) => {
      arr.forEach(element => {
        element.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      })
    })
  }
}