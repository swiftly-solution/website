---
title: CCSWeaponBaseVData
---

```csharp
public interface CCSWeaponBaseVData : CBasePlayerWeaponVData, CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CBasePlayerWeaponVData>, ISchemaClass<CCSWeaponBaseVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowBurstHolster

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L112)

```csharp
ref bool AllowBurstHolster { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AnimClass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L184)

```csharp
ref CGlobalSymbol AnimClass { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### AnimSkeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L25)

```csharp
SchemaUntypedField AnimSkeleton { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ArmorRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L156)

```csharp
ref float ArmorRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AttackMovespeedFactor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L118)

```csharp
ref float AttackMovespeedFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BurstShotCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L110)

```csharp
ref int BurstShotCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CannotShootUnderwater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L54)

```csharp
ref bool CannotShootUnderwater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CrosshairDeltaDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L62)

```csharp
ref int CrosshairDeltaDistance { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CrosshairMinDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L60)

```csharp
ref int CrosshairMinDistance { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CycleTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L70)

```csharp
CFiringModeFloat CycleTime { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### Damage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L152)

```csharp
ref int Damage { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefaultLoadoutSlot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L38)

```csharp
ref loadout_slot_t DefaultLoadoutSlot { get; }
```

#### Property Value

- [loadout_slot_t](/docs/api/shared/schemadefinitions/loadout_slot_t)

### DeployDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L106)

```csharp
ref float DeployDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DisallowAttackAfterReloadStartDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L108)

```csharp
ref float DisallowAttackAfterReloadStartDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FlinchVelocityModifierLarge

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L164)

```csharp
ref float FlinchVelocityModifierLarge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FlinchVelocityModifierSmall

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L166)

```csharp
ref float FlinchVelocityModifierSmall { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GearSlot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L34)

```csharp
ref gear_slot_t GearSlot { get; }
```

#### Property Value

- [gear_slot_t](/docs/api/shared/schemadefinitions/gear_slot_t)

### GearSlotPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L36)

```csharp
ref int GearSlotPosition { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasBurstMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L50)

```csharp
ref bool HasBurstMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeadshotMultiplier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L154)

```csharp
ref float HeadshotMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HideViewModelWhenZoomed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L128)

```csharp
ref bool HideViewModelWhenZoomed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InaccuracyAltSoundThreshold

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L122)

```csharp
ref float InaccuracyAltSoundThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyCrouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L76)

```csharp
CFiringModeFloat InaccuracyCrouch { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### InaccuracyFire

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L86)

```csharp
CFiringModeFloat InaccuracyFire { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### InaccuracyJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L80)

```csharp
CFiringModeFloat InaccuracyJump { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### InaccuracyJumpApex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L102)

```csharp
ref float InaccuracyJumpApex { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyJumpInitial

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L100)

```csharp
ref float InaccuracyJumpInitial { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyLadder

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L84)

```csharp
CFiringModeFloat InaccuracyLadder { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### InaccuracyLand

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L82)

```csharp
CFiringModeFloat InaccuracyLand { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### InaccuracyMove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L88)

```csharp
CFiringModeFloat InaccuracyMove { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### InaccuracyPitchShift

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L120)

```csharp
ref float InaccuracyPitchShift { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyReload

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L104)

```csharp
ref float InaccuracyReload { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyStand

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L78)

```csharp
CFiringModeFloat InaccuracyStand { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### IronSightFOV

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L146)

```csharp
ref float IronSightFOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightLooseness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L150)

```csharp
ref float IronSightLooseness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightPivotForward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L148)

```csharp
ref float IronSightPivotForward { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightPullUpSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L142)

```csharp
ref float IronSightPullUpSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IronSightPutDownSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L144)

```csharp
ref float IronSightPutDownSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsFullAuto

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L64)

```csharp
ref bool IsFullAuto { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRevolver

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L52)

```csharp
ref bool IsRevolver { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KillAward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L42)

```csharp
ref int KillAward { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L72)

