---
title: C_OP_DistanceCull
---

```csharp
public interface C_OP_DistanceCull : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_DistanceCull>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Attribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceCull.cs#L25)

```csharp
ParticleAttributeIndex_t Attribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### ControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceCull.cs#L17)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CullInside

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceCull.cs#L23)

```csharp
ref bool CullInside { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceCull.cs#L21)

```csharp
CParticleCollectionFloatInput Distance { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### PointOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_DistanceCull.cs#L19)

```csharp
ref Vector PointOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

