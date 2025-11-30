---
title: C_OP_RemapAverageScalarValuetoCP
---

# Interface C_OP_RemapAverageScalarValuetoCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_RemapAverageScalarValuetoCP : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_RemapAverageScalarValuetoCP>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionPreEmission](/docs/api/schemadefinitions/cparticlefunctionpreemission)
- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionPreEmission>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RemapAverageScalarValuetoCP>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DecimalPlaces

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L20)

```csharp
CParticleCollectionFloatInput DecimalPlaces { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### Expression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L18)

```csharp
ref SetStatisticExpressionType_t Expression { get; }
```

#### Property Value

- [SetStatisticExpressionType_t](/docs/api/schemadefinitions/setstatisticexpressiontype_t)

### Field

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L26)

```csharp
ParticleAttributeIndex_t Field { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### OutControlPointNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L22)

```csharp
ref int OutControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutVectorField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L24)

```csharp
ref int OutVectorField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRemap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L28)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/schemadefinitions/cparticleremapfloatinput)

