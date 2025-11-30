---
title: C_OP_InstantaneousEmitter
---

# Interface C_OP_InstantaneousEmitter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_InstantaneousEmitter : CParticleFunctionEmitter, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionEmitter>, ISchemaClass<C_OP_InstantaneousEmitter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionEmitter](/docs/api/schemadefinitions/cparticlefunctionemitter)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionEmitter>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_InstantaneousEmitter>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EventType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L24)

```csharp
ref EventTypeSelection_t EventType { get; }
```

#### Property Value

- [EventTypeSelection_t](/docs/api/schemadefinitions/eventtypeselection_t)

### InitFromKilledParentParticles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L22)

```csharp
ref float InitFromKilledParentParticles { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxEmittedPerFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L28)

```csharp
ref int MaxEmittedPerFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ParentParticleScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L26)

```csharp
CParticleCollectionFloatInput ParentParticleScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### ParticlesToEmit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L18)

```csharp
CParticleCollectionFloatInput ParticlesToEmit { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### SnapshotControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L30)

```csharp
ref int SnapshotControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L20)

```csharp
CParticleCollectionFloatInput StartTime { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### StrSnapshotSubset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_InstantaneousEmitter.cs#L32)

```csharp
string StrSnapshotSubset { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

