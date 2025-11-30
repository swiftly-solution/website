---
title: CHostage
---

# Interface CHostage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CHostage : CHostageExpresserShim, CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CHostageExpresserShim>, ISchemaClass<CHostage>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CHostageExpresserShim](/docs/api/schemadefinitions/chostageexpressershim)
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
- [ISchemaClass<CHostageExpresserShim>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CHostage>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Accel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L52)

```csharp
ref Vector Accel { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ApproachRewardPayouts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L88)

```csharp
ref int ApproachRewardPayouts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DropStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L86)

```csharp
GameTime_t DropStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### EntitySpottedState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L26)

```csharp
EntitySpottedState_t EntitySpottedState { get; }
```

#### Property Value

- [EntitySpottedState_t](/docs/api/schemadefinitions/entityspottedstate_t)

### GrabSuccessTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L84)

```csharp
GameTime_t GrabSuccessTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### GrabbedPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L80)

```csharp
ref Vector GrabbedPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### HandsHaveBeenCut

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L72)

```csharp
ref bool HandsHaveBeenCut { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBeenUsed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L50)

```csharp
ref bool HasBeenUsed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageGrabber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L74)

```csharp
ref CHandle<CCSPlayerPawn> HostageGrabber { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### HostageResetPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L94)

```csharp
ref Vector HostageResetPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### HostageSpawnRandomFactor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L32)

```csharp
ref uint HostageSpawnRandomFactor { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### HostageState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L42)

```csharp
ref int HostageState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InhibitDoorTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L64)

```csharp
CountdownTimer InhibitDoorTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### InhibitObstacleAvoidanceTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L66)

```csharp
CountdownTimer InhibitObstacleAvoidanceTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### IsAdjusted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L70)

```csharp
ref bool IsAdjusted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsCrouching

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L56)

```csharp
ref bool IsCrouching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRescued

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L38)

```csharp
ref bool IsRescued { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRunning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L54)

```csharp
ref bool IsRunning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWaitingForLeader

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L60)

```csharp
ref bool IsWaitingForLeader { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JumpTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L58)

```csharp
CountdownTimer JumpTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### JumpedThisFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L40)

```csharp
ref bool JumpedThisFrame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastGrabTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L76)

```csharp
GameTime_t LastGrabTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastLeader

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L46)

```csharp
ref CHandle<CCSPlayerPawnBase> LastLeader { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawnBase](/docs/api/schemadefinitions/ccsplayerpawnbase)>

### Leader

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L44)

```csharp
ref CHandle<CBaseEntity> Leader { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### OnDroppedNotRescued

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L22)

```csharp
CEntityIOOutput OnDroppedNotRescued { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnFirstPickedUp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L20)

```csharp
CEntityIOOutput OnFirstPickedUp { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnHostageBeginGrab

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L18)

```csharp
CEntityIOOutput OnHostageBeginGrab { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnRescued

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L24)

```csharp
CEntityIOOutput OnRescued { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### PickupEventCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L90)

```csharp
ref int PickupEventCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PositionWhenStartedDroppingToGround

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L78)

```csharp
ref Vector PositionWhenStartedDroppingToGround { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Remove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L34)

```csharp
ref bool Remove { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RepathTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L62)

```csharp
CountdownTimer RepathTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### RescueStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L82)

```csharp
GameTime_t RescueStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ReuseTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L48)

```csharp
CountdownTimer ReuseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### SpawnGroundPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L92)

```csharp
ref Vector SpawnGroundPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SpotRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L28)

```csharp
ref int SpotRules { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UiHostageSpawnExclusionGroupMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L30)

```csharp
ref uint UiHostageSpawnExclusionGroupMask { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Vel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L36)

```csharp
ref Vector Vel { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### WiggleTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L68)

```csharp
CountdownTimer WiggleTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

## Methods

### DropStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L107)

```csharp
void DropStartTimeUpdated()
```

### EntitySpottedStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L96)

```csharp
void EntitySpottedStateUpdated()
```

### GrabSuccessTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L106)

```csharp
void GrabSuccessTimeUpdated()
```

### HandsHaveBeenCutUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L103)

```csharp
void HandsHaveBeenCutUpdated()
```

### HostageGrabberUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L104)

```csharp
void HostageGrabberUpdated()
```

### HostageStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L100)

```csharp
void HostageStateUpdated()
```

### IsRescuedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L98)

```csharp
void IsRescuedUpdated()
```

### JumpedThisFrameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L99)

```csharp
void JumpedThisFrameUpdated()
```

### LeaderUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L101)

```csharp
void LeaderUpdated()
```

### RescueStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L105)

```csharp
void RescueStartTimeUpdated()
```

### ReuseTimerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L102)

```csharp
void ReuseTimerUpdated()
```

### VelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L97)

```csharp
void VelUpdated()
```

