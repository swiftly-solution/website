---
title: PhysSoftbodyDesc_t
---

```csharp
public interface PhysSoftbodyDesc_t : ISchemaClass<PhysSoftbodyDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Capsules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L25)

```csharp
ref CUtlVector Capsules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### InitPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L27)

```csharp
ref CUtlVector<CTransform> InitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### ParticleBoneHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L16)

```csharp
ref CUtlVector<uint> ParticleBoneHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ParticleBoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L29)

```csharp
ref CUtlVector<CUtlString> ParticleBoneName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### Particles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L19)

```csharp
ref CUtlVector Particles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### Springs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysSoftbodyDesc_t.cs#L22)

```csharp
ref CUtlVector Springs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

