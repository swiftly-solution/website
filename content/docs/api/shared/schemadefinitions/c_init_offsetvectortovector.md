---
title: C_INIT_OffsetVectorToVector
---

```csharp
public interface C_INIT_OffsetVectorToVector : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_OffsetVectorToVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FieldInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_OffsetVectorToVector.cs#L17)

```csharp
ParticleAttributeIndex_t FieldInput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_OffsetVectorToVector.cs#L19)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### OutputMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_OffsetVectorToVector.cs#L23)

```csharp
ref Vector OutputMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OutputMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_OffsetVectorToVector.cs#L21)

```csharp
ref Vector OutputMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RandomnessParameters

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_OffsetVectorToVector.cs#L25)

```csharp
CRandomNumberGeneratorParameters RandomnessParameters { get; }
```

#### Property Value

- [CRandomNumberGeneratorParameters](/docs/api/shared/schemadefinitions/crandomnumbergeneratorparameters)

