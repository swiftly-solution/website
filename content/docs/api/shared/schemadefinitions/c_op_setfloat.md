---
title: C_OP_SetFloat
---

```csharp
public interface C_OP_SetFloat : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetFloat>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### InputValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloat.cs#L18)

```csharp
CPerParticleFloatInput InputValue { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Lerp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloat.cs#L24)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### OutputField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloat.cs#L20)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### SetMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFloat.cs#L22)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

