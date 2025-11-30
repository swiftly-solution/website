---
title: C_OP_SetControlPointFieldFromVectorExpression
---

# Interface C_OP_SetControlPointFieldFromVectorExpression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_SetControlPointFieldFromVectorExpression : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointFieldFromVectorExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionPreEmission](/docs/api/schemadefinitions/cparticlefunctionpreemission)
- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionPreEmission>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_SetControlPointFieldFromVectorExpression>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Expression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L18)

```csharp
ref VectorFloatExpressionType_t Expression { get; }
```

#### Property Value

- [VectorFloatExpressionType_t](/docs/api/schemadefinitions/vectorfloatexpressiontype_t)

### Input1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L20)

```csharp
CParticleCollectionVecInput Input1 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

### Input2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L22)

```csharp
CParticleCollectionVecInput Input2 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

### Lerp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L24)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### OutVectorField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L30)

```csharp
ref int OutVectorField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L28)

```csharp
ref int OutputCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRemap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldFromVectorExpression.cs#L26)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/schemadefinitions/cparticleremapfloatinput)

