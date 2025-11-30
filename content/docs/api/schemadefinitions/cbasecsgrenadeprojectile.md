---
title: CBaseCSGrenadeProjectile
---

# Interface CBaseCSGrenadeProjectile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseCSGrenadeProjectile : CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseGrenade](/docs/api/schemadefinitions/cbasegrenade)
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
- [ISchemaClass<CBaseGrenade>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseCSGrenadeProjectile>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Bounces

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L22)

```csharp
ref int Bounces { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DetonationRecorded

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L34)

```csharp
ref bool DetonationRecorded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExplodeEffectIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L24)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ExplodeEffectIndex { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### ExplodeEffectOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L28)

```csharp
ref Vector ExplodeEffectOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ExplodeEffectTickBegin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L26)

```csharp
ref int ExplodeEffectTickBegin { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GrenadeSpin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L43)

```csharp
SchemaUntypedField GrenadeSpin { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### HasEverHitEnemy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L49)

```csharp
ref bool HasEverHitEnemy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitialPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L18)

```csharp
ref Vector InitialPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### InitialVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L20)

```csharp
ref Vector InitialVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ItemIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L36)

```csharp
ref ushort ItemIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### LastBounceSoundTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L40)

```csharp
GameTime_t LastBounceSoundTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastHitSurfaceNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L45)

```csharp
ref Vector LastHitSurfaceNormal { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OGSExtraFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L32)

```csharp
ref byte OGSExtraFlags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### OriginalSpawnLocation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L38)

```csharp
ref Vector OriginalSpawnLocation { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SpawnTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L30)

```csharp
GameTime_t SpawnTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TicksAtZeroVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L47)

```csharp
ref int TicksAtZeroVelocity { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### BouncesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L53)

```csharp
void BouncesUpdated()
```

### ExplodeEffectIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L54)

```csharp
void ExplodeEffectIndexUpdated()
```

### ExplodeEffectOriginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L56)

```csharp
void ExplodeEffectOriginUpdated()
```

### ExplodeEffectTickBeginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L55)

```csharp
void ExplodeEffectTickBeginUpdated()
```

### InitialPositionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L51)

```csharp
void InitialPositionUpdated()
```

### InitialVelocityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L52)

```csharp
void InitialVelocityUpdated()
```

