---
title: AllocableNativeHandle
---

# Class AllocableNativeHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L7)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public abstract class AllocableNativeHandle : SafeHandleZeroOrMinusOneIsInvalid, IDisposable, INativeHandle
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [CriticalFinalizerObject](https://learn.microsoft.com/dotnet/api/system.runtime.constrainedexecution.criticalfinalizerobject)
- [SafeHandle](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle)
- [SafeHandleZeroOrMinusOneIsInvalid](https://learn.microsoft.com/dotnet/api/microsoft.win32.safehandles.safehandlezeroorminusoneisinvalid)
- [AllocableNativeHandle](/docs/api/natives/allocablenativehandle)

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)
- [INativeHandle](/docs/api/natives/inativehandle)

#### Inherited Members

- [SafeHandleZeroOrMinusOneIsInvalid.IsInvalid](https://learn.microsoft.com/dotnet/api/microsoft.win32.safehandles.safehandlezeroorminusoneisinvalid.isinvalid)
- [SafeHandle.handle](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.handle)
- [SafeHandle.Close()](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.close)
- [SafeHandle.DangerousAddRef(ref bool)](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dangerousaddref)
- [SafeHandle.DangerousGetHandle()](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dangerousgethandle)
- [SafeHandle.DangerousRelease()](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dangerousrelease)
- [SafeHandle.Dispose()](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dispose#system-runtime-interopservices-safehandle-dispose)
- [SafeHandle.Dispose(bool)](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dispose#system-runtime-interopservices-safehandle-dispose(system-boolean))
- [SafeHandle.ReleaseHandle()](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.releasehandle)
- [SafeHandle.SetHandle(nint)](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.sethandle)
- [SafeHandle.SetHandleAsInvalid()](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.sethandleasinvalid)
- [SafeHandle.IsClosed](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.isclosed)
- [SafeHandle.IsInvalid](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.isinvalid)
- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AllocableNativeHandle(nint, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L11)

```csharp
protected AllocableNativeHandle(nint handle, bool ownsHandle)
```

#### Parameters

- **handle**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **ownsHandle**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Address

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L15)

Dangerous method to get the memory address of the object

```csharp
public nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### IsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L9)

Return whether a handle is valid. 
Still might be dangerous for some pointer that borrowed from game instead of allocated by ourselves.

```csharp
public bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Free()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L17)

```csharp
protected abstract bool Free()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseHandle()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L19)

When overridden in a derived class, executes the code required to free the handle.

```csharp
protected override bool ReleaseHandle()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the handle is released successfully; otherwise, in the event of a catastrophic failure, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. In this case, it generates a releaseHandleFailed Managed Debugging Assistant.

