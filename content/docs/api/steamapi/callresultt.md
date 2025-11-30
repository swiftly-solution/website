---
title: CallResult
---

# Class CallResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L261)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

Represents a Steam call result that automatically manages its lifecycle

```csharp
public sealed class CallResult<T> : IDisposable where T : struct
```

#### Type Parameters

- **T**: 

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [CallResult<T>](/docs/api/steamapi/callresultt)

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Create(ulong, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L276)

Create and register a new call result

```csharp
public static CallResult<T> Create(ulong hAPICall, Action<T, bool> callback)
```

#### Parameters

- **hAPICall**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **callback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<T, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

#### Returns

- [CallResult](/docs/api/steamapi/callresultt)<T>

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L323)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### ~CallResult()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L339)

```csharp
protected ~CallResult()
```

### Set(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L286)

Set or change the API call to wait for

```csharp
public void Set(ulong hAPICall)
```

#### Parameters

- **hAPICall**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

