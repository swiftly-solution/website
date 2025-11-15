---
title: IConVar
---

```csharp
public interface IConVar<T>
```

#### Type Parameters

- **T**: 

## Properties

### DefaultValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L30)

```csharp
T DefaultValue { get; set; }
```

#### Property Value

- T

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L50)

```csharp
ConvarFlags Flags { get; set; }
```

#### Property Value

- [ConvarFlags](/docs/api/shared/convars/convarflags)

### HasDefaultValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L35)

```csharp
bool HasDefaultValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasMaxValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L45)

```csharp
bool HasMaxValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasMinValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L40)

```csharp
bool HasMinValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L18)

```csharp
T MaxValue { get; set; }
```

#### Property Value

- T

### MinValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L25)

```csharp
T MinValue { get; set; }
```

#### Property Value

- T

### Value

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L11)

```csharp
T Value { get; set; }
```

#### Property Value

- T

## Methods

### QueryClient(int, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L71)

```csharp
void QueryClient(int clientId, Action<string> callback)
```

#### Parameters

- **clientId**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **callback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The action to execute with the value.

### ReplicateToClient(int, T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L64)

```csharp
void ReplicateToClient(int clientId, T value)
```

#### Parameters

- **clientId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The client id to replicate to.
- **value**: T

### SetInternal(T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L58)

```csharp
void SetInternal(T value)
```

#### Parameters

- **value**: T - The value to set.

### TryGetDefaultValue(out T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L92)

```csharp
bool TryGetDefaultValue(out T defaultValue)
```

#### Parameters

- **defaultValue**: T - The default value of the convar.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the default value is found, false otherwise.

### TryGetMaxValue(out T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L85)

```csharp
bool TryGetMaxValue(out T maxValue)
```

#### Parameters

- **maxValue**: T - The max value of the convar.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the max value is found, false otherwise.

### TryGetMinValue(out T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L78)

```csharp
bool TryGetMinValue(out T minValue)
```

#### Parameters

- **minValue**: T - The min value of the convar.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the min value is found, false otherwise.

