---
title: CHostage
---

```csharp
public interface CHostage : CHostageExpresserShim, CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CHostageExpresserShim>, ISchemaClass<CHostage>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Accel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L51)

```csharp
ref Vector Accel { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ApproachRewardPayouts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L87)

```csharp
ref int ApproachRewardPayouts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DropStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L85)

```csharp
GameTime_t DropStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### EntitySpottedState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L25)

```csharp
EntitySpottedState_t EntitySpottedState { get; }
```

#### Property Value

- [EntitySpottedState_t](/docs/api/shared/schemadefinitions/entityspottedstate_t)

### GrabSuccessTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L83)

```csharp
GameTime_t GrabSuccessTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### GrabbedPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L79)

```csharp
ref Vector GrabbedPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### HandsHaveBeenCut

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L71)

```csharp
ref bool HandsHaveBeenCut { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBeenUsed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L49)

```csharp
ref bool HasBeenUsed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageGrabber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L73)

```csharp
ref CHandle<CCSPlayerPawn> HostageGrabber { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### HostageResetPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L93)

```csharp
ref Vector HostageResetPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### HostageSpawnRandomFactor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L31)

```csharp
ref uint HostageSpawnRandomFactor { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### HostageState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L41)

```csharp
ref int HostageState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InhibitDoorTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L63)

```csharp
CountdownTimer InhibitDoorTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### InhibitObstacleAvoidanceTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L65)

```csharp
CountdownTimer InhibitObstacleAvoidanceTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### IsAdjusted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L69)

```csharp
ref bool IsAdjusted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsCrouching

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L55)

```csharp
ref bool IsCrouching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRescued

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L37)

```csharp
ref bool IsRescued { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRunning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L53)

```csharp
ref bool IsRunning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWaitingForLeader

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L59)

```csharp
ref bool IsWaitingForLeader { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JumpTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L57)

```csharp
CountdownTimer JumpTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### JumpedThisFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L39)

```csharp
ref bool JumpedThisFrame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastGrabTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L75)

```csharp
GameTime_t LastGrabTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastLeader

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L45)

```csharp
ref CHandle<CCSPlayerPawnBase> LastLeader { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawnBase](/docs/api/shared/schemadefinitions/ccsplayerpawnbase)>

### Leader

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L43)

```csharp
ref CHandle<CBaseEntity> Leader { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### OnDroppedNotRescued

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L21)

```csharp
CEntityIOOutput OnDroppedNotRescued { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnFirstPickedUp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L19)

```csharp
CEntityIOOutput OnFirstPickedUp { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnHostageBeginGrab

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L17)

```csharp
CEntityIOOutput OnHostageBeginGrab { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnRescued

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L23)

```csharp
CEntityIOOutput OnRescued { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PickupEventCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L89)

```csharp
ref int PickupEventCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PositionWhenStartedDroppingToGround

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L77)

```csharp
ref Vector PositionWhenStartedDroppingToGround { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Remove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L33)

```csharp
ref bool Remove { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RepathTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L61)

```csharp
CountdownTimer RepathTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### RescueStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L81)

```csharp
GameTime_t RescueStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### ReuseTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L47)

```csharp
CountdownTimer ReuseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### SpawnGroundPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L91)

```csharp
ref Vector SpawnGroundPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SpotRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L27)

```csharp
ref int SpotRules { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UiHostageSpawnExclusionGroupMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L29)

```csharp
ref uint UiHostageSpawnExclusionGroupMask { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Vel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L35)

```csharp
ref Vector Vel { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### WiggleTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L67)

```csharp
CountdownTimer WiggleTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

## Methods

### DropStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L106)

```csharp
void DropStartTimeUpdated()
```

### EntitySpottedStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L95)

```csharp
void EntitySpottedStateUpdated()
```

### GrabSuccessTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L105)

```csharp
void GrabSuccessTimeUpdated()
```

### HandsHaveBeenCutUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L102)

```csharp
void HandsHaveBeenCutUpdated()
```

### HostageGrabberUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L103)

```csharp
void HostageGrabberUpdated()
```

### HostageStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L99)

```csharp
void HostageStateUpdated()
```

### IsRescuedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L97)

```csharp
void IsRescuedUpdated()
```

### JumpedThisFrameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L98)

```csharp
void JumpedThisFrameUpdated()
```

### LeaderUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L100)

```csharp
void LeaderUpdated()
```

### RescueStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L104)

```csharp
void RescueStartTimeUpdated()
```

### ReuseTimerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L101)

```csharp
void ReuseTimerUpdated()
```

### VelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHostage.cs#L96)

```csharp
void VelUpdated()
```

