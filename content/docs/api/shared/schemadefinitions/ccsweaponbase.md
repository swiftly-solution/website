---
title: CCSWeaponBase
---

```csharp
public interface CCSWeaponBase : CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccuracyPenalty

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L47)

```csharp
ref float AccuracyPenalty { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AccuracySmoothedForZoom

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L51)

```csharp
ref float AccuracySmoothedForZoom { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BurstMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L57)

```csharp
ref bool BurstMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanBePickedUp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L81)

```csharp
ref bool CanBePickedUp { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Donated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L97)

```csharp
ref bool Donated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DropTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L93)

```csharp
GameTick_t DropTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### DroppedAtTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L65)

```csharp
GameTime_t DroppedAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### DroppedNearBuyZone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L77)

```csharp
ref bool DroppedNearBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FireOnEmpty

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L35)

```csharp
ref bool FireOnEmpty { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InReload

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L63)

```csharp
ref bool InReload { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InspectCancelCompleteTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L27)

```csharp
GameTime_t InspectCancelCompleteTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### InspectPending

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L29)

```csharp
ref bool InspectPending { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InspectShouldLoop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L31)

```csharp
ref bool InspectShouldLoop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IronSightController

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L107)

```csharp
CIronSightController IronSightController { get; }
```

#### Property Value

- [CIronSightController](/docs/api/shared/schemadefinitions/cironsightcontroller)

### IronSightMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L109)

```csharp
ref int IronSightMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsHauledBack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L67)

```csharp
ref bool IsHauledBack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastAccuracyUpdateTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L49)

```csharp
GameTime_t LastAccuracyUpdateTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastEmptySoundCmdNum

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L33)

```csharp
ref int LastEmptySoundCmdNum { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastLOSTraceFailureTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L111)

```csharp
GameTime_t LastLOSTraceFailureTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastShakeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L115)

```csharp
GameTime_t LastShakeTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastShotTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L99)

```csharp
GameTime_t LastShotTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### MostRecentTeamNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L75)

```csharp
ref int MostRecentTeamNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextAttackRenderTimeOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L79)

```csharp
ref float NextAttackRenderTimeOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextOwnerTouchTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L85)

```csharp
GameTime_t NextOwnerTouchTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### NextPrevOwnerTouchTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L87)

```csharp
GameTime_t NextPrevOwnerTouchTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### NextPrevOwnerUseTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L89)

```csharp
GameTime_t NextPrevOwnerUseTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### NumRemoveUnownedWeaponThink

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L105)

```csharp
ref int NumRemoveUnownedWeaponThink { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnPlayerPickup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L37)

```csharp
CEntityIOOutput OnPlayerPickup { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OriginalTeamNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L73)

```csharp
ref int OriginalTeamNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerAmmoStockOnPickup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L19)

```csharp
ref bool PlayerAmmoStockOnPickup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PostponeFireReadyFrac

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L61)

```csharp
ref float PostponeFireReadyFrac { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostponeFireReadyTicks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L59)

```csharp
GameTick_t PostponeFireReadyTicks { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### PrevOwner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L91)

```csharp
ref CHandle<CCSPlayerPawn> PrevOwner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### RecoilIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L53)

```csharp
ref int RecoilIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecoilIndex1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L55)

```csharp
ref float RecoilIndex1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Removeable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L17)

```csharp
ref bool Removeable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequireUseToTouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L21)

```csharp
ref bool RequireUseToTouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SilencerOn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L69)

```csharp
ref bool SilencerOn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimeSilencerSwitchComplete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L71)

```csharp
GameTime_t TimeSilencerSwitchComplete { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TurningInaccuracy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L45)

```csharp
ref float TurningInaccuracy { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurningInaccuracyDelta

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L41)

```csharp
ref float TurningInaccuracyDelta { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurningInaccuracyEyeDirLast

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L43)

```csharp
ref Vector TurningInaccuracyEyeDirLast { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### UseCanOverrideNextOwnerTouchTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L83)

```csharp
ref bool UseCanOverrideNextOwnerTouchTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasActiveWeaponWhenDropped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L95)

```csharp
ref bool WasActiveWeaponWhenDropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasOwnedByCT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L101)

