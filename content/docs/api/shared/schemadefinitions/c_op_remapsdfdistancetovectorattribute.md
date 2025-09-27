---
title: C_OP_RemapSDFDistanceToVectorAttribute
---

```csharp
public interface C_OP_RemapSDFDistanceToVectorAttribute : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapSDFDistanceToVectorAttribute>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**MaxDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L22)

```csharp
CParticleCollectionFloatInput MaxDistance { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**MinDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L20)

```csharp
CParticleCollectionFloatInput MinDistance { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**ValueAboveMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L30)

```csharp
ref Vector ValueAboveMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**ValueAtMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L28)

```csharp
ref Vector ValueAtMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**ValueAtMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L26)

```csharp
ref Vector ValueAtMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**ValueBelowMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L24)

```csharp
ref Vector ValueBelowMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**VectorFieldInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L18)

```csharp
ParticleAttributeIndex_t VectorFieldInput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**VectorFieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapSDFDistanceToVectorAttribute.cs#L16)

```csharp
ParticleAttributeIndex_t VectorFieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

