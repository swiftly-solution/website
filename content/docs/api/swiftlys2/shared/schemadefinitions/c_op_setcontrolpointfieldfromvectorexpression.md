---
title: C_OP_SetControlPointFieldFromVectorExpression
---

```csharp
public interface C_OP_SetControlPointFieldFromVectorExpression : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointFieldFromVectorExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Expression** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L16)

```csharp
ref VectorFloatExpressionType_t Expression { get; }
```

#### Property Value

- [VectorFloatExpressionType_t](/docs/api/shared/schemadefinitions/vectorfloatexpressiontype_t)

**Input1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L18)

```csharp
CParticleCollectionVecInput Input1 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

**Input2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L20)

```csharp
CParticleCollectionVecInput Input2 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

**Lerp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L22)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**OutVectorField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L28)

```csharp
ref int OutVectorField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**OutputCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L26)

```csharp
ref int OutputCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**OutputRemap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L24)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/shared/schemadefinitions/cparticleremapfloatinput)

