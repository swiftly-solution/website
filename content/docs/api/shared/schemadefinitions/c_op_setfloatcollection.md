---
title: C_OP_SetFloatCollection
---

```csharp
public interface C_OP_SetFloatCollection : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetFloatCollection>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### InputValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloatCollection.cs#L18)

```csharp
CParticleCollectionFloatInput InputValue { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### Lerp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloatCollection.cs#L24)

```csharp
CParticleCollectionFloatInput Lerp { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### OutputField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloatCollection.cs#L20)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### SetMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloatCollection.cs#L22)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

