---
title: CCSPlayerPawn
---

# Interface CCSPlayerPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerPawn : CCSPlayerPawnBase, CBasePlayerPawn, CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CBasePlayerPawn>, ISchemaClass<CCSPlayerPawnBase>, ISchemaClass<CCSPlayerPawn>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CCSPlayerPawnBase](/docs/api/schemadefinitions/ccsplayerpawnbase)
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
- [ISchemaClass<CCSPlayerPawn>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActionTrackingServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L24)

```csharp
CCSPlayer_ActionTrackingServices? ActionTrackingServices { get; }
```

#### Property Value

- [CCSPlayer_ActionTrackingServices](/docs/api/schemadefinitions/ccsplayer_actiontrackingservices)?

### AimPunchAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L68)

```csharp
ref QAngle AimPunchAngle { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AimPunchAngleVel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L70)

```csharp
ref QAngle AimPunchAngleVel { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AimPunchCache

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L76)

```csharp
ref CUtlVector<QAngle> AimPunchCache { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[QAngle](/docs/api/natives/qangle)>

### AimPunchTickBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L72)

```csharp
GameTick_t AimPunchTickBase { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### AimPunchTickFraction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L74)

```csharp
ref float AimPunchTickFraction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AllowAutoFollowTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L136)

```csharp
GameTime_t AllowAutoFollowTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ArmorValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L204)

```csharp
ref int ArmorValue { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BlockingUseActionInProgress

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L154)

```csharp
ref CSPlayerBlockingUseAction_t BlockingUseActionInProgress { get; }
```

#### Property Value

- [CSPlayerBlockingUseAction_t](/docs/api/schemadefinitions/csplayerblockinguseaction_t)

### BombSiteIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L160)

```csharp
ref uint BombSiteIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Bot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L188)

```csharp
CCSBot? Bot { get; }
```

#### Property Value

- [CCSBot](/docs/api/schemadefinitions/ccsbot)?

### BotAllowActive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L190)

```csharp
ref bool BotAllowActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BulletServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L18)

```csharp
CCSPlayer_BulletServices? BulletServices { get; }
```

#### Property Value

- [CCSPlayer_BulletServices](/docs/api/schemadefinitions/ccsplayer_bulletservices)?

### BuyServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L22)

```csharp
CCSPlayer_BuyServices? BuyServices { get; }
```

#### Property Value

- [CCSPlayer_BuyServices](/docs/api/schemadefinitions/ccsplayer_buyservices)?

### CameraServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerPawn.cs#L10)

```csharp
CCSPlayer_CameraServices? CameraServices { get; }
```

#### Property Value

- [CCSPlayer_CameraServices](/docs/api/schemadefinitions/ccsplayer_cameraservices)?

### CharacterDefIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L30)

```csharp
ref ushort CharacterDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### CommittingSuicideOnTeamChange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L248)

```csharp
ref bool CommittingSuicideOnTeamChange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CurrentEquipmentValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L206)

```csharp
ref ushort CurrentEquipmentValue { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### DamageReactServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L28)

```csharp
CCSPlayer_DamageReactServices? DamageReactServices { get; }
```

#### Property Value

- [CCSPlayer_DamageReactServices](/docs/api/schemadefinitions/ccsplayer_damagereactservices)?

### DealtDamageToEnemyMostRecentTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L130)

```csharp
ref float DealtDamageToEnemyMostRecentTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DeathEyeAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L108)

```csharp
ref QAngle DeathEyeAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### DeathFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L216)

```csharp
ref int DeathFlags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeathInfoOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L222)

```csharp
ref Vector DeathInfoOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DeathInfoTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L220)

```csharp
ref float DeathInfoTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DisplayHistoryBits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L132)

```csharp
ref uint DisplayHistoryBits { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EconGloves

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L104)

```csharp
CEconItemView EconGloves { get; }
```

#### Property Value

- [CEconItemView](/docs/api/schemadefinitions/ceconitemview)

### EconGlovesChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L106)

```csharp
ref byte EconGlovesChanged { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EmitSoundTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L156)

```csharp
GameTime_t EmitSoundTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### EntitySpottedState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L142)

```csharp
EntitySpottedState_t EntitySpottedState { get; }
```

