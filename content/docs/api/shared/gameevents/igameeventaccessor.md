---
title: IGameEventAccessor
---

```csharp
public interface IGameEventAccessor : INativeHandle
```

#### Implements

## Properties

**DontBroadcast** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L14)

```csharp
bool DontBroadcast { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**GetBool(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L28)

```csharp
bool GetBool(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Boolean value.

**GetEntity<K>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L100)

```csharp
K GetEntity<K>(string key) where K : CEntityInstance
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- K - Entity instance.

#### Type Parameters

- **K**:  - Entity type derived from <xref href="SwiftlyS2.Shared.SchemaDefinitions.CEntityInstance" data-throw-if-not-resolved="false"></xref>.

**GetEntityIndex(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L114)

```csharp
int GetEntityIndex(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Entity index.

**GetFloat(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L70)

```csharp
float GetFloat(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - Float value.

**GetInt32(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L42)

```csharp
int GetInt32(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Integer value.

**GetPawnEntityIndex(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L163)

```csharp
int GetPawnEntityIndex(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Pawn entity index.

**GetPlayerController(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L135)

```csharp
CCSPlayerController GetPlayerController(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller) - Player controller.

**GetPlayerPawn(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L142)

```csharp
CCSPlayerPawn GetPlayerPawn(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn) - Player pawn.

**GetPlayerSlot(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L128)

```csharp
int GetPlayerSlot(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Player slot.

**GetPtr(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L156)

```csharp
nint GetPtr(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - Pointer value.

**GetString(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L84)

```csharp
string GetString(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - String value.

**GetUInt64(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L56)

```csharp
ulong GetUInt64(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - Unsigned 64-bit value.

**IsLocal()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L175)

```csharp
bool IsLocal()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if local.

**IsReliable()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L169)

```csharp
bool IsReliable()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if reliable.

**SetBool(string, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L21)

```csharp
void SetBool(string key, bool value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Boolean value.

**SetEntity<K>(string, K)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L92)

```csharp
void SetEntity<K>(string key, K value) where K : CEntityInstance
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: K - Entity instance.

#### Type Parameters

- **K**:  - Entity type derived from <xref href="SwiftlyS2.Shared.SchemaDefinitions.CEntityInstance" data-throw-if-not-resolved="false"></xref>.

**SetEntityIndex(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L107)

```csharp
void SetEntityIndex(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Entity index.

**SetFloat(string, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L63)

```csharp
void SetFloat(string key, float value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Float value.

**SetInt32(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L35)

```csharp
void SetInt32(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Integer value.

**SetPlayerSlot(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L121)

```csharp
void SetPlayerSlot(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Player slot.

**SetPtr(string, nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L149)

```csharp
void SetPtr(string key, nint value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - Pointer value.

**SetString(string, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L77)

```csharp
void SetString(string key, string value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string) - String value.

**SetUInt64(string, ulong)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventAccessor.cs#L49)

```csharp
void SetUInt64(string key, ulong value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Field name.
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - Unsigned 64-bit value.

