JS-GuardVar
===========

Guard the function execution on a variable

Version
=======

0\.01

Synopsis
========

```javascript
    var guard = new Guard(true); // get a initially openned guard.

    setInterval(guard.guard(function(){ console.log("Hi") }), 1000);

    // pause the guard, all the later fired events will be queued
    guard.pause();

    // pause the guard, all the later fired events will be discarded
    guard.stop();

    // open the guard, all the queued event will fire now;
    // and the later fired events will all fire immediately.
    guard.open();
```

Install
=======

If you use [GreenDefine][] or [RequireJS][] you can load it as a module.

```javascript
define([..., 'GuardVar', ...], function(..., GuardVar, ...){
    var gv = new GuardVar(true);
    ...
});
```

If you use this library stand alone.

```html
<script type="text/javascript" src="GuardVar.js"></script>
<script type="text/javascript">
    var gv = new GuardVar(true);
    ...

    var TheGuardVar = GuardVar.noConflict();
    // The noConflict function will release window.GuardVar to its original value,
    // and return the GuardVar to you.
</script>
```

[RequireJS]: http://requirejs.org/
[GreenDefine]: https://github.com/CindyLinz/JS-GreenDefine

API Reference
=============

+ gv = new GuardVar(init\_open)

  Get a new **GuardVar**.

  If the **init\_open** is true,
  the **gv** is initially opened;
  the **gv** is initially stopped otherwise.

+ guarded\_function = gv.guard(function)

  Get a **guarded\_function**.

  When the **guarded\_function** is called,
  it will check the **gv**'s state to decide
  whether or when to call the **function**
  with same arguments it received.

+ gv.pause()

  Pause the **gv**.

  All the later calls on the **guarded\_function**s
  will be queued.

+ gv.stop()

  Stop the **gv**.

  All the later calls on the **guarded\_function**s or
  queued calls will be discarded.

+ gv.open()

  Open the **gv**.

  All the queued calls will fire now.
  And all the later calls on the **guarded\_function**s
  will fire immediate.

Lincense
========

Copyright 2012, Cindy Wang (CindyLinz)  
Licensed under the MIT or GPL Version 2 licenses or GPL Version 3 licenses.

Date: 2012.10.26