#### Property Value

- [EntitySpottedState_t](/docs/api/schemadefinitions/entityspottedstate_t)

### EyeAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L258)

```csharp
ref QAngle EyeAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### FlinchStack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L170)

```csharp
ref float FlinchStack { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FreezetimeEndEquipmentValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L210)

```csharp
ref ushort FreezetimeEndEquipmentValue { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### GrenadeParameterStashTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L228)

```csharp
GameTime_t GrenadeParameterStashTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### GrenadeParametersStashed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L230)

```csharp
ref bool GrenadeParametersStashed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GunGameImmunity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L254)

```csharp
ref bool GunGameImmunity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GunGameImmunityColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L226)

```csharp
ref Color GunGameImmunityColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### HasDeathInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L218)

```csharp
ref bool HasDeathInfo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasFemaleVoice

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L32)

```csharp
ref bool HasFemaleVoice { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeadConstraintOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L198)

```csharp
ref Vector HeadConstraintOffset { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### HealthShotBoostExpirationTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L64)

```csharp
GameTime_t HealthShotBoostExpirationTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### HighestAppliedDamageTagTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L246)

```csharp
ref int HighestAppliedDamageTagTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HitBodyPart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L176)

```csharp
ref int HitBodyPart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HitHeading

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L174)

```csharp
ref float HitHeading { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HostageServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L20)

```csharp
CCSPlayer_HostageServices? HostageServices { get; }
```

#### Property Value

- [CCSPlayer_HostageServices](/docs/api/schemadefinitions/ccsplayer_hostageservices)?

### IgnoreLadderJumpTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L182)

```csharp
ref float IgnoreLadderJumpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ImmuneToGunGameDamageTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L252)

```csharp
GameTime_t ImmuneToGunGameDamageTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### InBombZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L48)

```csharp
ref bool InBombZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InBombZoneTrigger

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L164)

```csharp
ref bool InBombZoneTrigger { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InBuyZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L40)

```csharp
ref bool InBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InHostageRescueZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L46)

```csharp
ref bool InHostageRescueZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InHostageResetZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L38)

```csharp
ref bool InHostageResetZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InNoDefuseArea

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L158)

```csharp
ref bool InNoDefuseArea { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsBuyMenuOpen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L78)

```csharp
ref bool IsBuyMenuOpen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsDefusing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L150)

```csharp
ref bool IsDefusing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsGrabbingHostage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L152)

```csharp
ref bool IsGrabbingHostage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsScoped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L146)

```csharp
ref bool IsScoped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSpawning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L214)

```csharp
ref bool IsSpawning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWalking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L124)

```csharp
ref bool IsWalking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ItemServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerPawn.cs#L6)

```csharp
CCSPlayer_ItemServices? ItemServices { get; }
```

#### Property Value

- [CCSPlayer_ItemServices](/docs/api/schemadefinitions/ccsplayer_itemservices)?

### KilledByHeadshot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L184)

```csharp
ref bool KilledByHeadshot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LandingTimeSeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L66)

```csharp
ref float LandingTimeSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastAttackedTeammate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L134)

```csharp
ref float LastAttackedTeammate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastGivenBombTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L128)

```csharp
ref float LastGivenBombTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastGivenDefuserTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L126)

```csharp
ref float LastGivenDefuserTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastHitBox

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L186)

```csharp
ref int LastHitBox { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastKillerIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L140)

```csharp
ref uint LastKillerIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LastLandTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L80)

```csharp
GameTime_t LastLandTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastPickupPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L200)

```csharp
ref int LastPickupPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastPickupPriorityTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L202)

```csharp
ref float LastPickupPriorityTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastPlaceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L36)

```csharp
string LastPlaceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LastWeaponFireUsercmd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L212)

```csharp
ref int LastWeaponFireUsercmd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LeftHanded

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L112)

```csharp
ref bool LeftHanded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MolotovDamageTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L256)

```csharp
ref float MolotovDamageTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MovementServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerPawn.cs#L9)

```csharp
CCSPlayer_MovementServices? MovementServices { get; }
```

#### Property Value

- [CCSPlayer_MovementServices](/docs/api/schemadefinitions/ccsplayer_movementservices)?

### NextSprayDecalTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L88)

```csharp
GameTime_t NextSprayDecalTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NextSprayDecalTimeExpedited

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L90)

```csharp
ref bool NextSprayDecalTimeExpedited { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnGroundLastTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L82)

```csharp
ref bool OnGroundLastTick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayerLocked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L84)

```csharp
ref int PlayerLocked { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerPatchEconIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L224)

```csharp
ISchemaFixedArray<uint> PlayerPatchEconIndices { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### PredictedDamageTags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L244)

```csharp
ref CUtlVector<PredictedDamageTag_t> PredictedDamageTags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PredictedDamageTag_t](/docs/api/schemadefinitions/predicteddamagetag_t)>

### RadioServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L26)

```csharp
CCSPlayer_RadioServices? RadioServices { get; }
```

#### Property Value

- [CCSPlayer_RadioServices](/docs/api/schemadefinitions/ccsplayer_radioservices)?

### RagdollDamageBone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L92)

```csharp
ref int RagdollDamageBone { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RagdollDamageForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L94)

```csharp
ref Vector RagdollDamageForce { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RagdollDamageHeadshot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L100)

```csharp
ref bool RagdollDamageHeadshot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RagdollDamagePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L96)

```csharp
ref Vector RagdollDamagePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RagdollDamageWeaponName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L98)

```csharp
string RagdollDamageWeaponName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RagdollServerOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L102)

```csharp
ref Vector RagdollServerOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ResetArmorNextSpawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L138)

```csharp
ref bool ResetArmorNextSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResumeZoom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L148)

```csharp
ref bool ResumeZoom { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RetakesHasDefuseKit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L56)

```csharp
ref bool RetakesHasDefuseKit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RetakesMVPBoostExtraUtility

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L62)

```csharp
ref loadout_slot_t RetakesMVPBoostExtraUtility { get; }
```

#### Property Value

- [loadout_slot_t](/docs/api/schemadefinitions/loadout_slot_t)

### RetakesMVPBoostItem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L60)

```csharp
ref int RetakesMVPBoostItem { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RetakesMVPLastRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L58)

```csharp
ref bool RetakesMVPLastRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RetakesOffering

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L52)

```csharp
ref int RetakesOffering { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RetakesOfferingCard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L54)

```csharp
ref int RetakesOfferingCard { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundStartEquipmentValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L208)

```csharp
ref ushort RoundStartEquipmentValue { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ShootAngleHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L238)

```csharp
ISchemaFixedArray<QAngle> ShootAngleHistory { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[QAngle](/docs/api/natives/qangle)>

### ShotsFired

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L168)

```csharp
ref int ShotsFired { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SkipOneHeadConstraintUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L110)

```csharp
ref bool SkipOneHeadConstraintUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SlopeDropHeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L196)

```csharp
ref float SlopeDropHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlopeDropOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L194)

```csharp
ref float SlopeDropOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpotRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L144)

```csharp
ref int SpotRules { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StashedGrenadeThrowPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L234)

```csharp
ref Vector StashedGrenadeThrowPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StashedShootAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L232)

```csharp
ref QAngle StashedShootAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### StashedVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L236)

```csharp
ref Vector StashedVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StrVOPrefix

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L34)

```csharp
string StrVOPrefix { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SwitchedHandednessTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L114)

```csharp
GameTime_t SwitchedHandednessTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ThirdPersonHeading

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L192)

```csharp
ref QAngle ThirdPersonHeading { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### ThrowPositionHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L240)

```csharp
ISchemaFixedArray<Vector> ThrowPositionHistory { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[Vector](/docs/api/natives/vector)>

### TimeOfLastInjury

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L86)

```csharp
GameTime_t TimeOfLastInjury { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TotalBulletForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L178)

```csharp
ref Vector TotalBulletForce { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TouchingBuyZones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L42)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> TouchingBuyZones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>>

### UseServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerPawn.cs#L7)

```csharp
CCSPlayer_UseServices? UseServices { get; }
```

#### Property Value

- [CCSPlayer_UseServices](/docs/api/schemadefinitions/ccsplayer_useservices)?

### VelocityHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L242)

```csharp
ISchemaFixedArray<Vector> VelocityHistory { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[Vector](/docs/api/natives/vector)>

### VelocityModifier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L172)

```csharp
ref float VelocityModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ViewmodelFOV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L122)

```csharp
ref float ViewmodelFOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ViewmodelOffsetX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L116)

```csharp
ref float ViewmodelOffsetX { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ViewmodelOffsetY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L118)

```csharp
ref float ViewmodelOffsetY { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ViewmodelOffsetZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L120)

```csharp
ref float ViewmodelOffsetZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WaitForNoAttack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L180)

```csharp
ref bool WaitForNoAttack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasInBombZoneTrigger

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L166)

