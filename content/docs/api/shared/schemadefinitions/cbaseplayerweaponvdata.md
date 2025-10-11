---
title: CBasePlayerWeaponVData
---

```csharp
public interface CBasePlayerWeaponVData : CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CBasePlayerWeaponVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AllowFlipping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L24)

```csharp
ref bool AllowFlipping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AutoSwitchFrom** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L67)

```csharp
ref bool AutoSwitchFrom { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AutoSwitchTo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L65)

```csharp
ref bool AutoSwitchTo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **BarrelSmokeParticle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L35)

```csharp
SchemaUntypedField BarrelSmokeParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **BuiltRightHanded** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L22)

```csharp
ref bool BuiltRightHanded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **DefaultClip1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L55)

```csharp
ref int DefaultClip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DefaultClip2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L57)

```csharp
ref int DefaultClip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DropSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L71)

```csharp
ref float DropSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L45)

```csharp
ref ItemFlagTypes_t Flags { get; }
```

#### Property Value

- [ItemFlagTypes_t](/docs/api/shared/schemadefinitions/itemflagtypes_t)

### **LinkedCooldowns** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L43)

```csharp
ref bool LinkedCooldowns { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MaxClip1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L51)

```csharp
ref int MaxClip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MaxClip2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L53)

```csharp
ref int MaxClip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MuzzleAttachment** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L27)

```csharp
SchemaUntypedField MuzzleAttachment { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **MuzzleFlashParticle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L30)

```csharp
SchemaUntypedField MuzzleFlashParticle { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **MuzzleFlashParticleConfig** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L32)

```csharp
string MuzzleFlashParticleConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **MuzzleSmokeDecrementRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L41)

```csharp
ref float MuzzleSmokeDecrementRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MuzzleSmokeShotThreshold** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L37)

```csharp
ref byte MuzzleSmokeShotThreshold { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **MuzzleSmokeTimeout** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L39)

```csharp
ref float MuzzleSmokeTimeout { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Position** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L75)

```csharp
ref int Position { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PrimaryAmmoType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L47)

```csharp
AmmoIndex_t PrimaryAmmoType { get; }
```

#### Property Value

- [AmmoIndex_t](/docs/api/shared/schemadefinitions/ammoindex_t)

### **ReserveAmmoAsClips** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L59)

```csharp
ref bool ReserveAmmoAsClips { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RumbleEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L69)

```csharp
ref RumbleEffect_t RumbleEffect { get; }
```

#### Property Value

- [RumbleEffect_t](/docs/api/shared/schemadefinitions/rumbleeffect_t)

### **SecondaryAmmoType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L49)

```csharp
AmmoIndex_t SecondaryAmmoType { get; }
```

#### Property Value

- [AmmoIndex_t](/docs/api/shared/schemadefinitions/ammoindex_t)

### **ShootSounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L78)

```csharp
SchemaUntypedField ShootSounds { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **Slot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L73)

```csharp
ref int Slot { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ToolsOnlyOwnerModelName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L20)

```csharp
SchemaUntypedField ToolsOnlyOwnerModelName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **TreatAsSingleClip** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L61)

```csharp
ref bool TreatAsSingleClip { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Weight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L63)

```csharp
ref int Weight { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **WorldModel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeaponVData.cs#L17)

```csharp
SchemaUntypedField WorldModel { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

