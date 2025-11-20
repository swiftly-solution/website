---
title: C_OP_SetControlPointToVectorExpression
---

```csharp
public interface C_OP_SetControlPointToVectorExpression : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointToVectorExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Expression

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToVectorExpression.cs#L18)

```csharp
ref VectorExpressionType_t Expression { get; }
```

#### Property Value

- [VectorExpressionType_t](/docs/api/shared/schemadefinitions/vectorexpressiontype_t)

### Input1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToVectorExpression.cs#L22)

```csharp
CParticleCollectionVecInput Input1 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### Input2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToVectorExpression.cs#L24)

```csharp
CParticleCollectionVecInput Input2 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### Lerp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToVectorExpression.cs#L26)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### NormalizedOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToVectorExpression.cs#L28)

```csharp
ref bool NormalizedOutput { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToVectorExpression.cs#L20)

```csharp
ref int OutputCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

