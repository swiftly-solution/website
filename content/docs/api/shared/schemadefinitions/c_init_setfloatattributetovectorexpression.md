---
title: C_INIT_SetFloatAttributeToVectorExpression
---

```csharp
public interface C_INIT_SetFloatAttributeToVectorExpression : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_SetFloatAttributeToVectorExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Expression** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetFloatAttributeToVectorExpression.cs#L16)

```csharp
ref VectorFloatExpressionType_t Expression { get; }
```

#### Property Value

- [VectorFloatExpressionType_t](/docs/api/shared/schemadefinitions/vectorfloatexpressiontype_t)

**Input1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetFloatAttributeToVectorExpression.cs#L18)

```csharp
CPerParticleVecInput Input1 { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**Input2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetFloatAttributeToVectorExpression.cs#L20)

```csharp
CPerParticleVecInput Input2 { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**OutputField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetFloatAttributeToVectorExpression.cs#L24)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**OutputRemap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetFloatAttributeToVectorExpression.cs#L22)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/shared/schemadefinitions/cparticleremapfloatinput)

**SetMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetFloatAttributeToVectorExpression.cs#L26)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

