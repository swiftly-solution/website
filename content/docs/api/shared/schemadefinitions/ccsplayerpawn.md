---
title: CCSPlayerPawn
---

```csharp
public interface CCSPlayerPawn : CCSPlayerPawnBase, CBasePlayerPawn, CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CBasePlayerPawn>, ISchemaClass<CCSPlayerPawnBase>, ISchemaClass<CCSPlayerPawn>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ActionTrackingServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L22)

```csharp
CCSPlayer_ActionTrackingServices? ActionTrackingServices { get; }
```

#### Property Value

- [CCSPlayer_ActionTrackingServices](/docs/api/shared/schemadefinitions/ccsplayer_actiontrackingservices)?

**AimPunchAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L66)

```csharp
ref QAngle AimPunchAngle { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**AimPunchAngleVel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L68)

```csharp
ref QAngle AimPunchAngleVel { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**AimPunchCache** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L74)

```csharp
ref CUtlVector<QAngle> AimPunchCache { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[QAngle](/docs/api/shared/natives/qangle)>

**AimPunchTickBase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L70)

```csharp
GameTick_t AimPunchTickBase { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

**AimPunchTickFraction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L72)

```csharp
ref float AimPunchTickFraction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**AllowAutoFollowTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L138)

```csharp
GameTime_t AllowAutoFollowTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**ArmorValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L208)

```csharp
ref int ArmorValue { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**BlockingUseActionInProgress** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L156)

```csharp
ref CSPlayerBlockingUseAction_t BlockingUseActionInProgress { get; }
```

#### Property Value

- [CSPlayerBlockingUseAction_t](/docs/api/shared/schemadefinitions/csplayerblockinguseaction_t)

**BombSiteIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L162)

```csharp
ref uint BombSiteIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Bot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L192)

```csharp
CCSBot? Bot { get; }
```

#### Property Value

- [CCSBot](/docs/api/shared/schemadefinitions/ccsbot)?

**BotAllowActive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L194)

```csharp
ref bool BotAllowActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**BulletServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L16)

```csharp
CCSPlayer_BulletServices? BulletServices { get; }
```

#### Property Value

- [CCSPlayer_BulletServices](/docs/api/shared/schemadefinitions/ccsplayer_bulletservices)?

**BuyServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L20)

```csharp
CCSPlayer_BuyServices? BuyServices { get; }
```

#### Property Value

- [CCSPlayer_BuyServices](/docs/api/shared/schemadefinitions/ccsplayer_buyservices)?

**CharacterDefIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L28)

```csharp
ref ushort CharacterDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**CommittingSuicideOnTeamChange** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L253)

```csharp
ref bool CommittingSuicideOnTeamChange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**CurrentEquipmentValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L210)

```csharp
ref ushort CurrentEquipmentValue { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**DamageReactServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L26)

```csharp
CCSPlayer_DamageReactServices? DamageReactServices { get; }
```

#### Property Value

- [CCSPlayer_DamageReactServices](/docs/api/shared/schemadefinitions/ccsplayer_damagereactservices)?

**DealtDamageToEnemyMostRecentTimestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L132)

```csharp
ref float DealtDamageToEnemyMostRecentTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DeathEyeAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L110)

```csharp
ref QAngle DeathEyeAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**DeathFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L220)

```csharp
ref int DeathFlags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**DeathInfoOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L226)

```csharp
ref Vector DeathInfoOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**DeathInfoTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L224)

```csharp
ref float DeathInfoTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DisplayHistoryBits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L134)

```csharp
ref uint DisplayHistoryBits { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**EconGloves** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L106)

```csharp
CEconItemView EconGloves { get; }
```

#### Property Value

- [CEconItemView](/docs/api/shared/schemadefinitions/ceconitemview)

**EconGlovesChanged** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L108)

```csharp
ref byte EconGlovesChanged { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**EmitSoundTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L158)

