---
title: IGameEventAccessor
---

```csharp
public interface IGameEventAccessor : INativeHandle
```

#### Implements

## Properties

### DontBroadcast

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L15)

```csharp
bool DontBroadcast { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetBool(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L29)

```csharp
bool GetBool(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Boolean value.

### GetEntity(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L101)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L115)

```csharp
int GetEntityIndex(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Entity index.

### GetFloat(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L71)

```csharp
float GetFloat(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - Float value.

### GetInt32(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L43)

```csharp
int GetInt32(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Integer value.

### GetPawnEntityIndex(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L171)

```csharp
int GetPawnEntityIndex(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Pawn entity index.

### GetPlayer(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L150)

```csharp
IPlayer GetPlayer(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [IPlayer](/docs/api/shared/players/iplayer) - Player.

### GetPlayerController(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L136)

```csharp
CCSPlayerController GetPlayerController(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller) - Player controller.

### GetPlayerPawn(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L143)

```csharp
CCSPlayerPawn GetPlayerPawn(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn) - Player pawn.

### GetPlayerSlot(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L129)

```csharp
int GetPlayerSlot(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Player slot.

### GetPtr(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L164)

```csharp
nint GetPtr(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - Pointer value.

### GetString(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L85)

```csharp
string GetString(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - String value.

### GetUInt64(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L57)

```csharp
ulong GetUInt64(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - Unsigned 64-bit value.

### IsLocal()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L183)

```csharp
bool IsLocal()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if local.

### IsReliable()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L177)

```csharp
bool IsReliable()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if reliable.

### SetBool(string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L22)

```csharp
void SetBool(string key, bool value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Boolean value.

### SetEntity(string, K)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L93)

```csharp
void SetEntity<K>(string key, K value) where K : CEntityInstance
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: K - Entity instance.

#### Type Parameters

- **K**:  - Entity type derived from <xref href="SwiftlyS2.Shared.SchemaDefinitions.CEntityInstance" data-throw-if-not-resolved="false"></xref>.

### SetEntityIndex(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L108)

```csharp
void SetEntityIndex(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Entity index.

### SetFloat(string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L64)

```csharp
void SetFloat(string key, float value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Float value.

### SetInt32(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L36)

```csharp
void SetInt32(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Integer value.

### SetPlayerSlot(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L122)

```csharp
void SetPlayerSlot(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Player slot.

### SetPtr(string, nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L157)

```csharp
void SetPtr(string key, nint value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - Pointer value.

### SetString(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L78)

```csharp
void SetString(string key, string value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string) - String value.

### SetUInt64(string, ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L50)

```csharp
void SetUInt64(string key, ulong value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - Unsigned 64-bit value.

