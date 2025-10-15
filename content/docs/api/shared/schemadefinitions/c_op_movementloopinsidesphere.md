---
title: C_OP_MovementLoopInsideSphere
---

```csharp
public interface C_OP_MovementLoopInsideSphere : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_MovementLoopInsideSphere>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementLoopInsideSphere.cs#L17)

```csharp
ref int CP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DistSqrAttr

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementLoopInsideSphere.cs#L23)

```csharp
ParticleAttributeIndex_t DistSqrAttr { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementLoopInsideSphere.cs#L19)

```csharp
CParticleCollectionFloatInput Distance { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### Scale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementLoopInsideSphere.cs#L21)

```csharp
CParticleCollectionVecInput Scale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