```csharp
GameTime_t EmitSoundTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**EntitySpottedState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L144)

```csharp
EntitySpottedState_t EntitySpottedState { get; }
```

#### Property Value

- [EntitySpottedState_t](/docs/api/shared/schemadefinitions/entityspottedstate_t)

**EyeAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L263)

```csharp
ref QAngle EyeAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**FlinchStack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L172)

```csharp
ref float FlinchStack { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**FreezetimeEndEquipmentValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L214)

```csharp
ref ushort FreezetimeEndEquipmentValue { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**GrenadeParameterStashTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L232)

```csharp
GameTime_t GrenadeParameterStashTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**GrenadeParametersStashed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L234)

```csharp
ref bool GrenadeParametersStashed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**GunGameImmunity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L259)

```csharp
ref bool GunGameImmunity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**GunGameImmunityColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L230)

```csharp
ref Color GunGameImmunityColor { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

**HasDeathInfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L222)

```csharp
ref bool HasDeathInfo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasFemaleVoice** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L30)

```csharp
ref bool HasFemaleVoice { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HeadConstraintOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L202)

```csharp
ref Vector HeadConstraintOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**HealthShotBoostExpirationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L62)

```csharp
GameTime_t HealthShotBoostExpirationTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**HighestAppliedDamageTagTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L251)

```csharp
ref int HighestAppliedDamageTagTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**HitBodyPart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L178)

```csharp
ref int HitBodyPart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**HitHeading** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L176)

```csharp
ref float HitHeading { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**HostageServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L18)

```csharp
CCSPlayer_HostageServices? HostageServices { get; }
```

#### Property Value

- [CCSPlayer_HostageServices](/docs/api/shared/schemadefinitions/ccsplayer_hostageservices)?

**IgnoreLadderJumpTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L184)

```csharp
ref float IgnoreLadderJumpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ImmuneToGunGameDamageTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L257)

```csharp
GameTime_t ImmuneToGunGameDamageTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**InBombZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L46)

```csharp
ref bool InBombZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InBombZoneTrigger** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L166)

```csharp
ref bool InBombZoneTrigger { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InBuyZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L38)

```csharp
ref bool InBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InHostageRescueZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L44)

```csharp
ref bool InHostageRescueZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InHostageResetZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L36)

```csharp
ref bool InHostageResetZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InNoDefuseArea** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L160)

```csharp
ref bool InNoDefuseArea { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsBuyMenuOpen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L76)

```csharp
ref bool IsBuyMenuOpen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsDefusing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L152)

```csharp
ref bool IsDefusing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsGrabbingHostage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L154)

```csharp
ref bool IsGrabbingHostage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsScoped** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L148)

```csharp
ref bool IsScoped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsSpawning** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L218)

```csharp
ref bool IsSpawning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsWalking** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L126)

```csharp
ref bool IsWalking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**KilledByHeadshot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L186)

```csharp
ref bool KilledByHeadshot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LandingTimeSeconds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L64)

```csharp
ref float LandingTimeSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastAttackedTeammate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L136)

```csharp
ref float LastAttackedTeammate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastGivenBombTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L130)

```csharp
ref float LastGivenBombTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastGivenDefuserTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L128)

```csharp
ref float LastGivenDefuserTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastHeadBoneTransformIsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L80)

```csharp
ref bool LastHeadBoneTransformIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LastHealth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L190)

```csharp
ref int LastHealth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LastHitBox** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L188)

```csharp
ref int LastHitBox { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LastKillerIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L142)

```csharp
ref uint LastKillerIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**LastLandTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L82)

```csharp
GameTime_t LastLandTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**LastPickupPriority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L204)

```csharp
ref int LastPickupPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LastPickupPriorityTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L206)

```csharp
ref float LastPickupPriorityTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastPlaceName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L34)

```csharp
ISchemaFixedString LastPlaceName { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**LastWeaponFireUsercmd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L216)

```csharp
ref int LastWeaponFireUsercmd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LeftHanded** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L114)

```csharp
ref bool LeftHanded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MolotovDamageTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L261)

