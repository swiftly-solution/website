---
title: C_OP_SetControlPointFieldToScalarExpression
---

# Interface C_OP_SetControlPointFieldToScalarExpression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_SetControlPointFieldToScalarExpression : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointFieldToScalarExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionPreEmission](/docs/api/schemadefinitions/cparticlefunctionpreemission)
- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionPreEmission>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_SetControlPointFieldToScalarExpression>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Expression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L18)

```csharp
ref ScalarExpressionType_t Expression { get; }
```

#### Property Value

- [ScalarExpressionType_t](/docs/api/schemadefinitions/scalarexpressiontype_t)

### Input1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L20)

```csharp
CParticleCollectionFloatInput Input1 { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### Input2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L22)

```csharp
CParticleCollectionFloatInput Input2 { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### OutVectorField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L28)

```csharp
ref int OutVectorField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L26)

```csharp
ref int OutputCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRemap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointFieldToScalarExpression.cs#L24)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/schemadefinitions/cparticleremapfloatinput)

