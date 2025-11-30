---
title: IGameEventAccessor
---

# Interface IGameEventAccessor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L10)

**Namespace**: [SwiftlyS2.Shared.GameEvents](/docs/api/gameevents)

**Assembly**: SwiftlyS2.CS2.dll

A generic accessor to native IGameEvent.

```csharp
public interface IGameEventAccessor : INativeHandle
```

#### Implements

- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DontBroadcast

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L15)

When true, the event will not be broadcast to clients.

```csharp
bool DontBroadcast { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetBool(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L29)

Gets a boolean field from the event payload.

```csharp
bool GetBool(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Boolean value.

### GetEntity(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L101)

Gets an entity reference from the event payload.

```csharp
K GetEntity<K>(string key) where K : CEntityInstance
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- K - Entity instance.

#### Type Parameters

- **K**:  - Entity type derived from <xref href="SwiftlyS2.Shared.SchemaDefinitions.CEntityInstance" data-throw-if-not-resolved="false"></xref>.

### GetEntityIndex(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L115)

Gets an entity index field from the event payload.

```csharp
int GetEntityIndex(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Entity index.

### GetFloat(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L71)

Gets a floating-point field from the event payload.

```csharp
float GetFloat(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - Float value.

### GetInt32(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L43)

Gets an integer field from the event payload.

```csharp
int GetInt32(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Integer value.

### GetPawnEntityIndex(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L171)

Gets the pawn entity index referenced by the given field.

```csharp
int GetPawnEntityIndex(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Pawn entity index.

### GetPlayer(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L150)

Gets the player referenced by the given field.

```csharp
IPlayer GetPlayer(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [IPlayer](/docs/api/players/iplayer) - Player.

### GetPlayerController(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L136)

Gets the player controller referenced by the given field.

```csharp
CCSPlayerController GetPlayerController(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller) - Player controller.

### GetPlayerPawn(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L143)

Gets the player pawn referenced by the given field.

```csharp
CCSPlayerPawn GetPlayerPawn(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn) - Player pawn.

### GetPlayerSlot(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L129)

Gets a player slot field from the event payload.

```csharp
int GetPlayerSlot(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Player slot.

### GetPtr(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L164)

Gets a raw pointer value from the event payload.

```csharp
nint GetPtr(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - Pointer value.

### GetString(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L85)

Gets a string field from the event payload.

```csharp
string GetString(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - String value.

### GetUInt64(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L57)

Gets an unsigned 64-bit integer field from the event payload.

```csharp
ulong GetUInt64(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - Unsigned 64-bit value.

### IsLocal()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L183)

Indicates whether the event is local to this server/client.

```csharp
bool IsLocal()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if local.

### IsReliable()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L177)

Indicates whether the event is marked as reliable.

```csharp
bool IsReliable()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if reliable.

### SetBool(string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L22)

Sets a boolean field on the event payload.

```csharp
void SetBool(string key, bool value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Boolean value.

### SetEntity(string, K)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L93)

Sets an entity reference on the event payload.

```csharp
void SetEntity<K>(string key, K value) where K : CEntityInstance
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: K - Entity instance.

#### Type Parameters

- **K**:  - Entity type derived from <xref href="SwiftlyS2.Shared.SchemaDefinitions.CEntityInstance" data-throw-if-not-resolved="false"></xref>.

### SetEntityIndex(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L108)

Sets an entity index field on the event payload.

```csharp
void SetEntityIndex(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Entity index.

### SetFloat(string, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L64)

Sets a floating-point field on the event payload.

```csharp
void SetFloat(string key, float value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Float value.

### SetInt32(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L36)

Sets an integer field on the event payload.

```csharp
void SetInt32(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Integer value.

### SetPlayerSlot(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L122)

Sets a player slot field on the event payload.

```csharp
void SetPlayerSlot(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Player slot.

### SetPtr(string, nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L157)

Sets a raw pointer value on the event payload.

```csharp
void SetPtr(string key, nint value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - Pointer value.

### SetString(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L78)

Sets a string field on the event payload.

```csharp
void SetString(string key, string value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string) - String value.

### SetUInt64(string, ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L50)

Sets an unsigned 64-bit integer field on the event payload.

```csharp
void SetUInt64(string key, ulong value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - Unsigned 64-bit value.

