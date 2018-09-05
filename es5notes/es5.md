### call()和apply()的妙用
========
##### 异同点
* 1. 相同点

  > 作用是一样的，call 和 apply 都是为了改变函数体内部 this 的指向，也就是把Function(即this)绑定到obj，这时候obj具备了Function的属性和方法，说白一点就是obj继承了Function的属性和方法。

* 2. 不同点

  > 相信大家也已经发现了，他们唯一区别就是接受参数的方式不太一样，apply接受的是数组参数，call接受的是连续参数。
========
##### 妙用
* 1. 类数组转换为数组方法
  `Array.prototype.slice.call(arrayLike)`
* 2. 
  `Array.prototype.push.apply(arr1,arr2);`


