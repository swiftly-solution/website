---
title: CCSPlayerPawnBase
---

# Interface CCSPlayerPawnBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerPawnBase : CBasePlayerPawn, CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CBasePlayerPawn>, ISchemaClass<CCSPlayerPawnBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)
- [CBaseCombatCharacter](/docs/api/schemadefinitions/cbasecombatcharacter)
- [CBaseFlex](/docs/api/schemadefinitions/cbaseflex)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseFlex>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseCombatCharacter>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerPawn>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayerPawnBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlindStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L24)

```csharp
GameTime_t BlindStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### BlindUntilTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L22)

```csharp
GameTime_t BlindUntilTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### CTouchExpansionComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L18)

```csharp
CTouchExpansionComponent CTouchExpansionComponent { get; }
```

#### Property Value

- [CTouchExpansionComponent](/docs/api/schemadefinitions/ctouchexpansioncomponent)

### FlashDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L38)

```csharp
ref float FlashDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FlashMaxAlpha

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L40)

```csharp
ref float FlashMaxAlpha { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasMovedSinceSpawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L30)

```csharp
ref bool HasMovedSinceSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IdleTimeSinceLastAction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L34)

```csharp
ref float IdleTimeSinceLastAction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextRadarUpdateTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L36)

```csharp
ref float NextRadarUpdateTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NumSpawns

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L32)

```csharp
ref int NumSpawns { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OriginalController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L46)

```csharp
ref CHandle<CCSPlayerController> OriginalController { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)>

### PingServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L20)

```csharp
CCSPlayer_PingServices? PingServices { get; }
```

#### Property Value

- [CCSPlayer_PingServices](/docs/api/schemadefinitions/ccsplayer_pingservices)?

### PlayerState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L26)

```csharp
ref CSPlayerState PlayerState { get; }
```

#### Property Value

- [CSPlayerState](/docs/api/schemadefinitions/csplayerstate)

### ProgressBarDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L44)

```csharp
ref int ProgressBarDuration { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ProgressBarStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L42)

```csharp
ref float ProgressBarStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Respawning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L28)

```csharp
ref bool Respawning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CTouchExpansionComponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L48)

```csharp
void CTouchExpansionComponentUpdated()
```

### FlashDurationUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L52)

```csharp
void FlashDurationUpdated()
```

### FlashMaxAlphaUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L53)

```csharp
void FlashMaxAlphaUpdated()
```

### HasMovedSinceSpawnUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L51)

```csharp
void HasMovedSinceSpawnUpdated()
```

### OriginalControllerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L56)

```csharp
void OriginalControllerUpdated()
```

### PingServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L49)

```csharp
void PingServicesUpdated()
```

### PlayerStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L50)

```csharp
void PlayerStateUpdated()
```

### ProgressBarDurationUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L55)

```csharp
void ProgressBarDurationUpdated()
```

### ProgressBarStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L54)

```csharp
void ProgressBarStartTimeUpdated()
```

