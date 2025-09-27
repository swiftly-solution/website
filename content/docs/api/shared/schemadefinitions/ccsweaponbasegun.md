---
title: CCSWeaponBaseGun
---

```csharp
public interface CCSWeaponBaseGun : CCSWeaponBase, CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaClass<CCSWeaponBaseGun>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BurstShotsRemaining** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L18)

```csharp
ref int BurstShotsRemaining { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**InPrecache** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L22)

```csharp
ref bool InPrecache { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NeedsBoltAction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L24)

```csharp
ref bool NeedsBoltAction { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RevolverCylinderIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L26)

```csharp
ref int RevolverCylinderIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SilencedModelIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L20)

```csharp
ref int SilencedModelIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SkillBoltInterruptAvailable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L32)

```csharp
ref bool SkillBoltInterruptAvailable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SkillBoltLiftedFireKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L34)

```csharp
ref bool SkillBoltLiftedFireKey { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SkillReloadAvailable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L28)

```csharp
ref bool SkillReloadAvailable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SkillReloadLiftedReloadKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L30)

```csharp
ref bool SkillReloadLiftedReloadKey { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ZoomLevel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L16)

```csharp
ref int ZoomLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

**BurstShotsRemainingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L37)

```csharp
void BurstShotsRemainingUpdated()
```

**NeedsBoltActionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L38)

```csharp
void NeedsBoltActionUpdated()
```

**RevolverCylinderIdxUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L39)

```csharp
void RevolverCylinderIdxUpdated()
```

**ZoomLevelUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSWeaponBaseGun.cs#L36)

```csharp
void ZoomLevelUpdated()
```