```csharp
ref bool WasInBombZoneTrigger { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasInBuyZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L44)

```csharp
ref bool WasInBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasInHostageRescueZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L50)

```csharp
ref bool WasInHostageRescueZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasNotKilledNaturally

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L250)

```csharp
ref bool WasNotKilledNaturally { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaterServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerPawn.cs#L8)

```csharp
CCSPlayer_WaterServices? WaterServices { get; }
```

#### Property Value

- [CCSPlayer_WaterServices](/docs/api/schemadefinitions/ccsplayer_waterservices)?

### WeaponServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerPawn.cs#L5)

```csharp
CCSPlayer_WeaponServices? WeaponServices { get; }
```

#### Property Value

- [CCSPlayer_WeaponServices](/docs/api/schemadefinitions/ccsplayer_weaponservices)?

### WhichBombZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L162)

```csharp
ref int WhichBombZone { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ActionTrackingServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L263)

```csharp
void ActionTrackingServicesUpdated()
```

### AimPunchAngleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L276)

```csharp
void AimPunchAngleUpdated()
```

### AimPunchAngleVelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L277)

```csharp
void AimPunchAngleVelUpdated()
```

### AimPunchTickBaseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L278)

```csharp
void AimPunchTickBaseUpdated()
```

### AimPunchTickFractionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L279)

```csharp
void AimPunchTickFractionUpdated()
```

### ArmorValueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L320)

```csharp
void ArmorValueUpdated()
```

### BlockingUseActionInProgressUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L305)

```csharp
void BlockingUseActionInProgressUpdated()
```

### BulletServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L260)

```csharp
void BulletServicesUpdated()
```

### BuyServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L262)

```csharp
void BuyServicesUpdated()
```

### CurrentEquipmentValueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L321)

```csharp
void CurrentEquipmentValueUpdated()
```

### DeathEyeAnglesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L291)

```csharp
void DeathEyeAnglesUpdated()
```

### EconGlovesChangedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L290)

```csharp
void EconGlovesChangedUpdated()
```

### EconGlovesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L289)

```csharp
void EconGlovesUpdated()
```

### EmitSoundTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L306)

```csharp
void EmitSoundTimeUpdated()
```

### EntitySpottedStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L300)

```csharp
void EntitySpottedStateUpdated()
```

### EyeAnglesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L330)

```csharp
void EyeAnglesUpdated()
```

### FlinchStackUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L310)

```csharp
void FlinchStackUpdated()
```

### FreezetimeEndEquipmentValueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L323)

```csharp
void FreezetimeEndEquipmentValueUpdated()
```

### GunGameImmunityColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L325)

```csharp
void GunGameImmunityColorUpdated()
```

### GunGameImmunityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L328)

```csharp
void GunGameImmunityUpdated()
```

### HasFemaleVoiceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L264)

```csharp
void HasFemaleVoiceUpdated()
```

### HeadConstraintOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L319)

```csharp
void HeadConstraintOffsetUpdated()
```

### HealthShotBoostExpirationTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L275)

```csharp
void HealthShotBoostExpirationTimeUpdated()
```

### HitBodyPartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L313)

```csharp
void HitBodyPartUpdated()
```

### HitHeadingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L312)

```csharp
void HitHeadingUpdated()
```

### HostageServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L261)

```csharp
void HostageServicesUpdated()
```

### ImmuneToGunGameDamageTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L327)

```csharp
void ImmuneToGunGameDamageTimeUpdated()
```

### InBombZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L268)

```csharp
void InBombZoneUpdated()
```

### InBuyZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L266)

```csharp
void InBuyZoneUpdated()
```

### InHostageRescueZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L267)

```csharp
void InHostageRescueZoneUpdated()
```

### InNoDefuseAreaUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L307)

```csharp
void InNoDefuseAreaUpdated()
```

### IsBuyMenuOpenUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L280)

```csharp
void IsBuyMenuOpenUpdated()
```

### IsDefusingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L303)

```csharp
void IsDefusingUpdated()
```

### IsGrabbingHostageUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L304)

```csharp
void IsGrabbingHostageUpdated()
```

### IsScopedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L301)

```csharp
void IsScopedUpdated()
```

### IsWalkingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L298)

```csharp
void IsWalkingUpdated()
```

### KilledByHeadshotUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L315)

```csharp
void KilledByHeadshotUpdated()
```

### LastKillerIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L299)

```csharp
void LastKillerIndexUpdated()
```

### LastPlaceNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L265)

```csharp
void LastPlaceNameUpdated()
```

### LeftHandedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L292)

```csharp
void LeftHandedUpdated()
```

### MolotovDamageTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L329)

```csharp
void MolotovDamageTimeUpdated()
```

### NextSprayDecalTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L282)

```csharp
void NextSprayDecalTimeUpdated()
```

### PlayerPatchEconIndicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L324)

```csharp
void PlayerPatchEconIndicesUpdated()
```

### PredictedDamageTagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L326)

```csharp
void PredictedDamageTagsUpdated()
```

### RagdollDamageBoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L283)

```csharp
void RagdollDamageBoneUpdated()
```

### RagdollDamageForceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L284)

```csharp
void RagdollDamageForceUpdated()
```

### RagdollDamageHeadshotUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L287)

```csharp
void RagdollDamageHeadshotUpdated()
```

### RagdollDamagePositionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L285)

```csharp
void RagdollDamagePositionUpdated()
```

### RagdollDamageWeaponNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L286)

```csharp
void RagdollDamageWeaponNameUpdated()
```

### RagdollServerOriginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L288)

```csharp
void RagdollServerOriginUpdated()
```

### ResumeZoomUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L302)

```csharp
void ResumeZoomUpdated()
```

### RetakesHasDefuseKitUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L271)

```csharp
void RetakesHasDefuseKitUpdated()
```

### RetakesMVPBoostExtraUtilityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L274)

```csharp
void RetakesMVPBoostExtraUtilityUpdated()
```

### RetakesMVPBoostItemUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L273)

```csharp
void RetakesMVPBoostItemUpdated()
```

### RetakesMVPLastRoundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L272)

```csharp
void RetakesMVPLastRoundUpdated()
```

### RetakesOfferingCardUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L270)

```csharp
void RetakesOfferingCardUpdated()
```

### RetakesOfferingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L269)

```csharp
void RetakesOfferingUpdated()
```

### RoundStartEquipmentValueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L322)

```csharp
void RoundStartEquipmentValueUpdated()
```

### ShotsFiredUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L309)

```csharp
void ShotsFiredUpdated()
```

### SlopeDropHeightUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L318)

```csharp
void SlopeDropHeightUpdated()
```

### SlopeDropOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L317)

```csharp
void SlopeDropOffsetUpdated()
```

### SwitchedHandednessTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L293)

```csharp
void SwitchedHandednessTimeUpdated()
```

### ThirdPersonHeadingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L316)

```csharp
void ThirdPersonHeadingUpdated()
```

### TimeOfLastInjuryUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L281)

```csharp
void TimeOfLastInjuryUpdated()
```

### VelocityModifierUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L311)

```csharp
void VelocityModifierUpdated()
```

### ViewmodelFOVUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L297)

```csharp
void ViewmodelFOVUpdated()
```

### ViewmodelOffsetXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L294)

```csharp
void ViewmodelOffsetXUpdated()
```

### ViewmodelOffsetYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L295)

```csharp
void ViewmodelOffsetYUpdated()
```

### ViewmodelOffsetZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L296)

```csharp
void ViewmodelOffsetZUpdated()
```

### WaitForNoAttackUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L314)

```csharp
void WaitForNoAttackUpdated()
```

### WhichBombZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L308)

```csharp
void WhichBombZoneUpdated()
```

