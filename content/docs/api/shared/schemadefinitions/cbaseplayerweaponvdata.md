---
title: CBasePlayerWeaponVData
---

```csharp
public interface CBasePlayerWeaponVData : CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CBasePlayerWeaponVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowFlipping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L25)

```csharp
ref bool AllowFlipping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoSwitchFrom

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L70)

```csharp
ref bool AutoSwitchFrom { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoSwitchTo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L68)

```csharp
ref bool AutoSwitchTo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BarrelSmokeParticle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L36)

```csharp
SchemaUntypedField BarrelSmokeParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### BuiltRightHanded

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L23)

```csharp
ref bool BuiltRightHanded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DefaultClip1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L56)

```csharp
ref int DefaultClip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefaultClip2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L58)

```csharp
ref int DefaultClip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DropSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L74)

```csharp
ref float DropSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L46)

```csharp
ref ItemFlagTypes_t Flags { get; }
```

#### Property Value

- [ItemFlagTypes_t](/docs/api/shared/schemadefinitions/itemflagtypes_t)

### KeepLoadedAmmo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L64)

```csharp
ref bool KeepLoadedAmmo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkedCooldowns

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L44)

```csharp
ref bool LinkedCooldowns { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxClip1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L52)

```csharp
ref int MaxClip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxClip2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L54)

```csharp
ref int MaxClip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MuzzleAttachment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L28)

```csharp
SchemaUntypedField MuzzleAttachment { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### MuzzleFlashParticle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L31)

```csharp
SchemaUntypedField MuzzleFlashParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### MuzzleFlashParticleConfig

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L33)

```csharp
string MuzzleFlashParticleConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MuzzleSmokeDecrementRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L42)

```csharp
ref float MuzzleSmokeDecrementRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MuzzleSmokeShotThreshold

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L38)

```csharp
ref byte MuzzleSmokeShotThreshold { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MuzzleSmokeTimeout

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L40)

```csharp
ref float MuzzleSmokeTimeout { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Position

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L78)

```csharp
ref int Position { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PrimaryAmmoType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L48)

```csharp
AmmoIndex_t PrimaryAmmoType { get; }
```

#### Property Value

- [AmmoIndex_t](/docs/api/shared/schemadefinitions/ammoindex_t)

### ReserveAmmoAsClips

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L60)

```csharp
ref bool ReserveAmmoAsClips { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RumbleEffect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L72)

```csharp
ref RumbleEffect_t RumbleEffect { get; }
```

#### Property Value

- [RumbleEffect_t](/docs/api/shared/schemadefinitions/rumbleeffect_t)

### SecondaryAmmoType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L50)

```csharp
AmmoIndex_t SecondaryAmmoType { get; }
```

#### Property Value

- [AmmoIndex_t](/docs/api/shared/schemadefinitions/ammoindex_t)

### ShootSounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L81)

```csharp
SchemaUntypedField ShootSounds { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Slot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L76)

```csharp
ref int Slot { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToolsOnlyOwnerModelName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L21)

```csharp
SchemaUntypedField ToolsOnlyOwnerModelName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### TreatAsSingleClip

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L62)

```csharp
ref bool TreatAsSingleClip { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L66)

```csharp
ref int Weight { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorldModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L18)

```csharp
SchemaUntypedField WorldModel { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

