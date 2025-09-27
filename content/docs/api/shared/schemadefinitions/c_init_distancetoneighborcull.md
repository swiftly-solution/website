---
title: C_INIT_DistanceToNeighborCull
---

```csharp
public interface C_INIT_DistanceToNeighborCull : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_DistanceToNeighborCull>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Distance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L16)

```csharp
CPerParticleFloatInput Distance { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**FieldModify** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L22)

```csharp
ParticleAttributeIndex_t FieldModify { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**IncludeRadii** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L18)

```csharp
ref bool IncludeRadii { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LifespanOverlap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L20)

```csharp
CPerParticleFloatInput LifespanOverlap { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**Modify** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L24)

```csharp
CPerParticleFloatInput Modify { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**SetMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L26)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

**UseNeighbor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_DistanceToNeighborCull.cs#L28)

```csharp
ref bool UseNeighbor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

