---
title: CCSWeaponBaseVData
---

```csharp
public interface CCSWeaponBaseVData : CBasePlayerWeaponVData, CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CBasePlayerWeaponVData>, ISchemaClass<CCSWeaponBaseVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AnimClass** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L179)

```csharp
ref CGlobalSymbol AnimClass { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **AnimSkeleton** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L24)

```csharp
SchemaUntypedField AnimSkeleton { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **ArmorRatio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L151)

```csharp
ref float ArmorRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AttackMovespeedFactor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L113)

```csharp
ref float AttackMovespeedFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CannotShootUnderwater** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L53)

```csharp
ref bool CannotShootUnderwater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CrosshairDeltaDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L61)

```csharp
ref int CrosshairDeltaDistance { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CrosshairMinDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L59)

```csharp
ref int CrosshairMinDistance { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CycleTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L69)

```csharp
CFiringModeFloat CycleTime { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **Damage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L147)

```csharp
ref int Damage { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DefaultLoadoutSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L37)

```csharp
ref loadout_slot_t DefaultLoadoutSlot { get; }
```

#### Property Value

- [loadout_slot_t](/docs/api/shared/schemadefinitions/loadout_slot_t)

### **DeployDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L105)

```csharp
ref float DeployDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DisallowAttackAfterReloadStartDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L107)

```csharp
ref float DisallowAttackAfterReloadStartDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FlinchVelocityModifierLarge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L159)

```csharp
ref float FlinchVelocityModifierLarge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FlinchVelocityModifierSmall** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L161)

```csharp
ref float FlinchVelocityModifierSmall { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GearSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L33)

```csharp
ref gear_slot_t GearSlot { get; }
```

#### Property Value

- [gear_slot_t](/docs/api/shared/schemadefinitions/gear_slot_t)

### **GearSlotPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L35)

```csharp
ref int GearSlotPosition { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HasBurstMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L49)

```csharp
ref bool HasBurstMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HeadshotMultiplier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L149)

```csharp
ref float HeadshotMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **HideViewModelWhenZoomed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L123)

```csharp
ref bool HideViewModelWhenZoomed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **InaccuracyAltSoundThreshold** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L117)

```csharp
ref float InaccuracyAltSoundThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InaccuracyCrouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L75)

```csharp
CFiringModeFloat InaccuracyCrouch { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **InaccuracyFire** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L85)

```csharp
CFiringModeFloat InaccuracyFire { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **InaccuracyJump** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L79)

```csharp
CFiringModeFloat InaccuracyJump { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **InaccuracyJumpApex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L101)

```csharp
ref float InaccuracyJumpApex { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InaccuracyJumpInitial** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L99)

```csharp
ref float InaccuracyJumpInitial { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InaccuracyLadder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L83)

```csharp
CFiringModeFloat InaccuracyLadder { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **InaccuracyLand** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L81)

```csharp
CFiringModeFloat InaccuracyLand { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **InaccuracyMove** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L87)

```csharp
CFiringModeFloat InaccuracyMove { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **InaccuracyPitchShift** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L115)

```csharp
ref float InaccuracyPitchShift { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InaccuracyReload** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L103)

```csharp
ref float InaccuracyReload { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InaccuracyStand** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L77)

```csharp
CFiringModeFloat InaccuracyStand { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **IronSightFOV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L141)

```csharp
ref float IronSightFOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IronSightLooseness** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L145)

```csharp
ref float IronSightLooseness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IronSightPivotForward** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L143)

```csharp
ref float IronSightPivotForward { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IronSightPullUpSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L137)

```csharp
ref float IronSightPullUpSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IronSightPutDownSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L139)

```csharp
ref float IronSightPutDownSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IsFullAuto** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L63)

```csharp
ref bool IsFullAuto { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsRevolver** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L51)

```csharp
ref bool IsRevolver { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **KillAward** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L41)

```csharp
ref int KillAward { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MaxSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L71)

```csharp
CFiringModeFloat MaxSpeed { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **MeleeWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L47)

```csharp
ref bool MeleeWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Model_AG2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L21)

