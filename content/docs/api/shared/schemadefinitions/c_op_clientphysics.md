---
title: C_OP_ClientPhysics
---

```csharp
public interface C_OP_ClientPhysics : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_ClientPhysics>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ColorBlendType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L40)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/shared/schemadefinitions/particlecolorblendtype_t)

### ControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L36)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeleteSim

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L34)

```csharp
ref bool DeleteSim { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForcedSimId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L38)

```csharp
ref int ForcedSimId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ForcedStatusEffects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L42)

```csharp
ref ParticleAttrBoxFlags_t ForcedStatusEffects { get; }
```

#### Property Value

- [ParticleAttrBoxFlags_t](/docs/api/shared/schemadefinitions/particleattrboxflags_t)

### KillParticles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L32)

```csharp
ref bool KillParticles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxParticleCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L28)

```csharp
ref int MaxParticleCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerWakeRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L22)

```csharp
CParticleCollectionFloatInput PlayerWakeRadius { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### RespectExclusionVolumes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L30)

```csharp
ref bool RespectExclusionVolumes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartAsleep

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L20)

```csharp
ref bool StartAsleep { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StrPhysicsType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L18)

```csharp
string StrPhysicsType { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseHighQualitySimulation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L26)

```csharp
ref bool UseHighQualitySimulation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VehicleWakeRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ClientPhysics.cs#L24)

```csharp
CParticleCollectionFloatInput VehicleWakeRadius { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