```csharp
ref float MolotovDamageTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NextSprayDecalTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L90)

```csharp
GameTime_t NextSprayDecalTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**NextSprayDecalTimeExpedited** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L92)

```csharp
ref bool NextSprayDecalTimeExpedited { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OnGroundLastTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L84)

```csharp
ref bool OnGroundLastTick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PlayerLocked** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L86)

```csharp
ref int PlayerLocked { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PlayerPatchEconIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L228)

```csharp
ISchemaFixedArray<uint> PlayerPatchEconIndices { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**PredictedDamageTags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L249)

```csharp
ref CUtlVector PredictedDamageTags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**RadioServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L24)

```csharp
CCSPlayer_RadioServices? RadioServices { get; }
```

#### Property Value

- [CCSPlayer_RadioServices](/docs/api/shared/schemadefinitions/ccsplayer_radioservices)?

**RagdollDamageBone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L94)

```csharp
ref int RagdollDamageBone { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RagdollDamageForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L96)

```csharp
ref Vector RagdollDamageForce { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**RagdollDamageHeadshot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L102)

```csharp
ref bool RagdollDamageHeadshot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RagdollDamagePosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L98)

```csharp
ref Vector RagdollDamagePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**RagdollDamageWeaponName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L100)

```csharp
ISchemaFixedString RagdollDamageWeaponName { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**RagdollServerOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L104)

```csharp
ref Vector RagdollServerOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**ResetArmorNextSpawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L140)

```csharp
ref bool ResetArmorNextSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ResumeZoom** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L150)

```csharp
ref bool ResumeZoom { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RetakesHasDefuseKit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L54)

```csharp
ref bool RetakesHasDefuseKit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RetakesMVPBoostExtraUtility** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L60)

```csharp
ref loadout_slot_t RetakesMVPBoostExtraUtility { get; }
```

#### Property Value

- [loadout_slot_t](/docs/api/shared/schemadefinitions/loadout_slot_t)

**RetakesMVPBoostItem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L58)

```csharp
ref int RetakesMVPBoostItem { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RetakesMVPLastRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L56)

```csharp
ref bool RetakesMVPLastRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RetakesOffering** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L50)

```csharp
ref int RetakesOffering { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RetakesOfferingCard** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L52)

```csharp
ref int RetakesOfferingCard { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RoundStartEquipmentValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L212)

```csharp
ref ushort RoundStartEquipmentValue { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**ShootAngleHistory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L242)

```csharp
ISchemaFixedArray<QAngle> ShootAngleHistory { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[QAngle](/docs/api/shared/natives/qangle)>

**ShotsFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L170)

```csharp
ref int ShotsFired { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SkipOneHeadConstraintUpdate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L112)

```csharp
ref bool SkipOneHeadConstraintUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SlopeDropHeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L200)

```csharp
ref float SlopeDropHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SlopeDropOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L198)

```csharp
ref float SlopeDropOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SpotRules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L146)

```csharp
ref int SpotRules { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**StashedGrenadeThrowPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L238)

```csharp
ref Vector StashedGrenadeThrowPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**StashedShootAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L236)

```csharp
ref QAngle StashedShootAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**StashedVelocity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L240)

```csharp
ref Vector StashedVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**StrVOPrefix** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L32)

```csharp
ref CUtlString StrVOPrefix { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**SwitchedHandednessTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L116)

```csharp
GameTime_t SwitchedHandednessTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**ThirdPersonHeading** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L196)

```csharp
ref QAngle ThirdPersonHeading { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**ThrowPositionHistory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L244)

```csharp
ISchemaFixedArray<Vector> ThrowPositionHistory { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

**TimeOfLastInjury** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L88)

```csharp
GameTime_t TimeOfLastInjury { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**TotalBulletForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L180)

```csharp
ref Vector TotalBulletForce { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**TouchingBuyZones** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L40)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> TouchingBuyZones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**VelocityHistory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L246)

```csharp
ISchemaFixedArray<Vector> VelocityHistory { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

**VelocityModifier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L174)

```csharp
ref float VelocityModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ViewmodelFOV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L124)

