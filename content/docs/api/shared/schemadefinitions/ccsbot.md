---
title: CCSBot
---

```csharp
public interface CCSBot : CBot, ISchemaClass<CBot>, ISchemaClass<CCSBot>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AimError

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L185)

```csharp
ref QAngle AimError { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### AimFocus

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L191)

```csharp
ref float AimFocus { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AimFocusInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L193)

```csharp
ref float AimFocusInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AimFocusNextUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L195)

```csharp
GameTime_t AimFocusNextUpdate { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### AimGoal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L187)

```csharp
ref QAngle AimGoal { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### AlertTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L49)

```csharp
CountdownTimer AlertTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### AllowActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L37)

```csharp
ref bool AllowActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AllowAutoFollowTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L45)

```csharp
ref float AllowAutoFollowTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ApproachPointCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L157)

```csharp
ref byte ApproachPointCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ApproachPointViewPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L159)

```csharp
ref Vector ApproachPointViewPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### AreaEnteredTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L81)

```csharp
GameTime_t AreaEnteredTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### AttackedTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L233)

```csharp
ref float AttackedTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Attacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L231)

```csharp
ref CHandle<CCSPlayerPawn> Attacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### AttentionInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L229)

```csharp
IntervalTimer AttentionInterval { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### AvgVel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L275)

```csharp
ISchemaFixedArray<float> AvgVel { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### AvgVelCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L279)

```csharp
ref int AvgVelCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AvgVelIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L277)

```csharp
ref int AvgVelIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Avoid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L67)

```csharp
ref CHandle<CBaseEntity> Avoid { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### AvoidFriendTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L85)

```csharp
CountdownTimer AvoidFriendTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### AvoidTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L69)

```csharp
ref float AvoidTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BendNoisePositionValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L131)

```csharp
ref bool BendNoisePositionValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BentNoisePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L129)

```csharp
ref Vector BentNoisePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### BlindFire

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L33)

```csharp
ref bool BlindFire { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Bomber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L221)

```csharp
ref CHandle<CCSPlayerPawn> Bomber { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### BurnedByFlamesTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L235)

```csharp
IntervalTimer BurnedByFlamesTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### CheckedHidingSpotCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L169)

```csharp
ref int CheckedHidingSpotCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ClosestVisibleFriend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L225)

```csharp
ref CHandle<CCSPlayerPawn> ClosestVisibleFriend { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### ClosestVisibleHumanFriend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L227)

```csharp
ref CHandle<CCSPlayerPawn> ClosestVisibleHumanFriend { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### CombatRange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L21)

```csharp
ref float CombatRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurrentEnemyAcquireTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L211)

```csharp
ref float CurrentEnemyAcquireTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DesiredTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L109)

```csharp
ref int DesiredTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DiedLastRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L27)

```csharp
ref bool DiedLastRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enemy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L199)

```csharp
ref CHandle<CCSPlayerPawn> Enemy { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### EnemyDeathTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L213)

```csharp
ref float EnemyDeathTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnemyQueueAttendIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L261)

```csharp
ref byte EnemyQueueAttendIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnemyQueueCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L259)

```csharp
ref byte EnemyQueueCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnemyQueueIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L257)

```csharp
ref byte EnemyQueueIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EquipTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L243)

```csharp
IntervalTimer EquipTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### EyeAnglesUnderPathFinderControl

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L77)

```csharp
ref bool EyeAnglesUnderPathFinderControl { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EyePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L17)

```csharp
ref Vector EyePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### FireWeaponTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L247)

```csharp
GameTime_t FireWeaponTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### FirstSawEnemyTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L209)

```csharp
ref float FirstSawEnemyTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FollowTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L43)

```csharp
ref float FollowTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForwardAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L137)

```csharp
ref float ForwardAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FriendDeathTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L215)

```csharp
ref float FriendDeathTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GoalEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L65)

```csharp
ref CHandle<CBaseEntity> GoalEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### GoalPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L63)

```csharp
ref Vector GoalPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### HasJoined

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L111)

```csharp
ref bool HasJoined { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasVisitedEnemySpawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L73)

```csharp
ref bool HasVisitedEnemySpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageEscortCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L105)

```csharp
ref byte HostageEscortCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### HostageEscortCountTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L107)

```csharp
ref float HostageEscortCountTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HurryTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L47)

```csharp
CountdownTimer HurryTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### IgnoreEnemiesTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L197)

```csharp
CountdownTimer IgnoreEnemiesTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### InhibitLookAroundTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L139)

```csharp
ref float InhibitLookAroundTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InhibitWaitingForHostageTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L115)

```csharp
CountdownTimer InhibitWaitingForHostageTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### IsAimingAtEnemy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L239)

```csharp
ref bool IsAimingAtEnemy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAttacking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L57)

```csharp
ref bool IsAttacking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAvoidingGrenade

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L165)

```csharp
CountdownTimer IsAvoidingGrenade { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### IsEnemySniperVisible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L253)

```csharp
ref bool IsEnemySniperVisible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEnemyVisible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L201)

```csharp
ref bool IsEnemyVisible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFollowing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L39)

```csharp
ref bool IsFollowing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFriendInTheWay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L87)

```csharp
ref bool IsFriendInTheWay { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLastEnemyDead

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L217)

```csharp
ref bool IsLastEnemyDead { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsOpeningDoor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L59)

```csharp
ref bool IsOpeningDoor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRapidFiring

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L241)

```csharp
ref bool IsRapidFiring { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRogue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L23)

