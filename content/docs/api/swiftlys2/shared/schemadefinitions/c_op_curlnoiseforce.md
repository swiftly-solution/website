---
title: C_OP_CurlNoiseForce
---

```csharp
public interface C_OP_CurlNoiseForce : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_CurlNoiseForce>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**NoiseFreq** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L18)

```csharp
CPerParticleVecInput NoiseFreq { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**NoiseScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L20)

```csharp
CPerParticleVecInput NoiseScale { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**NoiseType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L16)

```csharp
ref ParticleDirectionNoiseType_t NoiseType { get; }
```

#### Property Value

- [ParticleDirectionNoiseType_t](/docs/api/shared/schemadefinitions/particledirectionnoisetype_t)

**Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L22)

```csharp
CPerParticleVecInput Offset { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**OffsetRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L24)

```csharp
CPerParticleVecInput OffsetRate { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

**WorleyJitter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L28)

```csharp
CPerParticleFloatInput WorleyJitter { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**WorleySeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_CurlNoiseForce.cs#L26)

```csharp
CPerParticleFloatInput WorleySeed { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

