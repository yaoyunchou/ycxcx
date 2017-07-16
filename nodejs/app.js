//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },
  listLi: [
    {
      "id": 1,
      "title": "1、Node.js是什么？",
      "desc": "答：传统意义上的 JavaScript 运行在浏览器上，这是因为浏览器内核实际上分为两个部分:渲染引擎和 javascript 引擎。前者负责渲染 HTML + CSS，后者则负责运行 JavaScript。Chrome 使用的 JavaScript 引擎是 V8，它的速度非常快。Node.js 是一个运行在服务端的框架，它的底层就使用了 V8 引擎。我们知道 Apache + PHP 以及 Java 的 Servlet 都可以用来开发动态网页，node.js 的作用与他们类似，只不过是使用 JavaScript 来开发。"
    },
    {
      "id": 2,
      "title": "2、关于NodeJS与传统服务器处理平台（Apache）的区别",
      "desc": "答：Apache的多线程高并发模式  \t\r Apache是一种多线程处理并发，但是在一些大型的web应用上也会发生阻塞。线程和进程线程是可以独立运行的最小的CPU单位。线程可以在同一个进程中并发运行，并共享该进程下的内存地址空间。进程可以支持多个线程，它们看似同时执行，但是相互之间并不同步。 一个进程中的多个线程共享相同的内存地址空间，意味着可以访问相同的变量和对象，并且从同一堆中分配对象。 这样让线程之间共享信息变得容易，但是也要确保他们不会妨碍同一进程中想的其他线程。"
    },

    {
      "id": 3,
      "title": "3、Node事件的工作原理是什么？",
      "desc": "答：为某个对象绑定事件（通过on这个方法绑定），也可以理解为为某个对象添加一个或多个观察者（通过callback设定事件，即回调方法），来观察这个对象的动作这个对象在某个状态或操作下，触发事件，或者说激活观察者行为（通过emit激活某类事件或观察者）被激活的事件执行相应的处理（执行callback方法）"
    },
    {
      "id": 4,
      "title": "4、描述一下ArrayList和LinkedList各自实现和区别",
      "desc": "答：ArrayList是由数组实现，适合查找LinkedListjdk7之后是双向链表，适合删除、修改，效率比较高"
    },
    {
      "id": 5,
      "title": "5、Java中的队列都有哪些，有什么区别",
      "desc": "答：java中的队列的接口是Queue，分为阻塞和非阻塞队列，常用的队列实现类有ArrayDueue等"
    },
    {
      "id": 6,
      "title": "6、反射中，Class.forName和classloader的区别",
      "desc": "答：class.forName()前者除了将类的.class文件加载到jvm中之外，还会对类进行解释，执行类中的static块。而classLoader只干一件事情，就是将.class文件加载到jvm中，不会执行static中的内容,只有在newInstance才会去执行static块。"
    },
    {
      "id": 7,
      "title": "7、Java7、Java8的新特性",
      "desc": "答; Java7:1.switch可以接受string类型而不像以前仅仅是int；2.异常catch可以一次处理完而不像以前一层层的surround；"
    },
    {
      "id": 8,
      "title": "8、Java数组和链表两种结构的操作效率，在哪些情况下（从头开始，从结尾开始，从中间开始），哪些操作（插入、查找、删除）的效率高",
      "desc": "答：查找数组和链表的区别，自己理解"
    },
    {
      "id": 9,
      "title": "9、Java内存泄漏的问题调查定位：jmap，jstack的使用等",
      "desc": "答："
    },
    {
      "id": 10,
      "title": "10、string、stringbuilder、stringbuffer的区别",
      "desc": "答：String不可变字符序列，string是值传入，不是引用传入。String类型中没有append（）方法，要追加字符串”+“即可。可以直接将字符串“test”复制给声明的Stirng类的变量，而StringBuffer类的不行。String为不可变对象,一旦被创建,就不能修改它的值；对于已经存在的String对象的修改都是重新创建一个新的对象,然后把新的值保存进去。String 是final类,即不能被继承.StringBuffer 线程安全的可变字符序列 。 StringBuffer类的对象调用toString（）方法将转换为String类型，是一个可变对象,当对他进行修改的时候不会像String那样重新建立对象，它只能通过构造函数来建立。StringBuilder非线程安全的可变字符序列   。 StringBuffer和StringBuilder这两者的方法没有很大区别。但在线程安全性方面，StringBuffer允许多线程进行字符操作。这是因为在源代码中StringBuffer的很多方法都被关键字 synchronized 修饰了，而StringBuilder没有。 StringBuilder的效率比StringBuffer稍高，如果不考虑线程安全，StringBuilder应该是首选。另外，JVM运行程序主要的时间耗费是在创建对象和回收对象上。"
    },
    {
      "id": 11,
      "title": "11、hashtable和hashmap的区别",
      "desc": "答：Hashtable底层实现是红黑树，是线程安全的，hashmap底层实现是hash表，即数组加链表的形式，非线程安全的。一般使用hashmap，他的效率一般比hashtable高。"
    },
    {
      "id": 12,
      "title": "12、异常的结构，运行时异常和非运行时异常，各举例子",
      "desc": "答：异常对象都是派生于Throwable类的一个实例，有两个子类，error和Exception。Error类层次结构描述了Java运行时系统的内部错误和资源耗尽错误。Exception是程序本身可以处理的异常。 RuntimeException 和 IOException等子类，可以分为检查异常和非检查异常。检查异常，即非运行时异常，编译器要求必须处置的异常， 除了Error，RuntimeException及其子类以外，其他的Exception类及其子类都属于可查异常。这种异常的特点是Java编译器会检查它，也就是说，当程序中可能出现这类异常，要么用try-catch语句捕获它，要么用throws子句声明抛出它，否则编译不会通过。非检查异常有：包括错误的类型转换、数组越界访问和试图访问空指针等等"
    },
    {
      "id": 13,
      "title": "13、String类的常用方法",
      "desc": "答：两个类方法format和ValueOf，成员方法：charAt，CompareTo、length和toLowerCase、equals、toString等"
    },
    {
      "id": 14,
      "title": "14、Java的引用类型有哪几种",
      "desc": "答：类、对象和数组"
    }
    , {
      "id": 15,
      "title": "15、抽象类和接口的区别",
      "desc": "答：抽象类：不可以被实例化、抽象类具有构造器（凡是类都有构造器）、抽象方法所在的类一定是抽象类，抽象类中可以 抽象方法。Java中只支持单继承，使用extends关键字。Abstract不能用来修饰属性、构造器。不能有private、final和static修饰 接口：主要用来定义规范，解除耦合关系。接口中只能有常量和抽象方法，方法只能声明（Java8，接口中能有方法体），接口只能用public修饰"
    }
  ]
})
