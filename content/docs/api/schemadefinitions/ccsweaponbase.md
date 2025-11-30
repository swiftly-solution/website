---
title: CCSWeaponBase
---

# Interface CCSWeaponBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSWeaponBase : CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)
- [CEconEntity](/docs/api/schemadefinitions/ceconentity)
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
- [ISchemaClass<CEconEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerWeapon>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSWeaponBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccuracyPenalty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L48)

```csharp
ref float AccuracyPenalty { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AccuracySmoothedForZoom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L52)

```csharp
ref float AccuracySmoothedForZoom { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BurstMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L58)

```csharp
ref bool BurstMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanBePickedUp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L82)

```csharp
ref bool CanBePickedUp { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Donated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L98)

```csharp
ref bool Donated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DropTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L94)

```csharp
GameTick_t DropTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### DroppedAtTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L66)

```csharp
GameTime_t DroppedAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### DroppedNearBuyZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L78)

```csharp
ref bool DroppedNearBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FireOnEmpty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L36)

```csharp
ref bool FireOnEmpty { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InReload

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L64)

```csharp
ref bool InReload { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InspectCancelCompleteTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L28)

```csharp
GameTime_t InspectCancelCompleteTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### InspectPending

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L30)

```csharp
ref bool InspectPending { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InspectShouldLoop

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L32)

```csharp
ref bool InspectShouldLoop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IronSightController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L108)

```csharp
CIronSightController IronSightController { get; }
```

#### Property Value

- [CIronSightController](/docs/api/schemadefinitions/cironsightcontroller)

### IronSightMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L110)

```csharp
ref int IronSightMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsHauledBack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L68)

```csharp
ref bool IsHauledBack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastAccuracyUpdateTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L50)

```csharp
GameTime_t LastAccuracyUpdateTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastEmptySoundCmdNum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L34)

```csharp
ref int LastEmptySoundCmdNum { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastLOSTraceFailureTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L112)

```csharp
GameTime_t LastLOSTraceFailureTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastShakeTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L116)

```csharp
GameTime_t LastShakeTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastShotTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L100)

```csharp
GameTime_t LastShotTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### MostRecentTeamNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L76)

```csharp
ref int MostRecentTeamNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextAttackRenderTimeOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L80)

```csharp
ref float NextAttackRenderTimeOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextOwnerTouchTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L86)

```csharp
GameTime_t NextOwnerTouchTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NextPrevOwnerTouchTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L88)

```csharp
GameTime_t NextPrevOwnerTouchTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NextPrevOwnerUseTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L90)

```csharp
GameTime_t NextPrevOwnerUseTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NumRemoveUnownedWeaponThink

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L106)

```csharp
ref int NumRemoveUnownedWeaponThink { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnPlayerPickup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L38)

```csharp
CEntityIOOutput OnPlayerPickup { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OriginalTeamNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L74)

```csharp
ref int OriginalTeamNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerAmmoStockOnPickup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L20)

```csharp
ref bool PlayerAmmoStockOnPickup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PostponeFireReadyFrac

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L62)

```csharp
ref float PostponeFireReadyFrac { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostponeFireReadyTicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L60)

```csharp
GameTick_t PostponeFireReadyTicks { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### PrevOwner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L92)

```csharp
ref CHandle<CCSPlayerPawn> PrevOwner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### RecoilIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L54)

```csharp
ref int RecoilIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecoilIndex1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L56)

```csharp
ref float RecoilIndex1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Removeable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L18)

```csharp
ref bool Removeable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequireUseToTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L22)

```csharp
ref bool RequireUseToTouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SilencerOn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L70)

```csharp
ref bool SilencerOn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimeSilencerSwitchComplete

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L72)

```csharp
GameTime_t TimeSilencerSwitchComplete { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TurningInaccuracy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L46)

```csharp
ref float TurningInaccuracy { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurningInaccuracyDelta

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L42)

```csharp
ref float TurningInaccuracyDelta { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurningInaccuracyEyeDirLast

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L44)

