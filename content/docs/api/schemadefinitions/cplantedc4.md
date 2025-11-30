---
title: CPlantedC4
---

# Interface CPlantedC4

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlantedC4 : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CPlantedC4>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlantedC4>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AbortDetonationBecauseWorldIsFrozen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L26)

```csharp
ref bool AbortDetonationBecauseWorldIsFrozen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AttributeManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L28)

```csharp
CAttributeContainer AttributeManager { get; }
```

#### Property Value

- [CAttributeContainer](/docs/api/schemadefinitions/cattributecontainer)

### BeingDefused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L48)

```csharp
ref bool BeingDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombDefused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L56)

```csharp
ref bool BombDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombDefuser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L58)

```csharp
ref CHandle<CCSPlayerPawn> BombDefuser { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### BombSite

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L22)

```csharp
ref int BombSite { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BombTicking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L18)

```csharp
ref bool BombTicking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### C4Blow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L20)

```csharp
GameTime_t C4Blow { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### CannotBeDefused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L36)

```csharp
ref bool CannotBeDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CatchUpToPlayerEye

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L68)

```csharp
ref QAngle CatchUpToPlayerEye { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### DefuseCountDown

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L54)

```csharp
GameTime_t DefuseCountDown { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### DefuseLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L52)

```csharp
ref float DefuseLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EntitySpottedState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L38)

```csharp
EntitySpottedState_t EntitySpottedState { get; }
```

#### Property Value

- [EntitySpottedState_t](/docs/api/schemadefinitions/entityspottedstate_t)

### HasExploded

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L44)

```csharp
ref bool HasExploded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastDefuseTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L50)

```csharp
GameTime_t LastDefuseTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastSpinDetectionTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L70)

```csharp
GameTime_t LastSpinDetectionTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NextBotBeepTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L66)

```csharp
GameTime_t NextBotBeepTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### OnBombBeginDefuse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L32)

```csharp
CEntityIOOutput OnBombBeginDefuse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnBombDefuseAborted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L34)

```csharp
CEntityIOOutput OnBombDefuseAborted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnBombDefused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L30)

```csharp
CEntityIOOutput OnBombDefused { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### ProgressBarTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L60)

```csharp
ref int ProgressBarTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SourceSoundscapeHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L24)

```csharp
ref int SourceSoundscapeHash { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpotRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L40)

```csharp
ref int SpotRules { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimerLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L46)

```csharp
ref float TimerLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TrainingPlacedByPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L42)

```csharp
ref bool TrainingPlacedByPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoiceAlertFired

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L62)

```csharp
ref bool VoiceAlertFired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoiceAlertPlayed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L64)

```csharp
ISchemaFixedArray<bool> VoiceAlertPlayed { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

## Methods

### AttributeManagerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L76)

```csharp
void AttributeManagerUpdated()
```

### BeingDefusedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L81)

```csharp
void BeingDefusedUpdated()
```

### BombDefusedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L84)

```csharp
void BombDefusedUpdated()
```

### BombDefuserUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L85)

```csharp
void BombDefuserUpdated()
```

### BombSiteUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L74)

```csharp
void BombSiteUpdated()
```

### BombTickingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L72)

```csharp
void BombTickingUpdated()
```

### C4BlowUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L73)

```csharp
void C4BlowUpdated()
```

### CannotBeDefusedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L77)

```csharp
void CannotBeDefusedUpdated()
```

### DefuseCountDownUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L83)

```csharp
void DefuseCountDownUpdated()
```

### DefuseLengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L82)

```csharp
void DefuseLengthUpdated()
```

### EntitySpottedStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L78)

```csharp
void EntitySpottedStateUpdated()
```

### HasExplodedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L79)

```csharp
void HasExplodedUpdated()
```

### SourceSoundscapeHashUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L75)

```csharp
void SourceSoundscapeHashUpdated()
```

### TimerLengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L80)

```csharp
void TimerLengthUpdated()
```

