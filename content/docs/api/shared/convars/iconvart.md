---
title: IConVar<T>
---

```csharp
public interface IConVar<T>
```

#### Type Parameters

- **T**: 

## Properties

**Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L11)

```csharp
T Value { get; set; }
```

#### Property Value

- T

## Methods

**AddFlags(ConvarFlags)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L17)

```csharp
void AddFlags(ConvarFlags flags)
```

#### Parameters

- **flags**: [ConvarFlags](/docs/api/shared/convars/convarflags) - flags.

**ClearFlags()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L28)

```csharp
void ClearFlags()
```

**GetFlags()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L34)

```csharp
ConvarFlags GetFlags()
```

#### Returns

- [ConvarFlags](/docs/api/shared/convars/convarflags) - The flags of the convar.

**HasFlags(ConvarFlags)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L41)

```csharp
bool HasFlags(ConvarFlags flags)
```

#### Parameters

- **flags**: [ConvarFlags](/docs/api/shared/convars/convarflags) - flags.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the convar has all the given flags, false otherwise.

**QueryClient(int, Action<string>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L61)

```csharp
void QueryClient(int clientId, Action<string> callback)
```

#### Parameters

- **clientId**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **callback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

**RemoveFlags(ConvarFlags)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L23)

```csharp
void RemoveFlags(ConvarFlags flags)
```

#### Parameters

- **flags**: [ConvarFlags](/docs/api/shared/convars/convarflags) - flags.

**ReplicateToClient(int, T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L54)

```csharp
void ReplicateToClient(int clientId, T value)
```

#### Parameters

- **clientId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The client id to replicate to.
- **value**: T

**SetInternal(T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L48)

```csharp
void SetInternal(T value)
```

#### Parameters

- **value**: T - The value to set.

