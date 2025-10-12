---
title: C_OP_SetAttributeToScalarExpression
---

```csharp
public interface C_OP_SetAttributeToScalarExpression : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetAttributeToScalarExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Expression

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetAttributeToScalarExpression.cs#L16)

```csharp
ref ScalarExpressionType_t Expression { get; }
```

#### Property Value

- [ScalarExpressionType_t](/docs/api/shared/schemadefinitions/scalarexpressiontype_t)

### Input1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetAttributeToScalarExpression.cs#L18)

```csharp
CPerParticleFloatInput Input1 { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Input2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetAttributeToScalarExpression.cs#L20)

```csharp
CPerParticleFloatInput Input2 { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### OutputField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetAttributeToScalarExpression.cs#L24)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### OutputRemap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetAttributeToScalarExpression.cs#L22)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/shared/schemadefinitions/cparticleremapfloatinput)

### SetMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetAttributeToScalarExpression.cs#L26)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

