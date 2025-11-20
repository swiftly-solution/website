---
title: CParticleMassCalculationParameters
---

```csharp
public interface CParticleMassCalculationParameters : ISchemaClass<CParticleMassCalculationParameters>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### MassMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L18)

```csharp
ref ParticleMassMode_t MassMode { get; }
```

#### Property Value

- [ParticleMassMode_t](/docs/api/shared/schemadefinitions/particlemassmode_t)

### NominalRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L22)

```csharp
CPerParticleFloatInput NominalRadius { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L20)

```csharp
CPerParticleFloatInput Radius { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Scale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L24)

```csharp
CPerParticleFloatInput Scale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

