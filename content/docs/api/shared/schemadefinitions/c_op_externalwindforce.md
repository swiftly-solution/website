---
title: C_OP_ExternalWindForce
---

```csharp
public interface C_OP_ExternalWindForce : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_ExternalWindForce>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BuoyancyForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L37)

```csharp
CPerParticleVecInput BuoyancyForce { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### DampenNearWaterPlane

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L25)

```csharp
ref bool DampenNearWaterPlane { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GravityForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L29)

```csharp
CPerParticleVecInput GravityForce { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### LocalBuoyancyScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L35)

```csharp
CPerParticleFloatInput LocalBuoyancyScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### LocalGravityScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L33)

```csharp
CPerParticleFloatInput LocalGravityScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### SampleGravity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L27)

```csharp
ref bool SampleGravity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SamplePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L17)

```csharp
CPerParticleVecInput SamplePosition { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### SampleWater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L23)

```csharp
ref bool SampleWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SampleWind

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L21)

```csharp
ref bool SampleWind { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Scale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L19)

```csharp
CPerParticleVecInput Scale { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### UseBasicMovementGravity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ExternalWindForce.cs#L31)

```csharp
ref bool UseBasicMovementGravity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

