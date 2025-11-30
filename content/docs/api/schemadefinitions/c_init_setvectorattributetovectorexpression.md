---
title: C_INIT_SetVectorAttributeToVectorExpression
---

# Interface C_INIT_SetVectorAttributeToVectorExpression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_INIT_SetVectorAttributeToVectorExpression : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_SetVectorAttributeToVectorExpression>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionInitializer](/docs/api/schemadefinitions/cparticlefunctioninitializer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionInitializer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_INIT_SetVectorAttributeToVectorExpression>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Expression

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L18)

```csharp
ref VectorExpressionType_t Expression { get; }
```

#### Property Value

- [VectorExpressionType_t](/docs/api/schemadefinitions/vectorexpressiontype_t)

### Input1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L20)

```csharp
CPerParticleVecInput Input1 { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/schemadefinitions/cperparticlevecinput)

### Input2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L22)

```csharp
CPerParticleVecInput Input2 { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/schemadefinitions/cperparticlevecinput)

### Lerp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L24)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### NormalizedOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L30)

```csharp
ref bool NormalizedOutput { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L26)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### SetMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetVectorAttributeToVectorExpression.cs#L28)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/schemadefinitions/particlesetmethod_t)

