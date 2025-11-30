---
title: CNmIKRig
---

# Interface CNmIKRig

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmIKRig : ISchemaClass<CNmIKRig>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNmIKRig>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Bodies

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L20)

```csharp
ref CUtlVector<CNmIKBody> Bodies { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CNmIKBody](/docs/api/schemadefinitions/cnmikbody)>

### Joints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L22)

```csharp
ref CUtlVector<CNmIKJoint> Joints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CNmIKJoint](/docs/api/schemadefinitions/cnmikjoint)>

### Skeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIKRig.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCNmSkeleton](/docs/api/schemadefinitions/infoforresourcetypecnmskeleton)>