```csharp
ref bool IsRogue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSleeping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L251)

```csharp
ref bool IsSleeping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsStopping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L71)

```csharp
ref bool IsStopping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsStuck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L263)

```csharp
ref bool IsStuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWaitingBehindFriend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L91)

```csharp
ref bool IsWaitingBehindFriend { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWaitingForHostage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L113)

```csharp
ref bool IsWaitingForHostage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastEnemyPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L205)

```csharp
ref Vector LastEnemyPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LastOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L281)

```csharp
ref Vector LastOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LastRadioRecievedTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L283)

```csharp
ref float LastRadioRecievedTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastRadioSentTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L285)

```csharp
ref float LastRadioSentTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastSawEnemyTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L207)

```csharp
ref float LastSawEnemyTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastValidReactionQueueFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L293)

```csharp
ref int LastValidReactionQueueFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastVictimID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L237)

```csharp
ref int LastVictimID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Leader

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L41)

```csharp
ref CHandle<CCSPlayerPawn> Leader { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### LookAheadAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L135)

```csharp
ref float LookAheadAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAroundStateTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L133)

```csharp
ref float LookAroundStateTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAtDesc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L153)

```csharp
string LookAtDesc { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LookAtSpot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L141)

```csharp
ref Vector LookAtSpot { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LookAtSpotAngleTolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L147)

```csharp
ref float LookAtSpotAngleTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAtSpotAttack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L151)

```csharp
ref bool LookAtSpotAttack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LookAtSpotClearIfClose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L149)

```csharp
ref bool LookAtSpotClearIfClose { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LookAtSpotDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L143)

```csharp
ref float LookAtSpotDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAtSpotTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L145)

```csharp
ref float LookAtSpotTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookForWeaponsOnGroundTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L249)

```csharp
CountdownTimer LookForWeaponsOnGroundTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### LookPitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L171)

```csharp
ref float LookPitch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookPitchVel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L173)

```csharp
ref float LookPitchVel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookYaw

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L175)

```csharp
ref float LookYaw { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookYawVel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L177)

```csharp
ref float LookYawVel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MustRunTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L95)

```csharp
CountdownTimer MustRunTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L19)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NearbyEnemyCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L219)

```csharp
ref int NearbyEnemyCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NearbyFriendCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L223)

```csharp
ref int NearbyFriendCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextCleanupCheckTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L273)

```csharp
GameTime_t NextCleanupCheckTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### NoiseBendTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L127)

```csharp
CountdownTimer NoiseBendTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### NoisePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L119)

```csharp
ref Vector NoisePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NoiseSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L125)

```csharp
CCSPlayerPawn? NoiseSource { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)?

### NoiseTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L123)

```csharp
ref float NoiseTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoiseTravelDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L121)

```csharp
ref float NoiseTravelDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PanicTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L53)

```csharp
CountdownTimer PanicTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### PathIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L79)

```csharp
ref int PathIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PathLadderEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L93)

```csharp
ref float PathLadderEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PeripheralTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L155)

```csharp
ref float PeripheralTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerTravelDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L101)

```csharp
ISchemaFixedArray<float> PlayerTravelDistance { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### PoliteTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L89)

```csharp
CountdownTimer PoliteTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### RadioPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L289)

```csharp
ref Vector RadioPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RadioSubject

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L287)

```csharp
ref CHandle<CCSPlayerPawn> RadioSubject { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### RepathTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L83)

```csharp
CountdownTimer RepathTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### RogueTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L25)

```csharp
CountdownTimer RogueTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### SafeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L29)

```csharp
ref float SafeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SawEnemySniperTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L255)

```csharp
CountdownTimer SawEnemySniperTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### SneakTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L51)

```csharp
CountdownTimer SneakTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### SpotCheckTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L167)

```csharp
ref float SpotCheckTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StateTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L55)

```csharp
ref float StateTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StillTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L75)

```csharp
IntervalTimer StillTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### StuckJumpTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L271)

```csharp
CountdownTimer StuckJumpTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### StuckSpot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L267)

```csharp
ref Vector StuckSpot { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### StuckTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L265)

```csharp
GameTime_t StuckTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### SurpriseTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L35)

```csharp
CountdownTimer SurpriseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### TargetSpot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L179)

```csharp
ref Vector TargetSpot { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TargetSpotPredicted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L183)

```csharp
ref Vector TargetSpotPredicted { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TargetSpotTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L189)

```csharp
GameTime_t TargetSpotTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TargetSpotVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L181)

```csharp
ref Vector TargetSpotVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TaskEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L61)

```csharp
ref CHandle<CBaseEntity> TaskEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### TossGrenadeTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L163)

```csharp
CountdownTimer TossGrenadeTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### TravelDistancePhase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L103)

```csharp
ref byte TravelDistancePhase { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### UpdateTravelDistanceTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L99)

```csharp
CountdownTimer UpdateTravelDistanceTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### ViewSteadyTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L161)

```csharp
IntervalTimer ViewSteadyTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### VisibleEnemyParts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L203)

```csharp
ref byte VisibleEnemyParts { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### VoiceEndTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L291)

```csharp
ref float VoiceEndTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WaitForHostageTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L117)

```csharp
CountdownTimer WaitForHostageTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### WaitTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L97)

```csharp
CountdownTimer WaitTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### WasSafe

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L31)

```csharp
ref bool WasSafe { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WiggleTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L269)

```csharp
CountdownTimer WiggleTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### ZoomTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L245)

```csharp
CountdownTimer ZoomTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

