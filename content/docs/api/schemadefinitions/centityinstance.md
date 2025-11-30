---
title: CEntityInstance
---

# Interface CEntityInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEntityInstance : ISchemaClass<CEntityInstance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CScriptComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L22)

```csharp
CScriptComponent? CScriptComponent { get; }
```

#### Property Value

- [CScriptComponent](/docs/api/schemadefinitions/cscriptcomponent)?

### DesignerName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L18)

The designer name of the entity.

```csharp
string DesignerName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L20)

```csharp
CEntityIdentity? Entity { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/schemadefinitions/centityidentity)?

### Index

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L13)

The index of the entity.

```csharp
uint Index { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PrivateVScripts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L18)

```csharp
string PrivateVScripts { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AcceptInput(string, T?, CEntityInstance?, CEntityInstance?, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L29)

Fire an input to the entity.

```csharp
void AcceptInput<T>(string input, T? value, CEntityInstance? activator = null, CEntityInstance? caller = null, int outputID = 0)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Input name.
- **value**: T? - Input value.
- **activator**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance)? - Activator entity. Nullable.
- **caller**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance)? - Caller entity. Nullable.
- **outputID**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Output ID.

#### Type Parameters

- **T**:  - Param type. Support bool, int, uint, long, ulong, float, double, string, Vector, Vector2D, Vector4D, QAngle, Color

### AddEntityIOEvent(string, T?, CEntityInstance?, CEntityInstance?, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L40)

Add an entity IO event to the entity.

```csharp
void AddEntityIOEvent<T>(string input, T? value, CEntityInstance? activator = null, CEntityInstance? caller = null, float delay = 0)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Input name.
- **value**: T? - Input value.
- **activator**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance)? - Activator entity. Nullable.
- **caller**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance)? - Caller entity. Nullable.
- **delay**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Delay in seconds.

#### Type Parameters

- **T**:  - Param type. Support bool, int, uint, long, ulong, float, double, string, Vector, Vector2D, Vector4D, QAngle, Color

### Despawn()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L69)

```csharp
void Despawn()
```

### DispatchSpawn(CEntityKeyValues?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L46)

Dispatch a spawn event to the entity.

```csharp
void DispatchSpawn(CEntityKeyValues? entityKV = null)
```

#### Parameters

- **entityKV**: [CEntityKeyValues](/docs/api/entitysystem/centitykeyvalues)? - Entity key values. Nullable.

### EntityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L24)

```csharp
void EntityUpdated()
```

### IsTransmitting(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L65)

Check if the entity is transmitting for one player.

```csharp
bool IsTransmitting(int playerId)
```

#### Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player ID to check the transmit state for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetTransmitState(bool, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L53)

Set the transmit state of the entity for one player.

```csharp
void SetTransmitState(bool transmitting, int playerId)
```

#### Parameters

- **transmitting**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the entity should be transmitting.
- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player ID to set the transmit state for.

### SetTransmitState(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L59)

Set the global transmit state of the entity.

```csharp
void SetTransmitState(bool transmitting)
```

#### Parameters

- **transmitting**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the entity should be transmitting.

