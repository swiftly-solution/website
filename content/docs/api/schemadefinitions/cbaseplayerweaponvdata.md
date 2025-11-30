---
title: CBasePlayerWeaponVData
---

# Interface CBasePlayerWeaponVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBasePlayerWeaponVData : CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CBasePlayerWeaponVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CEntitySubclassVDataBase](/docs/api/schemadefinitions/centitysubclassvdatabase)
- [ISchemaClass<CEntitySubclassVDataBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerWeaponVData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AllowFlipping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L26)

```csharp
ref bool AllowFlipping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoSwitchFrom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L71)

```csharp
ref bool AutoSwitchFrom { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoSwitchTo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L69)

```csharp
ref bool AutoSwitchTo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BarrelSmokeParticle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L37)

```csharp
SchemaUntypedField BarrelSmokeParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### BuiltRightHanded

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L24)

```csharp
ref bool BuiltRightHanded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DefaultClip1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L57)

```csharp
ref int DefaultClip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefaultClip2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L59)

```csharp
ref int DefaultClip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DropSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L75)

```csharp
ref float DropSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L47)

```csharp
ref ItemFlagTypes_t Flags { get; }
```

#### Property Value

- [ItemFlagTypes_t](/docs/api/schemadefinitions/itemflagtypes_t)

### KeepLoadedAmmo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L65)

```csharp
ref bool KeepLoadedAmmo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkedCooldowns

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L45)

```csharp
ref bool LinkedCooldowns { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxClip1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L53)

```csharp
ref int MaxClip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxClip2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L55)

```csharp
ref int MaxClip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MuzzleAttachment

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L29)

```csharp
SchemaUntypedField MuzzleAttachment { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MuzzleFlashParticle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L32)

```csharp
SchemaUntypedField MuzzleFlashParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MuzzleFlashParticleConfig

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L34)

```csharp
string MuzzleFlashParticleConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MuzzleSmokeDecrementRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L43)

```csharp
ref float MuzzleSmokeDecrementRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MuzzleSmokeShotThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L39)

```csharp
ref byte MuzzleSmokeShotThreshold { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MuzzleSmokeTimeout

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L41)

```csharp
ref float MuzzleSmokeTimeout { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Position

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L79)

```csharp
ref int Position { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PrimaryAmmoType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L49)

```csharp
AmmoIndex_t PrimaryAmmoType { get; }
```

#### Property Value

- [AmmoIndex_t](/docs/api/schemadefinitions/ammoindex_t)

### ReserveAmmoAsClips

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L61)

```csharp
ref bool ReserveAmmoAsClips { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RumbleEffect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L73)

```csharp
ref RumbleEffect_t RumbleEffect { get; }
```

#### Property Value

- [RumbleEffect_t](/docs/api/schemadefinitions/rumbleeffect_t)

### SecondaryAmmoType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L51)

```csharp
AmmoIndex_t SecondaryAmmoType { get; }
```

#### Property Value

- [AmmoIndex_t](/docs/api/schemadefinitions/ammoindex_t)

### ShootSounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L82)

```csharp
SchemaUntypedField ShootSounds { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Slot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L77)

```csharp
ref int Slot { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToolsOnlyOwnerModelName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L22)

```csharp
SchemaUntypedField ToolsOnlyOwnerModelName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### TreatAsSingleClip

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L63)

```csharp
ref bool TreatAsSingleClip { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L67)

```csharp
ref int Weight { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorldModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L19)

```csharp
SchemaUntypedField WorldModel { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

