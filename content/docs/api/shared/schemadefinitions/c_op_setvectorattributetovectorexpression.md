---
title: C_OP_SetVectorAttributeToVectorExpression
---

```csharp
public interface C_OP_SetVectorAttributeToVectorExpression : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetVectorAttributeToVectorExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Expression

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L16)

```csharp
ref VectorExpressionType_t Expression { get; }
```

#### Property Value

- [VectorExpressionType_t](/docs/api/shared/schemadefinitions/vectorexpressiontype_t)

### Input1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L18)

```csharp
CPerParticleVecInput Input1 { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### Input2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L20)

```csharp
CPerParticleVecInput Input2 { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### Lerp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L22)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### NormalizedOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L28)

```csharp
ref bool NormalizedOutput { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L24)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### SetMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVectorAttributeToVectorExpression.cs#L26)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

