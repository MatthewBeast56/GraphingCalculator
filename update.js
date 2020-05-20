var candidateStringFunctions = [Module.UTF8ToString, Module.Pointer_stringify];
var makeJSString = candidateStringFunctions.find(function(e) { return (typeof e === "function") });

var softwareVersion = makeJSString(Module._IonSoftwareVersion());
var patchLevel = makeJSString(Module._IonPatchLevel());

console.log(softwareVersion, patchLevel);