```csharp
ref Vector TurningInaccuracyEyeDirLast { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### UseCanOverrideNextOwnerTouchTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L84)

```csharp
ref bool UseCanOverrideNextOwnerTouchTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasActiveWeaponWhenDropped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L96)

```csharp
ref bool WasActiveWeaponWhenDropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasOwnedByCT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L102)

```csharp
ref bool WasOwnedByCT { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasOwnedByTerrorist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L104)

```csharp
ref bool WasOwnedByTerrorist { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WatTickOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L114)

```csharp
ref float WatTickOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WeaponBaseVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSWeaponBase.cs#L5)

```csharp
CCSWeaponBaseVData WeaponBaseVData { get; }
```

#### Property Value

- [CCSWeaponBaseVData](/docs/api/schemadefinitions/ccsweaponbasevdata)

### WeaponGameplayAnimState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L24)

```csharp
ref WeaponGameplayAnimState WeaponGameplayAnimState { get; }
```

#### Property Value

- [WeaponGameplayAnimState](/docs/api/schemadefinitions/weapongameplayanimstate)

### WeaponGameplayAnimStateTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L26)

```csharp
GameTime_t WeaponGameplayAnimStateTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### WeaponMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L40)

```csharp
ref CSWeaponMode WeaponMode { get; }
```

#### Property Value

- [CSWeaponMode](/docs/api/schemadefinitions/csweaponmode)

## Methods

### AccuracyPenaltyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L124)

```csharp
void AccuracyPenaltyUpdated()
```

### BurstModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L127)

```csharp
void BurstModeUpdated()
```

### DropTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L140)

```csharp
void DropTickUpdated()
```

### DroppedAtTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L131)

```csharp
void DroppedAtTimeUpdated()
```

### DroppedNearBuyZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L137)

```csharp
void DroppedNearBuyZoneUpdated()
```

### InReloadUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L130)

```csharp
void InReloadUpdated()
```

### InspectCancelCompleteTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L120)

```csharp
void InspectCancelCompleteTimeUpdated()
```

### InspectPendingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L121)

```csharp
void InspectPendingUpdated()
```

### InspectShouldLoopUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L122)

```csharp
void InspectShouldLoopUpdated()
```

### IronSightModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L143)

```csharp
void IronSightModeUpdated()
```

### IsHauledBackUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L132)

```csharp
void IsHauledBackUpdated()
```

### LastShakeTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L145)

```csharp
void LastShakeTimeUpdated()
```

### LastShotTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L142)

```csharp
void LastShotTimeUpdated()
```

### MostRecentTeamNumberUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L136)

```csharp
void MostRecentTeamNumberUpdated()
```

### NextPrevOwnerUseTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L138)

```csharp
void NextPrevOwnerUseTimeUpdated()
```

### OriginalTeamNumberUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L135)

```csharp
void OriginalTeamNumberUpdated()
```

### PostponeFireReadyFracUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L129)

```csharp
void PostponeFireReadyFracUpdated()
```

### PostponeFireReadyTicksUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L128)

```csharp
void PostponeFireReadyTicksUpdated()
```

### PrevOwnerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L139)

```csharp
void PrevOwnerUpdated()
```

### RecoilIndex1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L126)

```csharp
void RecoilIndex1Updated()
```

### RecoilIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L125)

```csharp
void RecoilIndexUpdated()
```

### SilencerOnUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L133)

```csharp
void SilencerOnUpdated()
```

### TimeSilencerSwitchCompleteUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L134)

```csharp
void TimeSilencerSwitchCompleteUpdated()
```

### WasActiveWeaponWhenDroppedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L141)

```csharp
void WasActiveWeaponWhenDroppedUpdated()
```

### WatTickOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L144)

```csharp
void WatTickOffsetUpdated()
```

### WeaponGameplayAnimStateTimestampUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L119)

```csharp
void WeaponGameplayAnimStateTimestampUpdated()
```

### WeaponGameplayAnimStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L118)

```csharp
void WeaponGameplayAnimStateUpdated()
```

### WeaponModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L123)

```csharp
void WeaponModeUpdated()
```