```csharp
ref bool WasOwnedByCT { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WasOwnedByTerrorist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L103)

```csharp
ref bool WasOwnedByTerrorist { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WatTickOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L113)

```csharp
ref float WatTickOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WeaponBaseVData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSWeaponBase.cs#L5)

```csharp
CCSWeaponBaseVData WeaponBaseVData { get; }
```

#### Property Value

- [CCSWeaponBaseVData](/docs/api/shared/schemadefinitions/ccsweaponbasevdata)

### WeaponGameplayAnimState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L23)

```csharp
ref WeaponGameplayAnimState WeaponGameplayAnimState { get; }
```

#### Property Value

- [WeaponGameplayAnimState](/docs/api/shared/schemadefinitions/weapongameplayanimstate)

### WeaponGameplayAnimStateTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L25)

```csharp
GameTime_t WeaponGameplayAnimStateTimestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### WeaponMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L39)

```csharp
ref CSWeaponMode WeaponMode { get; }
```

#### Property Value

- [CSWeaponMode](/docs/api/shared/schemadefinitions/csweaponmode)

## Methods

### AccuracyPenaltyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L123)

```csharp
void AccuracyPenaltyUpdated()
```

### BurstModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L126)

```csharp
void BurstModeUpdated()
```

### DropTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L139)

```csharp
void DropTickUpdated()
```

### DroppedAtTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L130)

```csharp
void DroppedAtTimeUpdated()
```

### DroppedNearBuyZoneUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L136)

```csharp
void DroppedNearBuyZoneUpdated()
```

### InReloadUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L129)

```csharp
void InReloadUpdated()
```

### InspectCancelCompleteTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L119)

```csharp
void InspectCancelCompleteTimeUpdated()
```

### InspectPendingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L120)

```csharp
void InspectPendingUpdated()
```

### InspectShouldLoopUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L121)

```csharp
void InspectShouldLoopUpdated()
```

### IronSightModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L142)

```csharp
void IronSightModeUpdated()
```

### IsHauledBackUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L131)

```csharp
void IsHauledBackUpdated()
```

### LastShakeTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L144)

```csharp
void LastShakeTimeUpdated()
```

### LastShotTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L141)

```csharp
void LastShotTimeUpdated()
```

### MostRecentTeamNumberUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L135)

```csharp
void MostRecentTeamNumberUpdated()
```

### NextPrevOwnerUseTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L137)

```csharp
void NextPrevOwnerUseTimeUpdated()
```

### OriginalTeamNumberUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L134)

```csharp
void OriginalTeamNumberUpdated()
```

### PostponeFireReadyFracUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L128)

```csharp
void PostponeFireReadyFracUpdated()
```

### PostponeFireReadyTicksUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L127)

```csharp
void PostponeFireReadyTicksUpdated()
```

### PrevOwnerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L138)

```csharp
void PrevOwnerUpdated()
```

### RecoilIndex1Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L125)

```csharp
void RecoilIndex1Updated()
```

### RecoilIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L124)

```csharp
void RecoilIndexUpdated()
```

### SilencerOnUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L132)

```csharp
void SilencerOnUpdated()
```

### TimeSilencerSwitchCompleteUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L133)

```csharp
void TimeSilencerSwitchCompleteUpdated()
```

### WasActiveWeaponWhenDroppedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L140)

```csharp
void WasActiveWeaponWhenDroppedUpdated()
```

### WatTickOffsetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L143)

```csharp
void WatTickOffsetUpdated()
```

### WeaponGameplayAnimStateTimestampUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L118)

```csharp
void WeaponGameplayAnimStateTimestampUpdated()
```

### WeaponGameplayAnimStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L117)

```csharp
void WeaponGameplayAnimStateUpdated()
```

### WeaponModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBase.cs#L122)

```csharp
void WeaponModeUpdated()
```

