---
title: PhysSoftbodyDesc_t
---

# Interface PhysSoftbodyDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PhysSoftbodyDesc_t : ISchemaClass<PhysSoftbodyDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PhysSoftbodyDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Capsules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L24)

```csharp
ref CUtlVector<RnSoftbodyCapsule_t> Capsules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnSoftbodyCapsule_t](/docs/api/schemadefinitions/rnsoftbodycapsule_t)>

### InitPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L26)

```csharp
ref CUtlVector<CTransform> InitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### ParticleBoneHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L18)

```csharp
ref CUtlVector<uint> ParticleBoneHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ParticleBoneName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L28)

```csharp
ref CUtlVector<CUtlString> ParticleBoneName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### Particles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L20)

```csharp
ref CUtlVector<RnSoftbodyParticle_t> Particles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnSoftbodyParticle_t](/docs/api/schemadefinitions/rnsoftbodyparticle_t)>

### Springs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L22)

```csharp
ref CUtlVector<RnSoftbodySpring_t> Springs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnSoftbodySpring_t](/docs/api/schemadefinitions/rnsoftbodyspring_t)>