```csharp
CFiringModeFloat MaxSpeed { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### MeleeWeapon

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L48)

```csharp
ref bool MeleeWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Model_AG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L22)

```csharp
SchemaUntypedField Model_AG2 { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### MuzzlePos0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L27)

```csharp
ref Vector MuzzlePos0 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MuzzlePos1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L29)

```csharp
ref Vector MuzzlePos1 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L56)

```csharp
ref CGlobalSymbol Name { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### NumBullets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L66)

```csharp
ref int NumBullets { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Penetration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L158)

```csharp
ref float Penetration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Price

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L40)

```csharp
ref int Price { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PrimaryReserveAmmoMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L44)

```csharp
ref int PrimaryReserveAmmoMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Range

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L160)

```csharp
ref float Range { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RangeModifier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L162)

```csharp
ref float RangeModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoilAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L90)

```csharp
CFiringModeFloat RecoilAngle { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### RecoilAngleVariance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L92)

```csharp
CFiringModeFloat RecoilAngleVariance { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### RecoilMagnitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L94)

```csharp
CFiringModeFloat RecoilMagnitude { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### RecoilMagnitudeVariance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L96)

```csharp
CFiringModeFloat RecoilMagnitudeVariance { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### RecoilSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L114)

```csharp
ref int RecoilSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecoveryTimeCrouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L168)

```csharp
ref float RecoveryTimeCrouch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTimeCrouchFinal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L172)

```csharp
ref float RecoveryTimeCrouchFinal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTimeStand

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L170)

```csharp
ref float RecoveryTimeStand { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTimeStandFinal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L174)

```csharp
ref float RecoveryTimeStandFinal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RecoveryTransitionEndBullet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L178)

```csharp
ref int RecoveryTransitionEndBullet { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecoveryTransitionStartBullet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L176)

```csharp
ref int RecoveryTransitionStartBullet { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReloadsSingleShells

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L68)

```csharp
ref bool ReloadsSingleShells { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SecondaryReserveAmmoMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L46)

```csharp
ref int SecondaryReserveAmmoMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SilencerType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L58)

```csharp
ref CSWeaponSilencerType SilencerType { get; }
```

#### Property Value

- [CSWeaponSilencerType](/docs/api/shared/schemadefinitions/csweaponsilencertype)

### SmokeColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L182)

```csharp
ref Vector SmokeColor { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Spread

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L74)

```csharp
CFiringModeFloat Spread { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### SpreadSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L116)

```csharp
ref int SpreadSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ThrowVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L180)

```csharp
ref float ThrowVelocity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TracerFrequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L98)

```csharp
CFiringModeInt TracerFrequency { get; }
```

#### Property Value

- [CFiringModeInt](/docs/api/shared/schemadefinitions/cfiringmodeint)

### TracerParticle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L32)

```csharp
SchemaUntypedField TracerParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### UnzoomsAfterShot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L126)

```csharp
ref bool UnzoomsAfterShot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseRadioSubtitle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L124)

```csharp
string UseRadioSubtitle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WeaponCategory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L19)

```csharp
ref CSWeaponCategory WeaponCategory { get; }
```

#### Property Value

- [CSWeaponCategory](/docs/api/shared/schemadefinitions/csweaponcategory)

### WeaponType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L17)

```csharp
ref CSWeaponType WeaponType { get; }
```

#### Property Value

- [CSWeaponType](/docs/api/shared/schemadefinitions/csweapontype)

### ZoomFOV1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L132)

```csharp
ref int ZoomFOV1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomFOV2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L134)

```csharp
ref int ZoomFOV2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomLevels

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L130)

```csharp
ref int ZoomLevels { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomTime0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L136)

```csharp
ref float ZoomTime0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ZoomTime1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L138)

```csharp
ref float ZoomTime1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ZoomTime2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L140)

```csharp
ref float ZoomTime2 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

