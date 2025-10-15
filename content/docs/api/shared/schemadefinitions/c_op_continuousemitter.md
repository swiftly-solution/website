---
title: C_OP_ContinuousEmitter
---

```csharp
public interface C_OP_ContinuousEmitter : CParticleFunctionEmitter, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionEmitter>, ISchemaClass<C_OP_ContinuousEmitter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EmissionDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L17)

```csharp
CParticleCollectionFloatInput EmissionDuration { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### EmissionScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L23)

```csharp
ref float EmissionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EmitRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L21)

```csharp
CParticleCollectionFloatInput EmitRate { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### EventType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L29)

```csharp
ref EventTypeSelection_t EventType { get; }
```

#### Property Value

- [EventTypeSelection_t](/docs/api/shared/schemadefinitions/eventtypeselection_t)

### ForceEmitOnFirstUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L37)

```csharp
ref bool ForceEmitOnFirstUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceEmitOnLastUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L39)

```csharp
ref bool ForceEmitOnLastUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitFromKilledParentParticles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L27)

```csharp
ref bool InitFromKilledParentParticles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LimitPerUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L35)

```csharp
ref int LimitPerUpdate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScalePerParentParticle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L25)

```csharp
ref float ScalePerParentParticle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SnapshotControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L31)

```csharp
ref int SnapshotControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L19)

```csharp
CParticleCollectionFloatInput StartTime { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### StrSnapshotSubset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ContinuousEmitter.cs#L33)

```csharp
string StrSnapshotSubset { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

