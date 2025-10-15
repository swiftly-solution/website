---
title: PhysSoftbodyDesc_t
---

```csharp
public interface PhysSoftbodyDesc_t : ISchemaClass<PhysSoftbodyDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Capsules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L23)

```csharp
ref CUtlVector<RnSoftbodyCapsule_t> Capsules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnSoftbodyCapsule_t](/docs/api/shared/schemadefinitions/rnsoftbodycapsule_t)>

### InitPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L25)

```csharp
ref CUtlVector<CTransform> InitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### ParticleBoneHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L17)

```csharp
ref CUtlVector<uint> ParticleBoneHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ParticleBoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L27)

```csharp
ref CUtlVector<CUtlString> ParticleBoneName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### Particles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L19)

```csharp
ref CUtlVector<RnSoftbodyParticle_t> Particles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnSoftbodyParticle_t](/docs/api/shared/schemadefinitions/rnsoftbodyparticle_t)>

### Springs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L21)

```csharp
ref CUtlVector<RnSoftbodySpring_t> Springs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnSoftbodySpring_t](/docs/api/shared/schemadefinitions/rnsoftbodyspring_t)>

