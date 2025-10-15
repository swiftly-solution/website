---
title: CNmIKRig
---

```csharp
public interface CNmIKRig : ISchemaClass<CNmIKRig>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Bodies

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L19)

```csharp
ref CUtlVector<CNmIKBody> Bodies { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CNmIKBody](/docs/api/shared/schemadefinitions/cnmikbody)>

### Joints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L21)

```csharp
ref CUtlVector<CNmIKJoint> Joints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CNmIKJoint](/docs/api/shared/schemadefinitions/cnmikjoint)>

### Skeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L17)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCNmSkeleton](/docs/api/shared/schemadefinitions/infoforresourcetypecnmskeleton)>

