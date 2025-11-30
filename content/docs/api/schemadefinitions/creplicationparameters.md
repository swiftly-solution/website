---
title: CReplicationParameters
---

# Interface CReplicationParameters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CReplicationParameters : ISchemaClass<CReplicationParameters>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CReplicationParameters>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MaxRandomDisplacement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L28)

```csharp
CParticleCollectionVecInput MaxRandomDisplacement { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

### MaxRandomRadiusScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L24)

```csharp
CParticleCollectionFloatInput MaxRandomRadiusScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### MinRandomDisplacement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L26)

```csharp
CParticleCollectionVecInput MinRandomDisplacement { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

### MinRandomRadiusScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L22)

```csharp
CParticleCollectionFloatInput MinRandomRadiusScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### ModellingScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L30)

```csharp
CParticleCollectionFloatInput ModellingScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### ReplicationMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L18)

```csharp
ref ParticleReplicationMode_t ReplicationMode { get; }
```

#### Property Value

- [ParticleReplicationMode_t](/docs/api/schemadefinitions/particlereplicationmode_t)

### ScaleChildParticleRadii

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L20)

```csharp
ref bool ScaleChildParticleRadii { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

