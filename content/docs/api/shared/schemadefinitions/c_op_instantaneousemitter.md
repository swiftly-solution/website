---
title: C_OP_InstantaneousEmitter
---

```csharp
public interface C_OP_InstantaneousEmitter : CParticleFunctionEmitter, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionEmitter>, ISchemaClass<C_OP_InstantaneousEmitter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EventType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L24)

```csharp
ref EventTypeSelection_t EventType { get; }
```

#### Property Value

- [EventTypeSelection_t](/docs/api/shared/schemadefinitions/eventtypeselection_t)

### InitFromKilledParentParticles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L22)

```csharp
ref float InitFromKilledParentParticles { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxEmittedPerFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L28)

```csharp
ref int MaxEmittedPerFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ParentParticleScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L26)

```csharp
CParticleCollectionFloatInput ParentParticleScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### ParticlesToEmit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L18)

```csharp
CParticleCollectionFloatInput ParticlesToEmit { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### SnapshotControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L30)

```csharp
ref int SnapshotControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L20)

```csharp
CParticleCollectionFloatInput StartTime { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### StrSnapshotSubset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L32)

```csharp
string StrSnapshotSubset { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

