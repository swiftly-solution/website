---
title: C_OP_LerpToInitialPosition
---

# Interface C_OP_LerpToInitialPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_LerpToInitialPosition : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_LerpToInitialPosition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_LerpToInitialPosition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CacheField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L22)

```csharp
ParticleAttributeIndex_t CacheField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### ControlPointNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L18)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Interpolation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L20)

```csharp
CPerParticleFloatInput Interpolation { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### Scale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L24)

```csharp
CParticleCollectionFloatInput Scale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### Scale1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L26)

```csharp
CParticleCollectionVecInput Scale1 { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

