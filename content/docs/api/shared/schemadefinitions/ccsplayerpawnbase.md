---
title: CCSPlayerPawnBase
---

```csharp
public interface CCSPlayerPawnBase : CBasePlayerPawn, CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CBasePlayerPawn>, ISchemaClass<CCSPlayerPawnBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlindStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L24)

```csharp
GameTime_t BlindStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### BlindUntilTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L22)

```csharp
GameTime_t BlindUntilTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### CTouchExpansionComponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L18)

```csharp
CTouchExpansionComponent CTouchExpansionComponent { get; }
```

#### Property Value

- [CTouchExpansionComponent](/docs/api/shared/schemadefinitions/ctouchexpansioncomponent)

### FlashDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L38)

```csharp
ref float FlashDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FlashMaxAlpha

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L40)

```csharp
ref float FlashMaxAlpha { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasMovedSinceSpawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L30)

```csharp
ref bool HasMovedSinceSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IdleTimeSinceLastAction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L34)

```csharp
ref float IdleTimeSinceLastAction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextRadarUpdateTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L36)

```csharp
ref float NextRadarUpdateTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NumSpawns

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L32)

```csharp
ref int NumSpawns { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OriginalController

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L46)

```csharp
ref CHandle<CCSPlayerController> OriginalController { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)>

### PingServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L20)

```csharp
CCSPlayer_PingServices? PingServices { get; }
```

#### Property Value

- [CCSPlayer_PingServices](/docs/api/shared/schemadefinitions/ccsplayer_pingservices)?

### PlayerState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L26)

```csharp
ref CSPlayerState PlayerState { get; }
```

#### Property Value

- [CSPlayerState](/docs/api/shared/schemadefinitions/csplayerstate)

### ProgressBarDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L44)

```csharp
ref int ProgressBarDuration { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ProgressBarStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L42)

```csharp
ref float ProgressBarStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Respawning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L28)

```csharp
ref bool Respawning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CTouchExpansionComponentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L48)

```csharp
void CTouchExpansionComponentUpdated()
```

### FlashDurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L52)

```csharp
void FlashDurationUpdated()
```

### FlashMaxAlphaUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L53)

```csharp
void FlashMaxAlphaUpdated()
```

### HasMovedSinceSpawnUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L51)

```csharp
void HasMovedSinceSpawnUpdated()
```

### OriginalControllerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L56)

```csharp
void OriginalControllerUpdated()
```

### PingServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L49)

```csharp
void PingServicesUpdated()
```

### PlayerStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L50)

```csharp
void PlayerStateUpdated()
```

### ProgressBarDurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L55)

```csharp
void ProgressBarDurationUpdated()
```

### ProgressBarStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawnBase.cs#L54)

```csharp
void ProgressBarStartTimeUpdated()
```

