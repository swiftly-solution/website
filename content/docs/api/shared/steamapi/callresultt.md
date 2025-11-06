---
title: CallResult
---

```csharp
public sealed class CallResult<T> : IDisposable where T : struct
```

#### Type Parameters

- **T**: 

#### Inheritance

#### Implements

#### Inherited Members

## Methods

### Create(ulong, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L276)

```csharp
public static CallResult<T> Create(ulong hAPICall, Action<T, bool> callback)
```

#### Parameters

- **hAPICall**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **callback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<T, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

#### Returns

- [CallResult](/docs/api/shared/steamapi/callresult-1)<T>

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L323)

```csharp
public void Dispose()
```

### ~CallResult()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L339)

```csharp
protected ~CallResult()
```

### Set(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L286)

```csharp
public void Set(ulong hAPICall)
```

#### Parameters

- **hAPICall**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

