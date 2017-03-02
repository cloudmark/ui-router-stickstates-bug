# Introduction 
This repository outlines the problem with ui-router-sticky-states.  In order to run this demo first install the dependencies using

> npm install 

and run the code using: 

> npm run start.deving

Open the browser @ http://localhost:5555/

As soon as you run the code the first error shows up, this is due to a refactor in `ui-router-core`: 

```
TypeError: state.parameters is not a function
    at new PathNode (http://localhost:5555/node_modules/ui-router-core/lib/path/node.js:26:38)
    at Function.PathNode.clone (http://localhost:5555/node_modules/ui-router-core/lib/path/node.js:55:16)
    at applyToParams (http://localhost:5555/node_modules/ui-router-core/lib/path/pathFactory.js:99:42)
    at Array.map (native)
    at Function.PathFactory.treeChanges (http://localhost:5555/node_modules/ui-router-core/lib/path/pathFactory.js:108:45)
    at StickyStatesPlugin._calculateStickyTreeChanges (http://localhost:5555/node_modules/ui-router-sticky-states/lib/stickyStates.js:98:60)
    at eval (http://localhost:5555/node_modules/ui-router-sticky-states/lib/stickyStates.js:41:47)
    at TransitionHook.invokeHook (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:1486:37)
    at eval (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:1538:53)
    at Array.forEach (native)
    at Function.TransitionHook.runAllHooks (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:1538:15)
    at new Transition (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2731:24)
    at TransitionService.create (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:6254:16)
    at StateService.transitionTo (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:6709:56)
    at BaseUrlRule.handler (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:4918:24)
  -------------   Elapsed: 42 ms; At: Wed Mar 01 2017 22:13:21 GMT+0100 (CET)   -------------  
    at getStacktraceWithUncaughtError (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:33:12) [angular]
    at new LongStackTrace (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:27:22) [angular]
    at Object.onScheduleTask (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:83:18) [angular]
    at ZoneDelegate.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:343:51) [angular]
    at Object.onScheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:237:29) [angular]
    at ZoneDelegate.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:343:51) [angular]
    at Zone.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:192:39) [angular]
    at Zone.scheduleMacroTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:206:25) [angular]
    at http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:1548:33 [angular]
    at setTimeout (eval at createNamedFn (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:1483:17), <anonymous>:3:37) [angular]
    at uiRouterFactory (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:8750:5) [angular]
    at AppModuleInjector.get (/AppModule/module.ngfactory.js:229:61) [angular]
    at AppModuleInjector.getInternal (/AppModule/module.ngfactory.js:359:48) [angular]
    at AppModuleInjector.NgModuleInjector.get (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:8490:48) [angular]
  -------------   Elapsed: 17 ms; At: Wed Mar 01 2017 22:13:21 GMT+0100 (CET)   -------------  
    at getStacktraceWithUncaughtError (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:33:12) [angular]
    at new LongStackTrace (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:27:22) [angular]
    at Object.onScheduleTask (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:83:18) [angular]
    at ZoneDelegate.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:343:51) [angular]
    at Object.onScheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:237:29) [angular]
    at ZoneDelegate.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:343:51) [angular]
    at Zone.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:192:39) [angular]
    at Zone.scheduleMicroTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:203:25) [angular]
    at scheduleResolveOrReject (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:677:14) [angular]
    at resolvePromise (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:638:21) [angular]
    at http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:679:17 [angular]
    at Object.onInvokeTask (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:3971:41) [angular]
    at ZoneDelegate.invokeTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:362:36) [angular]
  -------------   Elapsed: 4 ms; At: Wed Mar 01 2017 22:13:21 GMT+0100 (CET)   -------------  
    at getStacktraceWithUncaughtError (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:33:12) [angular]
    at new LongStackTrace (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:27:22) [angular]
    at Object.onScheduleTask (http://localhost:5555/node_modules/zone.js/dist/long-stack-trace-zone.js?1488402794479:83:18) [angular]
    at ZoneDelegate.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:343:51) [angular]
    at Object.onScheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:237:29) [angular]
    at ZoneDelegate.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:343:51) [angular]
    at Zone.scheduleTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:192:39) [angular]
    at Zone.scheduleMicroTask (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:203:25) [angular]
    at scheduleResolveOrReject (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:677:14) [angular]
    at ZoneAwarePromise.then (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:766:17) [angular]
    at new ApplicationInitStatus (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:3342:64) [angular]
    at AppModuleInjector.createInternal (/AppModule/module.ngfactory.js:308:36) [angular]
    at AppModuleInjector.NgModuleInjector.create (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:8474:80) [angular]
    at NgModuleFactory.create (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:8448:22) [angular]
```

In order to fix update the code in `/node_modules/ui-router-core/lib/path/node.js` from: 

```javascript
var PathNode = (function () {
    function PathNode(stateOrPath) {
        if (stateOrPath instanceof PathNode) {
            var node = stateOrPath;
            this.state = node.state;
            this.paramSchema = node.paramSchema.slice();
            this.paramValues = common_1.extend({}, node.paramValues);
            this.resolvables = node.resolvables.slice();
            this.views = node.views && node.views.slice();
        }
        else {
            var state = stateOrPath;
            this.state = state;
            this.paramSchema = state.parameters({ inherit: false });
            this.paramValues = {};
            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
        }
    }
```

to 

