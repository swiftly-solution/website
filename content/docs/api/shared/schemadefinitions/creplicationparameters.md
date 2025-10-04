---
title: CReplicationParameters
---

```csharp
public interface CReplicationParameters : ISchemaClass<CReplicationParameters>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**MaxRandomDisplacement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L26)

```csharp
CParticleCollectionVecInput MaxRandomDisplacement { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

**MaxRandomRadiusScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L22)

```csharp
CParticleCollectionFloatInput MaxRandomRadiusScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**MinRandomDisplacement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L24)

```csharp
CParticleCollectionVecInput MinRandomDisplacement { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

**MinRandomRadiusScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L20)

```csharp
CParticleCollectionFloatInput MinRandomRadiusScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**ModellingScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L28)

```csharp
CParticleCollectionFloatInput ModellingScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**ReplicationMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L16)

```csharp
ref ParticleReplicationMode_t ReplicationMode { get; }
```

#### Property Value

- [ParticleReplicationMode_t](/docs/api/shared/schemadefinitions/particlereplicationmode_t)

**ScaleChildParticleRadii** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CReplicationParameters.cs#L18)

```csharp
ref bool ScaleChildParticleRadii { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

