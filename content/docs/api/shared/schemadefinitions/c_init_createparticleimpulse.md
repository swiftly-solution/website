---
title: C_INIT_CreateParticleImpulse
---

```csharp
public interface C_INIT_CreateParticleImpulse : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_CreateParticleImpulse>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FalloffFunction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_CreateParticleImpulse.cs#L21)

```csharp
ref ParticleFalloffFunction_t FalloffFunction { get; }
```

#### Property Value

- [ParticleFalloffFunction_t](/docs/api/shared/schemadefinitions/particlefallofffunction_t)

### ImpulseType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_CreateParticleImpulse.cs#L25)

```csharp
ref ParticleImpulseType_t ImpulseType { get; }
```

#### Property Value

- [ParticleImpulseType_t](/docs/api/shared/schemadefinitions/particleimpulsetype_t)

### InputFalloffExp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_CreateParticleImpulse.cs#L23)

```csharp
CPerParticleFloatInput InputFalloffExp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### InputMagnitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_CreateParticleImpulse.cs#L19)

```csharp
CPerParticleFloatInput InputMagnitude { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### InputRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_CreateParticleImpulse.cs#L17)

```csharp
CPerParticleFloatInput InputRadius { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