```csharp
SchemaUntypedField Model_AG2 { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **MuzzlePos0** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L26)

```csharp
ref Vector MuzzlePos0 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MuzzlePos1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L28)

```csharp
ref Vector MuzzlePos1 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L55)

```csharp
ref CGlobalSymbol Name { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **NumBullets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L65)

```csharp
ref int NumBullets { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Penetration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L153)

```csharp
ref float Penetration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Price** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L39)

```csharp
ref int Price { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PrimaryReserveAmmoMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L43)

```csharp
ref int PrimaryReserveAmmoMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Range** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L155)

```csharp
ref float Range { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RangeModifier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L157)

```csharp
ref float RangeModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RecoilAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L89)

```csharp
CFiringModeFloat RecoilAngle { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **RecoilAngleVariance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L91)

```csharp
CFiringModeFloat RecoilAngleVariance { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **RecoilMagnitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L93)

```csharp
CFiringModeFloat RecoilMagnitude { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **RecoilMagnitudeVariance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L95)

```csharp
CFiringModeFloat RecoilMagnitudeVariance { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **RecoilSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L109)

```csharp
ref int RecoilSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RecoveryTimeCrouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L163)

```csharp
ref float RecoveryTimeCrouch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RecoveryTimeCrouchFinal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L167)

```csharp
ref float RecoveryTimeCrouchFinal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RecoveryTimeStand** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L165)

```csharp
ref float RecoveryTimeStand { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RecoveryTimeStandFinal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L169)

```csharp
ref float RecoveryTimeStandFinal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RecoveryTransitionEndBullet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L173)

```csharp
ref int RecoveryTransitionEndBullet { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RecoveryTransitionStartBullet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L171)

```csharp
ref int RecoveryTransitionStartBullet { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ReloadsSingleShells** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L67)

```csharp
ref bool ReloadsSingleShells { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SecondaryReserveAmmoMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L45)

```csharp
ref int SecondaryReserveAmmoMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SilencerType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L57)

```csharp
ref CSWeaponSilencerType SilencerType { get; }
```

#### Property Value

- [CSWeaponSilencerType](/docs/api/shared/schemadefinitions/csweaponsilencertype)

### **SmokeColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L177)

```csharp
ref Vector SmokeColor { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Spread** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L73)

```csharp
CFiringModeFloat Spread { get; }
```

#### Property Value

- [CFiringModeFloat](/docs/api/shared/schemadefinitions/cfiringmodefloat)

### **SpreadSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L111)

```csharp
ref int SpreadSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ThrowVelocity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L175)

```csharp
ref float ThrowVelocity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TracerFrequency** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L97)

```csharp
CFiringModeInt TracerFrequency { get; }
```

#### Property Value

- [CFiringModeInt](/docs/api/shared/schemadefinitions/cfiringmodeint)

### **TracerParticle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L31)

```csharp
SchemaUntypedField TracerParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **UnzoomsAfterShot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L121)

```csharp
ref bool UnzoomsAfterShot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **UseRadioSubtitle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L119)

```csharp
string UseRadioSubtitle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **WeaponCategory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L18)

```csharp
ref CSWeaponCategory WeaponCategory { get; }
```

#### Property Value

- [CSWeaponCategory](/docs/api/shared/schemadefinitions/csweaponcategory)

### **WeaponType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L16)

```csharp
ref CSWeaponType WeaponType { get; }
```

#### Property Value

- [CSWeaponType](/docs/api/shared/schemadefinitions/csweapontype)

### **ZoomFOV1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L127)

```csharp
ref int ZoomFOV1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ZoomFOV2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L129)

```csharp
ref int ZoomFOV2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ZoomLevels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L125)

```csharp
ref int ZoomLevels { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ZoomTime0** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L131)

```csharp
ref float ZoomTime0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ZoomTime1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L133)

```csharp
ref float ZoomTime1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ZoomTime2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseVData.cs#L135)

```csharp
ref float ZoomTime2 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

