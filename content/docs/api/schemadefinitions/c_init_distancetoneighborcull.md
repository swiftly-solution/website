---
title: C_INIT_DistanceToNeighborCull
---

# Interface C_INIT_DistanceToNeighborCull

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_INIT_DistanceToNeighborCull : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_DistanceToNeighborCull>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionInitializer](/docs/api/schemadefinitions/cparticlefunctioninitializer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionInitializer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_INIT_DistanceToNeighborCull>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Distance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L18)

```csharp
CPerParticleFloatInput Distance { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### FieldModify

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L24)

```csharp
ParticleAttributeIndex_t FieldModify { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### IncludeRadii

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L20)

```csharp
ref bool IncludeRadii { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LifespanOverlap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L22)

```csharp
CPerParticleFloatInput LifespanOverlap { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### Modify

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L26)

```csharp
CPerParticleFloatInput Modify { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### SetMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L28)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/schemadefinitions/particlesetmethod_t)

### UseNeighbor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L30)

```csharp
ref bool UseNeighbor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

