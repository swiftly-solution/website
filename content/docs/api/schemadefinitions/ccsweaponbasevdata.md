---
title: CCSWeaponBaseVData
---

# Interface CCSWeaponBaseVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSWeaponBaseVData : CBasePlayerWeaponVData, CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CBasePlayerWeaponVData>, ISchemaClass<CCSWeaponBaseVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePlayerWeaponVData](/docs/api/schemadefinitions/cbaseplayerweaponvdata)
- [CEntitySubclassVDataBase](/docs/api/schemadefinitions/centitysubclassvdatabase)
- [ISchemaClass<CEntitySubclassVDataBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerWeaponVData>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSWeaponBaseVData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AllowBurstHolster

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L113)

```csharp
ref bool AllowBurstHolster { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AnimClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L185)

```csharp
ref CGlobalSymbol AnimClass { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### AnimSkeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L26)

```csharp
SchemaUntypedField AnimSkeleton { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### ArmorRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L157)

```csharp
ref float ArmorRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AttackMovespeedFactor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L119)

```csharp
ref float AttackMovespeedFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BurstShotCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L111)

```csharp
ref int BurstShotCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CannotShootUnderwater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L55)

```csharp
ref bool CannotShootUnderwater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CrosshairDeltaDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L63)

```csharp
ref int CrosshairDeltaDistance { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CrosshairMinDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L61)

```csharp
ref int CrosshairMinDistance { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CycleTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L71)

```csharp
CFiringModeFloat CycleTime { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### Damage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L153)

```csharp
ref int Damage { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefaultLoadoutSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L39)

```csharp
ref loadout_slot_t DefaultLoadoutSlot { get; }
```

#### Property Value

- [loadout_slot_t](/docs/api/schemadefinitions/loadout_slot_t)

### DeployDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L107)

```csharp
ref float DeployDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DisallowAttackAfterReloadStartDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L109)

```csharp
ref float DisallowAttackAfterReloadStartDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FlinchVelocityModifierLarge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L165)

```csharp
ref float FlinchVelocityModifierLarge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FlinchVelocityModifierSmall

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L167)

```csharp
ref float FlinchVelocityModifierSmall { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GearSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L35)

```csharp
ref gear_slot_t GearSlot { get; }
```

#### Property Value

- [gear_slot_t](/docs/api/schemadefinitions/gear_slot_t)

### GearSlotPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L37)

```csharp
ref int GearSlotPosition { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasBurstMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L51)

```csharp
ref bool HasBurstMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeadshotMultiplier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L155)

```csharp
ref float HeadshotMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HideViewModelWhenZoomed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L129)

```csharp
ref bool HideViewModelWhenZoomed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InaccuracyAltSoundThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L123)

```csharp
ref float InaccuracyAltSoundThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyCrouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L77)

```csharp
CFiringModeFloat InaccuracyCrouch { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### InaccuracyFire

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L87)

```csharp
CFiringModeFloat InaccuracyFire { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### InaccuracyJump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L81)

```csharp
CFiringModeFloat InaccuracyJump { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### InaccuracyJumpApex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L103)

```csharp
ref float InaccuracyJumpApex { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyJumpInitial

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L101)

```csharp
ref float InaccuracyJumpInitial { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyLadder

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L85)

```csharp
CFiringModeFloat InaccuracyLadder { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### InaccuracyLand

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L83)

```csharp
CFiringModeFloat InaccuracyLand { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### InaccuracyMove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L89)

```csharp
CFiringModeFloat InaccuracyMove { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### InaccuracyPitchShift

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L121)

```csharp
ref float InaccuracyPitchShift { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyReload

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L105)

```csharp
ref float InaccuracyReload { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyStand

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L79)

```csharp
CFiringModeFloat InaccuracyStand { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### IronSightFOV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L147)

```csharp
ref float IronSightFOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightLooseness

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L151)

```csharp
ref float IronSightLooseness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightPivotForward

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L149)

```csharp
ref float IronSightPivotForward { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightPullUpSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L143)

```csharp
ref float IronSightPullUpSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightPutDownSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L145)

```csharp
ref float IronSightPutDownSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsFullAuto

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L65)

