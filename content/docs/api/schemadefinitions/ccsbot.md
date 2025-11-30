---
title: CCSBot
---

# Interface CCSBot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSBot : CBot, ISchemaClass<CBot>, ISchemaClass<CCSBot>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBot](/docs/api/schemadefinitions/cbot)
- [ISchemaClass<CBot>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSBot>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AimError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L186)

```csharp
ref QAngle AimError { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AimFocus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L192)

```csharp
ref float AimFocus { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AimFocusInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L194)

```csharp
ref float AimFocusInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AimFocusNextUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L196)

```csharp
GameTime_t AimFocusNextUpdate { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### AimGoal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L188)

```csharp
ref QAngle AimGoal { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AlertTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L50)

```csharp
CountdownTimer AlertTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### AllowActive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L38)

```csharp
ref bool AllowActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AllowAutoFollowTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L46)

```csharp
ref float AllowAutoFollowTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ApproachPointCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L158)

```csharp
ref byte ApproachPointCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ApproachPointViewPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L160)

```csharp
ref Vector ApproachPointViewPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### AreaEnteredTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L82)

```csharp
GameTime_t AreaEnteredTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### AttackedTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L234)

```csharp
ref float AttackedTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Attacker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L232)

```csharp
ref CHandle<CCSPlayerPawn> Attacker { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### AttentionInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L230)

```csharp
IntervalTimer AttentionInterval { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

### AvgVel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L276)

```csharp
ISchemaFixedArray<float> AvgVel { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### AvgVelCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L280)

```csharp
ref int AvgVelCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AvgVelIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L278)

```csharp
ref int AvgVelIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Avoid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L68)

```csharp
ref CHandle<CBaseEntity> Avoid { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### AvoidFriendTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L86)

```csharp
CountdownTimer AvoidFriendTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### AvoidTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L70)

```csharp
ref float AvoidTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BendNoisePositionValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L132)

```csharp
ref bool BendNoisePositionValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BentNoisePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L130)

```csharp
ref Vector BentNoisePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BlindFire

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L34)

```csharp
ref bool BlindFire { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Bomber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L222)

```csharp
ref CHandle<CCSPlayerPawn> Bomber { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### BurnedByFlamesTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L236)

```csharp
IntervalTimer BurnedByFlamesTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

### CheckedHidingSpotCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L170)

```csharp
ref int CheckedHidingSpotCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ClosestVisibleFriend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L226)

```csharp
ref CHandle<CCSPlayerPawn> ClosestVisibleFriend { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### ClosestVisibleHumanFriend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L228)

```csharp
ref CHandle<CCSPlayerPawn> ClosestVisibleHumanFriend { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### CombatRange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L22)

```csharp
ref float CombatRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurrentEnemyAcquireTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L212)

```csharp
ref float CurrentEnemyAcquireTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DesiredTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L110)

```csharp
ref int DesiredTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DiedLastRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L28)

```csharp
ref bool DiedLastRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enemy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L200)

```csharp
ref CHandle<CCSPlayerPawn> Enemy { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### EnemyDeathTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L214)

```csharp
ref float EnemyDeathTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnemyQueueAttendIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L262)

```csharp
ref byte EnemyQueueAttendIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnemyQueueCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L260)

```csharp
ref byte EnemyQueueCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnemyQueueIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L258)

```csharp
ref byte EnemyQueueIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EquipTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L244)

```csharp
IntervalTimer EquipTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

### EyeAnglesUnderPathFinderControl

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L78)

```csharp
ref bool EyeAnglesUnderPathFinderControl { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EyePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L18)

```csharp
ref Vector EyePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### FireWeaponTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L248)

```csharp
GameTime_t FireWeaponTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### FirstSawEnemyTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L210)

```csharp
ref float FirstSawEnemyTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FollowTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L44)

```csharp
ref float FollowTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForwardAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L138)

```csharp
ref float ForwardAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FriendDeathTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L216)

```csharp
ref float FriendDeathTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GoalEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L66)

```csharp
ref CHandle<CBaseEntity> GoalEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### GoalPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L64)

```csharp
ref Vector GoalPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### HasJoined

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L112)

```csharp
ref bool HasJoined { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasVisitedEnemySpawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L74)

```csharp
ref bool HasVisitedEnemySpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageEscortCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L106)

```csharp
ref byte HostageEscortCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### HostageEscortCountTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L108)

```csharp
ref float HostageEscortCountTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HurryTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L48)

```csharp
CountdownTimer HurryTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### IgnoreEnemiesTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L198)

```csharp
CountdownTimer IgnoreEnemiesTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### InhibitLookAroundTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L140)

```csharp
ref float InhibitLookAroundTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InhibitWaitingForHostageTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L116)

```csharp
CountdownTimer InhibitWaitingForHostageTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### IsAimingAtEnemy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L240)

```csharp
ref bool IsAimingAtEnemy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAttacking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L58)

```csharp
ref bool IsAttacking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAvoidingGrenade

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L166)

```csharp
CountdownTimer IsAvoidingGrenade { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### IsEnemySniperVisible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L254)

```csharp
ref bool IsEnemySniperVisible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEnemyVisible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L202)

```csharp
ref bool IsEnemyVisible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFollowing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L40)

```csharp
ref bool IsFollowing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFriendInTheWay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L88)

```csharp
ref bool IsFriendInTheWay { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLastEnemyDead

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L218)

```csharp
ref bool IsLastEnemyDead { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsOpeningDoor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L60)

```csharp
ref bool IsOpeningDoor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRapidFiring

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L242)

