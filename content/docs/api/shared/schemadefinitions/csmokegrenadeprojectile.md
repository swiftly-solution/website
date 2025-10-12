---
title: CSmokeGrenadeProjectile
---

```csharp
public interface CSmokeGrenadeProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CSmokeGrenadeProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DidGroundScorch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L38)

```csharp
ref bool DidGroundScorch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DidSmokeEffect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L18)

```csharp
ref bool DidSmokeEffect { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExplodeFromInferno

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L36)

```csharp
ref bool ExplodeFromInferno { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FllastSimulationTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L34)

```csharp
GameTime_t FllastSimulationTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastBounce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L32)

```csharp
GameTime_t LastBounce { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### RandomSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L20)

```csharp
ref int RandomSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SmokeColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L22)

```csharp
ref Vector SmokeColor { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SmokeDetonationPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L24)

```csharp
ref Vector SmokeDetonationPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SmokeEffectTickBegin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L16)

```csharp
ref int SmokeEffectTickBegin { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoxelFrameData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L26)

```csharp
ref CUtlVector<byte> VoxelFrameData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VoxelFrameDataSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L28)

```csharp
ref int VoxelFrameDataSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoxelUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L30)

```csharp
ref int VoxelUpdate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### DidSmokeEffectUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L41)

```csharp
void DidSmokeEffectUpdated()
```

### RandomSeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L42)

```csharp
void RandomSeedUpdated()
```

### SmokeColorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L43)

```csharp
void SmokeColorUpdated()
```

### SmokeDetonationPosUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L44)

```csharp
void SmokeDetonationPosUpdated()
```

### SmokeEffectTickBeginUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L40)

```csharp
void SmokeEffectTickBeginUpdated()
```

### VoxelFrameDataSizeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L46)

```csharp
void VoxelFrameDataSizeUpdated()
```

### VoxelFrameDataUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L45)

```csharp
void VoxelFrameDataUpdated()
```

### VoxelUpdateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L47)

```csharp
void VoxelUpdateUpdated()
```