```csharp
ref bool IsFullAuto { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRevolver

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L53)

```csharp
ref bool IsRevolver { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KillAward

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L43)

```csharp
ref int KillAward { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L73)

```csharp
CFiringModeFloat MaxSpeed { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### MeleeWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L49)

```csharp
ref bool MeleeWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Model_AG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L23)

```csharp
SchemaUntypedField Model_AG2 { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MuzzlePos0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L28)

```csharp
ref Vector MuzzlePos0 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MuzzlePos1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L30)

```csharp
ref Vector MuzzlePos1 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L57)

```csharp
ref CGlobalSymbol Name { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### NumBullets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L67)

```csharp
ref int NumBullets { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Penetration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L159)

```csharp
ref float Penetration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Price

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L41)

```csharp
ref int Price { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PrimaryReserveAmmoMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L45)

```csharp
ref int PrimaryReserveAmmoMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Range

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L161)

```csharp
ref float Range { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RangeModifier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L163)

```csharp
ref float RangeModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoilAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L91)

```csharp
CFiringModeFloat RecoilAngle { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### RecoilAngleVariance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L93)

```csharp
CFiringModeFloat RecoilAngleVariance { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### RecoilMagnitude

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L95)

```csharp
CFiringModeFloat RecoilMagnitude { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### RecoilMagnitudeVariance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L97)

```csharp
CFiringModeFloat RecoilMagnitudeVariance { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### RecoilSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L115)

```csharp
ref int RecoilSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecoveryTimeCrouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L169)

```csharp
ref float RecoveryTimeCrouch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTimeCrouchFinal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L173)

```csharp
ref float RecoveryTimeCrouchFinal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTimeStand

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L171)

```csharp
ref float RecoveryTimeStand { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTimeStandFinal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L175)

```csharp
ref float RecoveryTimeStandFinal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTransitionEndBullet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L179)

```csharp
ref int RecoveryTransitionEndBullet { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecoveryTransitionStartBullet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L177)

```csharp
ref int RecoveryTransitionStartBullet { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReloadsSingleShells

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L69)

```csharp
ref bool ReloadsSingleShells { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SecondaryReserveAmmoMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L47)

```csharp
ref int SecondaryReserveAmmoMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SilencerType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L59)

```csharp
ref CSWeaponSilencerType SilencerType { get; }
```

#### Property Value

- [CSWeaponSilencerType](/docs/api/schemadefinitions/csweaponsilencertype)

### SmokeColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L183)

```csharp
ref Vector SmokeColor { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Spread

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L75)

```csharp
CFiringModeFloat Spread { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/schemadefinitions/cfiringmodefloat)

### SpreadSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L117)

```csharp
ref int SpreadSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ThrowVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L181)

```csharp
ref float ThrowVelocity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TracerFrequency

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L99)

```csharp
CFiringModeInt TracerFrequency { get; }
```

#### Property Value

- [CFiringModeInt](/docs/api/schemadefinitions/cfiringmodeint)

### TracerParticle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L33)

```csharp
SchemaUntypedField TracerParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### UnzoomsAfterShot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L127)

```csharp
ref bool UnzoomsAfterShot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseRadioSubtitle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L125)

```csharp
string UseRadioSubtitle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WeaponCategory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L20)

```csharp
ref CSWeaponCategory WeaponCategory { get; }
```

#### Property Value

- [CSWeaponCategory](/docs/api/schemadefinitions/csweaponcategory)

### WeaponType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L18)

```csharp
ref CSWeaponType WeaponType { get; }
```

#### Property Value

- [CSWeaponType](/docs/api/schemadefinitions/csweapontype)

### ZoomFOV1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L133)

```csharp
ref int ZoomFOV1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomFOV2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L135)

```csharp
ref int ZoomFOV2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomLevels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L131)

```csharp
ref int ZoomLevels { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomTime0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L137)

```csharp
ref float ZoomTime0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ZoomTime1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L139)

```csharp
ref float ZoomTime1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ZoomTime2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L141)

```csharp
ref float ZoomTime2 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

