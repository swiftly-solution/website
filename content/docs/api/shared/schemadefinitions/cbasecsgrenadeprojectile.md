---
title: CBaseCSGrenadeProjectile
---

```csharp
public interface CBaseCSGrenadeProjectile : CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Bounces

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L21)

```csharp
ref int Bounces { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DetonationRecorded

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L33)

```csharp
ref bool DetonationRecorded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExplodeEffectIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L23)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ExplodeEffectIndex { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### ExplodeEffectOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L27)

```csharp
ref Vector ExplodeEffectOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ExplodeEffectTickBegin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L25)

```csharp
ref int ExplodeEffectTickBegin { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GrenadeSpin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L42)

```csharp
SchemaUntypedField GrenadeSpin { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### HasEverHitEnemy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L48)

```csharp
ref bool HasEverHitEnemy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitialPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L17)

```csharp
ref Vector InitialPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### InitialVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L19)

```csharp
ref Vector InitialVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ItemIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L35)

```csharp
ref ushort ItemIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### LastBounceSoundTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L39)

```csharp
GameTime_t LastBounceSoundTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastHitSurfaceNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L44)

```csharp
ref Vector LastHitSurfaceNormal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OGSExtraFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L31)

```csharp
ref byte OGSExtraFlags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### OriginalSpawnLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L37)

```csharp
ref Vector OriginalSpawnLocation { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SpawnTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L29)

```csharp
GameTime_t SpawnTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TicksAtZeroVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L46)

```csharp
ref int TicksAtZeroVelocity { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### BouncesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L52)

```csharp
void BouncesUpdated()
```

### ExplodeEffectIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L53)

```csharp
void ExplodeEffectIndexUpdated()
```

### ExplodeEffectOriginUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L55)

```csharp
void ExplodeEffectOriginUpdated()
```

### ExplodeEffectTickBeginUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L54)

```csharp
void ExplodeEffectTickBeginUpdated()
```

### InitialPositionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L50)

```csharp
void InitialPositionUpdated()
```

### InitialVelocityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenadeProjectile.cs#L51)

```csharp
void InitialVelocityUpdated()
```

