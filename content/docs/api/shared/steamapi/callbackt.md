---
title: Callback
---

```csharp
public sealed class Callback<T> : IDisposable where T : struct
```

#### Type Parameters

- **T**: 

#### Inheritance

#### Implements

#### Inherited Members

## Methods

### Create(Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L207)

```csharp
public static Callback<T> Create(Action<T> callback)
```

#### Parameters

- **callback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T>

#### Returns

- [Callback](/docs/api/shared/steamapi/callback-1)<T>

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L241)

```csharp
public void Dispose()
```

### ~Callback()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/CallbackDispatcher.cs#L252)

```csharp
protected ~Callback()
```

