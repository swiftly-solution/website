---
title: C_INIT_VelocityRandom
---

```csharp
public interface C_INIT_VelocityRandom : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_VelocityRandom>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlPointNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L17)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IgnoreDT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L27)

```csharp
ref bool IgnoreDT { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LocalCoordinateSystemSpeedMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L25)

```csharp
CPerParticleVecInput LocalCoordinateSystemSpeedMax { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### LocalCoordinateSystemSpeedMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L23)

```csharp
CPerParticleVecInput LocalCoordinateSystemSpeedMin { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### RandomnessParameters

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L29)

```csharp
CRandomNumberGeneratorParameters RandomnessParameters { get; }
```

#### Property Value

- [CRandomNumberGeneratorParameters](/docs/api/shared/schemadefinitions/crandomnumbergeneratorparameters)

### SpeedMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L21)

```csharp
CPerParticleFloatInput SpeedMax { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### SpeedMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRandom.cs#L19)

```csharp
CPerParticleFloatInput SpeedMin { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