```javascript
var PathNode = (function () {
    function PathNode(stateOrPath) {
        if (stateOrPath instanceof PathNode) {
            var node = stateOrPath;
            this.state = node.state;
            this.paramSchema = node.paramSchema.slice();
            this.paramValues = common_1.extend({}, node.paramValues);
            this.resolvables = node.resolvables.slice();
            this.views = node.views && node.views.slice();
        }
        else {
            var state = stateOrPath.state;
            this.state = state;
            this.paramSchema = state.parameters({ inherit: false });
            this.paramValues = {};
            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
        }
    }
```

Refresh the console again should now give the DI Error for Transition: 

```
NoProviderError {__zone_symbol__error: Error: DI Error
    at NoProviderError.ZoneAwareError (http://localhost:5555/node_modules/zone.js/di…, _nativeError: ZoneAwareError, keys: Array[1], injectors: Array[1], __zone_symbol__message: "No provider for Transition!"…}
```

# Debugging 
Debugging further within the stack trace we can see `No provider for Transition!`.   

```
NoProviderError
__zone_symbol__error
:
Error: DI Error at NoProviderError.ZoneAwareError (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:958:33) at NoProviderError.BaseError [as constructor] (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:1239:20) at NoProviderError.AbstractProviderError [as constructor] (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:1365:20) at new NoProviderError (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:1405:20) at ReflectiveInjector_._throwOrNull (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2937:23) at ReflectiveInjector_._getByKeyDefault (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2976:29) at ReflectiveInjector_._getByKey (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2908:29) at ReflectiveInjector_.get (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2777:25) at AppModuleInjector.NgModuleInjector.get (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:8491:56) at UIInjectorImpl.getNative (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2674:43) at getDependency (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2639:49) at Array.map (native) at ResolveContext.getDependencies (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2645:32) at getResolvableDependencies (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2418:42) at ZoneDelegate.invoke (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:330:26)
__zone_symbol__message
:
"No provider for Transition!"
__zone_symbol__stack
:
"Error: DI Error↵    at NoProviderError.ZoneAwareError (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:958:33)↵    at NoProviderError.BaseError [as constructor] (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:1239:20)↵    at NoProviderError.AbstractProviderError [as constructor] (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:1365:20)↵    at new NoProviderError (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:1405:20)↵    at ReflectiveInjector_._throwOrNull (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2937:23)↵    at ReflectiveInjector_._getByKeyDefault (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2976:29)↵    at ReflectiveInjector_._getByKey (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2908:29)↵    at ReflectiveInjector_.get (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:2777:25)↵    at AppModuleInjector.NgModuleInjector.get (http://localhost:5555/node_modules/@angular/core/bundles/core.umd.js:8491:56)↵    at UIInjectorImpl.getNative (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2674:43)↵    at getDependency (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2639:49)↵    at Array.map (native)↵    at ResolveContext.getDependencies (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2645:32)↵    at getResolvableDependencies (http://localhost:5555/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js:2418:42)↵    at ZoneDelegate.invoke (http://localhost:5555/node_modules/zone.js/dist/zone.js?1488402794479:330:26)"
_nativeError
:
ZoneAwareError
constructResolvingMessage
:
(keys)
injectors
:
Array[1]
keys
:
Array[1]
message
:
(...)
name
:
(...)
originalStack
:
(...)

```

Looking at the resolution code we can see that the `subPath` in `ResolveContext` includes a node with name: `app.home` 
even though the current node also has state name `app.home`.  Although the properties of the path nodes are the same the original reference is not the same and hence `return r.token === token` returns false. 

```javascript
ResolveContext.prototype.getDependencies = function (resolvable) {
        var _this = this;
        var node = this.findNode(resolvable);
        // Find which other resolvables are "visible" to the `resolvable` argument
        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
        var subPath = PathFactory.subPath(this._path, function (x) { return x === node; }) || this._path;
        var availableResolvables = subPath
            .reduce(function (acc, node) { return acc.concat(node.resolvables); }, []) //all of subpath's resolvables
            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
        var getDependency = function (token) {
            var matching = availableResolvables.filter(function (r) { return r.token === token; });
            if (matching.length)
                return tail(matching);
            var fromInjector = _this.injector().getNative(token);
            if (!fromInjector) {
                throw new Error("Could not find Dependency Injection token: " + stringify(token));
            }
            return new Resolvable(token, function () { return fromInjector; }, [], fromInjector);
        };
        return resolvable.deps.map(getDependency);
    };
    return ResolveContext;
```

Due to this reason the `Transition` is not included in the list of `availableResolvables` and hence is not resolved.  

So where is the reference being changed? References are changes when trying to compute the active and inactive in the sticky states code by runing the simulate transition.  

Specifically the line: 

```javascript
 var simulatedTC = ui_router_core_1.PathFactory.treeChanges(inactiveFromPath, tc.to, trans.options().reloadState);
```
                      
creates shallow clones of the original PathNodes. 

The references are swapped in the lines that follow: 

```javascript
tc.reactivating = simulatedTC.retained.slice(tc.retained.length);
// Entering nodes are the same as the simulated transition's entering
tc.entering = simulatedTC.entering;
// The simulatedTC 'exiting' nodes are inactives that are being exited because:
// - The inactive state's params changed
// - The inactive state is being reloaded
// - The inactive state is a child of the to state
tc.exiting = tc.exiting.concat(simulatedTC.exiting);
// Rewrite the to path
tc.to = tc.retained.concat(tc.reactivating).concat(tc.entering);
```


