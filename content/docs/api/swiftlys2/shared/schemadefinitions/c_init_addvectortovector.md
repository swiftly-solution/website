---
title: C_INIT_AddVectorToVector
---

```csharp
public interface C_INIT_AddVectorToVector : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_AddVectorToVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**FieldInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_AddVectorToVector.cs#L20)

```csharp
ParticleAttributeIndex_t FieldInput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_AddVectorToVector.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**OffsetMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_AddVectorToVector.cs#L24)

```csharp
ref Vector OffsetMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**OffsetMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_AddVectorToVector.cs#L22)

```csharp
ref Vector OffsetMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**RandomnessParameters** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_AddVectorToVector.cs#L26)

```csharp
CRandomNumberGeneratorParameters RandomnessParameters { get; }
```

#### Property Value

- [CRandomNumberGeneratorParameters](/docs/api/shared/schemadefinitions/crandomnumbergeneratorparameters)

**Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_AddVectorToVector.cs#L16)

```csharp
ref Vector Scale { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

