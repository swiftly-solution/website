---
title: C_INIT_VelocityRadialRandom
---

```csharp
public interface C_INIT_VelocityRadialRandom : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_VelocityRadialRandom>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlPointNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRadialRandom.cs#L16)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IgnoreDelta

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRadialRandom.cs#L24)

```csharp
ref bool IgnoreDelta { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LocalCoordinateSystemSpeedScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRadialRandom.cs#L22)

```csharp
ref Vector LocalCoordinateSystemSpeedScale { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SpeedMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRadialRandom.cs#L20)

```csharp
CPerParticleFloatInput SpeedMax { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### SpeedMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_VelocityRadialRandom.cs#L18)

```csharp
CPerParticleFloatInput SpeedMin { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

