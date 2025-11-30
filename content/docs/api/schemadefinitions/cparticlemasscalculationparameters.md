---
title: CParticleMassCalculationParameters
---

# Interface CParticleMassCalculationParameters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CParticleMassCalculationParameters : ISchemaClass<CParticleMassCalculationParameters>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CParticleMassCalculationParameters>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MassMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L18)

```csharp
ref ParticleMassMode_t MassMode { get; }
```

#### Property Value

- [ParticleMassMode_t](/docs/api/schemadefinitions/particlemassmode_t)

### NominalRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L22)

```csharp
CPerParticleFloatInput NominalRadius { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### Radius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L20)

```csharp
CPerParticleFloatInput Radius { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### Scale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleMassCalculationParameters.cs#L24)

```csharp
CPerParticleFloatInput Scale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

