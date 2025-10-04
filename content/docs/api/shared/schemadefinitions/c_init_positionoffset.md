---
title: C_INIT_PositionOffset
---

```csharp
public interface C_INIT_PositionOffset : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_PositionOffset>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**LocalCoords** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionOffset.cs#L22)

```csharp
ref bool LocalCoords { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OffsetMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionOffset.cs#L18)

```csharp
CPerParticleVecInput OffsetMax { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**OffsetMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionOffset.cs#L16)

```csharp
CPerParticleVecInput OffsetMin { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**Proportional** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionOffset.cs#L24)

```csharp
ref bool Proportional { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RandomnessParameters** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionOffset.cs#L26)

```csharp
CRandomNumberGeneratorParameters RandomnessParameters { get; }
```

#### Property Value

- [CRandomNumberGeneratorParameters](/docs/api/shared/schemadefinitions/crandomnumbergeneratorparameters)

**TransformInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionOffset.cs#L20)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