```csharp
ref float ViewmodelFOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ViewmodelOffsetX** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L118)

```csharp
ref float ViewmodelOffsetX { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ViewmodelOffsetY** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L120)

```csharp
ref float ViewmodelOffsetY { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ViewmodelOffsetZ** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L122)

```csharp
ref float ViewmodelOffsetZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**WaitForNoAttack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L182)

```csharp
ref bool WaitForNoAttack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**WasInBombZoneTrigger** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L168)

```csharp
ref bool WasInBombZoneTrigger { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**WasInBuyZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L42)

```csharp
ref bool WasInBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**WasInHostageRescueZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L48)

```csharp
ref bool WasInHostageRescueZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**WasNotKilledNaturally** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L255)

```csharp
ref bool WasNotKilledNaturally { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**WhichBombZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L164)

```csharp
ref int WhichBombZone { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**XLastHeadBoneTransform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L78)

```csharp
ref CTransform XLastHeadBoneTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

## Methods

**ActionTrackingServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L268)

```csharp
void ActionTrackingServicesUpdated()
```

**AimPunchAngleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L281)

```csharp
void AimPunchAngleUpdated()
```

**AimPunchAngleVelUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L282)

```csharp
void AimPunchAngleVelUpdated()
```

**AimPunchTickBaseUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L283)

```csharp
void AimPunchTickBaseUpdated()
```

**AimPunchTickFractionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L284)

```csharp
void AimPunchTickFractionUpdated()
```

**ArmorValueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L325)

```csharp
void ArmorValueUpdated()
```

**BlockingUseActionInProgressUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L310)

```csharp
void BlockingUseActionInProgressUpdated()
```

**BulletServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L265)

```csharp
void BulletServicesUpdated()
```

**BuyServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L267)

```csharp
void BuyServicesUpdated()
```

**CurrentEquipmentValueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L326)

```csharp
void CurrentEquipmentValueUpdated()
```

**DeathEyeAnglesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L296)

```csharp
void DeathEyeAnglesUpdated()
```

**EconGlovesChangedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L295)

```csharp
void EconGlovesChangedUpdated()
```

**EconGlovesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L294)

```csharp
void EconGlovesUpdated()
```

**EmitSoundTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L311)

```csharp
void EmitSoundTimeUpdated()
```

**EntitySpottedStateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L305)

```csharp
void EntitySpottedStateUpdated()
```

**EyeAnglesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L335)

```csharp
void EyeAnglesUpdated()
```

**FlinchStackUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L315)

```csharp
void FlinchStackUpdated()
```

**FreezetimeEndEquipmentValueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L328)

```csharp
void FreezetimeEndEquipmentValueUpdated()
```

**GunGameImmunityColorUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L330)

```csharp
void GunGameImmunityColorUpdated()
```

**GunGameImmunityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L333)

```csharp
void GunGameImmunityUpdated()
```

**HasFemaleVoiceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L269)

```csharp
void HasFemaleVoiceUpdated()
```

**HeadConstraintOffsetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L324)

```csharp
void HeadConstraintOffsetUpdated()
```

**HealthShotBoostExpirationTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L280)

```csharp
void HealthShotBoostExpirationTimeUpdated()
```

**HitBodyPartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L318)

```csharp
void HitBodyPartUpdated()
```

**HitHeadingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L317)

```csharp
void HitHeadingUpdated()
```

**HostageServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L266)

```csharp
void HostageServicesUpdated()
```

**ImmuneToGunGameDamageTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L332)

```csharp
void ImmuneToGunGameDamageTimeUpdated()
```

**InBombZoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L273)

```csharp
void InBombZoneUpdated()
```

**InBuyZoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L271)

```csharp
void InBuyZoneUpdated()
```

**InHostageRescueZoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L272)

```csharp
void InHostageRescueZoneUpdated()
```

**InNoDefuseAreaUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L312)

```csharp
void InNoDefuseAreaUpdated()
```

**IsBuyMenuOpenUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L285)

```csharp
void IsBuyMenuOpenUpdated()
```

**IsDefusingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L308)

```csharp
void IsDefusingUpdated()
```

**IsGrabbingHostageUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L309)

```csharp
void IsGrabbingHostageUpdated()
```

**IsScopedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L306)

```csharp
void IsScopedUpdated()
```

**IsWalkingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L303)

```csharp
void IsWalkingUpdated()
```

**KilledByHeadshotUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L320)

```csharp
void KilledByHeadshotUpdated()
```

**LastKillerIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L304)

```csharp
void LastKillerIndexUpdated()
```

**LastPlaceNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L270)

```csharp
void LastPlaceNameUpdated()
```

**LeftHandedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L297)

```csharp
void LeftHandedUpdated()
```

**MolotovDamageTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L334)

```csharp
void MolotovDamageTimeUpdated()
```

**NextSprayDecalTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L287)

```csharp
void NextSprayDecalTimeUpdated()
```

**PlayerPatchEconIndicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L329)

```csharp
void PlayerPatchEconIndicesUpdated()
```

**PredictedDamageTagsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L331)

```csharp
void PredictedDamageTagsUpdated()
```

**RagdollDamageBoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L288)

```csharp
void RagdollDamageBoneUpdated()
```

**RagdollDamageForceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L289)

```csharp
void RagdollDamageForceUpdated()
```

**RagdollDamageHeadshotUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L292)

```csharp
void RagdollDamageHeadshotUpdated()
```

**RagdollDamagePositionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L290)

```csharp
void RagdollDamagePositionUpdated()
```

**RagdollDamageWeaponNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L291)

```csharp
void RagdollDamageWeaponNameUpdated()
```

**RagdollServerOriginUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L293)

```csharp
void RagdollServerOriginUpdated()
```

**ResumeZoomUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L307)

```csharp
void ResumeZoomUpdated()
```

**RetakesHasDefuseKitUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L276)

```csharp
void RetakesHasDefuseKitUpdated()
```

**RetakesMVPBoostExtraUtilityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L279)

```csharp
void RetakesMVPBoostExtraUtilityUpdated()
```

**RetakesMVPBoostItemUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L278)

```csharp
void RetakesMVPBoostItemUpdated()
```

**RetakesMVPLastRoundUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L277)

```csharp
void RetakesMVPLastRoundUpdated()
```

**RetakesOfferingCardUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L275)

```csharp
void RetakesOfferingCardUpdated()
```

**RetakesOfferingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L274)

```csharp
void RetakesOfferingUpdated()
```

**RoundStartEquipmentValueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L327)

```csharp
void RoundStartEquipmentValueUpdated()
```

**ShotsFiredUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L314)

```csharp
void ShotsFiredUpdated()
```

**SlopeDropHeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L323)

```csharp
void SlopeDropHeightUpdated()
```

**SlopeDropOffsetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L322)

```csharp
void SlopeDropOffsetUpdated()
```

**SwitchedHandednessTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L298)

```csharp
void SwitchedHandednessTimeUpdated()
```

**ThirdPersonHeadingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L321)

```csharp
void ThirdPersonHeadingUpdated()
```

**TimeOfLastInjuryUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L286)

```csharp
void TimeOfLastInjuryUpdated()
```

**VelocityModifierUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L316)

```csharp
void VelocityModifierUpdated()
```

**ViewmodelFOVUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L302)

```csharp
void ViewmodelFOVUpdated()
```

**ViewmodelOffsetXUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L299)

```csharp
void ViewmodelOffsetXUpdated()
```

**ViewmodelOffsetYUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L300)

```csharp
void ViewmodelOffsetYUpdated()
```

**ViewmodelOffsetZUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L301)

```csharp
void ViewmodelOffsetZUpdated()
```

**WaitForNoAttackUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L319)

```csharp
void WaitForNoAttackUpdated()
```

**WhichBombZoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerPawn.cs#L313)

```csharp
void WhichBombZoneUpdated()
```

