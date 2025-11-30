---
title: IConVar
---

# Interface IConVar

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Convars](/docs/api/convars)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IConVar<T>
```

#### Type Parameters

- **T**: 

## Properties

### DefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L30)

The default value of the convar.

```csharp
T DefaultValue { get; set; }
```

#### Property Value

- T

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L50)

The flags of the convar.

```csharp
ConvarFlags Flags { get; set; }
```

#### Property Value

- [ConvarFlags](/docs/api/convars/convarflags)

### HasDefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L35)

Whether the convar has a default value.

```csharp
bool HasDefaultValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasMaxValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L45)

Whether the convar has a max value.

```csharp
bool HasMaxValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasMinValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L40)

Whether the convar has a min value.

```csharp
bool HasMinValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L18)

The max value of the convar.

<xref href="System.InvalidOperationException?text=Thrown+when+the+convar+is+not+a+min%2fmax+type+or+doesn%27t+have+a+max+value." data-throw-if-not-resolved="false"></xref>

```csharp
T MaxValue { get; set; }
```

#### Property Value

- T

### MinValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L25)

The min value of the convar.

<xref href="System.InvalidOperationException?text=Thrown+when+the+convar+is+not+a+min%2fmax+type+or+doesn%27t+have+a+min+value." data-throw-if-not-resolved="false"></xref>

```csharp
T MinValue { get; set; }
```

#### Property Value

- T

### Value

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L11)

The value of the convar.
When setting, if the convar can be replicated, it will automatically replicate to all clients.
Also, setting value with this method will internally put it into a set queue,
Which means that for some special case ( e.g. setting sv_enablebunnyhopping inside a hook ) it won't work,
in such cases you should use the SetInternal method instead.

```csharp
T Value { get; set; }
```

#### Property Value

- T

## Methods

### QueryClient(int, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L71)

Query the value of the convar from specified client.

```csharp
void QueryClient(int clientId, Action<string> callback)
```

#### Parameters

- **clientId**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **callback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The action to execute with the value.

### ReplicateToClient(int, T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L64)

Replicate the value of the convar to specified client.

```csharp
void ReplicateToClient(int clientId, T value)
```

#### Parameters

- **clientId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The client id to replicate to.
- **value**: T

### SetInternal(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L58)

Internally set the value of the convar.
Won't replicate the change to clients.

```csharp
void SetInternal(T value)
```

#### Parameters

- **value**: T - The value to set.

### TryGetDefaultValue(out T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L92)

Try to get the default value of the convar.

```csharp
bool TryGetDefaultValue(out T defaultValue)
```

#### Parameters

- **defaultValue**: T - The default value of the convar.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the default value is found, false otherwise.

### TryGetMaxValue(out T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L85)

Try to get the max value of the convar.

```csharp
bool TryGetMaxValue(out T maxValue)
```

#### Parameters

- **maxValue**: T - The max value of the convar.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the max value is found, false otherwise.

### TryGetMinValue(out T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVar.cs#L78)

Try to get the min value of the convar.

```csharp
bool TryGetMinValue(out T minValue)
```

#### Parameters

- **minValue**: T - The min value of the convar.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the min value is found, false otherwise.