```csharp
ref bool IsRapidFiring { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRogue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L24)

```csharp
ref bool IsRogue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSleeping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L252)

```csharp
ref bool IsSleeping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsStopping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L72)

```csharp
ref bool IsStopping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsStuck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L264)

```csharp
ref bool IsStuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWaitingBehindFriend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L92)

```csharp
ref bool IsWaitingBehindFriend { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWaitingForHostage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L114)

```csharp
ref bool IsWaitingForHostage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastEnemyPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L206)

```csharp
ref Vector LastEnemyPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LastOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L282)

```csharp
ref Vector LastOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LastRadioRecievedTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L284)

```csharp
ref float LastRadioRecievedTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastRadioSentTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L286)

```csharp
ref float LastRadioSentTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastSawEnemyTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L208)

```csharp
ref float LastSawEnemyTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastValidReactionQueueFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L294)

```csharp
ref int LastValidReactionQueueFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastVictimID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L238)

```csharp
ref int LastVictimID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Leader

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L42)

```csharp
ref CHandle<CCSPlayerPawn> Leader { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### LookAheadAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L136)

```csharp
ref float LookAheadAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAroundStateTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L134)

```csharp
ref float LookAroundStateTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAtDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L154)

```csharp
string LookAtDesc { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LookAtSpot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L142)

```csharp
ref Vector LookAtSpot { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LookAtSpotAngleTolerance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L148)

```csharp
ref float LookAtSpotAngleTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAtSpotAttack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L152)

```csharp
ref bool LookAtSpotAttack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LookAtSpotClearIfClose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L150)

```csharp
ref bool LookAtSpotClearIfClose { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LookAtSpotDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L144)

```csharp
ref float LookAtSpotDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookAtSpotTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L146)

```csharp
ref float LookAtSpotTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookForWeaponsOnGroundTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L250)

```csharp
CountdownTimer LookForWeaponsOnGroundTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### LookPitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L172)

```csharp
ref float LookPitch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookPitchVel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L174)

```csharp
ref float LookPitchVel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookYaw

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L176)

```csharp
ref float LookYaw { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookYawVel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L178)

```csharp
ref float LookYawVel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MustRunTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L96)

```csharp
CountdownTimer MustRunTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NearbyEnemyCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L220)

```csharp
ref int NearbyEnemyCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NearbyFriendCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L224)

```csharp
ref int NearbyFriendCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextCleanupCheckTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L274)

```csharp
GameTime_t NextCleanupCheckTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NoiseBendTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L128)

```csharp
CountdownTimer NoiseBendTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### NoisePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L120)

```csharp
ref Vector NoisePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### NoiseSource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L126)

```csharp
CCSPlayerPawn? NoiseSource { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)?

### NoiseTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L124)

```csharp
ref float NoiseTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoiseTravelDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L122)

```csharp
ref float NoiseTravelDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PanicTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L54)

```csharp
CountdownTimer PanicTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### PathIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L80)

```csharp
ref int PathIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PathLadderEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L94)

```csharp
ref float PathLadderEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PeripheralTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L156)

```csharp
ref float PeripheralTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerTravelDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L102)

```csharp
ISchemaFixedArray<float> PlayerTravelDistance { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### PoliteTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L90)

```csharp
CountdownTimer PoliteTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### RadioPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L290)

```csharp
ref Vector RadioPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RadioSubject

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L288)

```csharp
ref CHandle<CCSPlayerPawn> RadioSubject { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### RepathTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L84)

```csharp
CountdownTimer RepathTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### RogueTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L26)

```csharp
CountdownTimer RogueTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### SafeTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L30)

```csharp
ref float SafeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SawEnemySniperTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L256)

```csharp
CountdownTimer SawEnemySniperTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### SneakTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L52)

```csharp
CountdownTimer SneakTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### SpotCheckTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L168)

```csharp
ref float SpotCheckTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StateTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L56)

```csharp
ref float StateTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StillTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L76)

```csharp
IntervalTimer StillTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

### StuckJumpTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L272)

```csharp
CountdownTimer StuckJumpTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### StuckSpot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L268)

```csharp
ref Vector StuckSpot { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StuckTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L266)

```csharp
GameTime_t StuckTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### SurpriseTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L36)

```csharp
CountdownTimer SurpriseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### TargetSpot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L180)

```csharp
ref Vector TargetSpot { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TargetSpotPredicted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L184)

```csharp
ref Vector TargetSpotPredicted { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TargetSpotTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L190)

```csharp
GameTime_t TargetSpotTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TargetSpotVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L182)

```csharp
ref Vector TargetSpotVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TaskEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L62)

```csharp
ref CHandle<CBaseEntity> TaskEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### TossGrenadeTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L164)

```csharp
CountdownTimer TossGrenadeTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### TravelDistancePhase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L104)

```csharp
ref byte TravelDistancePhase { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### UpdateTravelDistanceTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L100)

```csharp
CountdownTimer UpdateTravelDistanceTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### ViewSteadyTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L162)

```csharp
IntervalTimer ViewSteadyTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

### VisibleEnemyParts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L204)

```csharp
ref byte VisibleEnemyParts { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### VoiceEndTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L292)

```csharp
ref float VoiceEndTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WaitForHostageTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L118)

```csharp
CountdownTimer WaitForHostageTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### WaitTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L98)

```csharp
CountdownTimer WaitTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### WasSafe

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L32)

```csharp
ref bool WasSafe { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WiggleTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L270)

```csharp
CountdownTimer WiggleTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### ZoomTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSBot.cs#L246)

```csharp
CountdownTimer ZoomTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

