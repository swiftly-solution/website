---
title: ragdoll_t
---

# Interface ragdoll_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ragdoll_t : ISchemaClass<ragdoll_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ragdoll_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AllowStretch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L24)

```csharp
ref bool AllowStretch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L22)

```csharp
ref CUtlVector<int> BoneIndex { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HierarchyJoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L20)

```csharp
ref CUtlVector<ragdollhierarchyjoint_t> HierarchyJoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ragdollhierarchyjoint_t](/docs/api/schemadefinitions/ragdollhierarchyjoint_t)>

### List

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L18)

```csharp
ref CUtlVector<ragdollelement_t> List { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ragdollelement_t](/docs/api/schemadefinitions/ragdollelement_t)>

### Unused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L26)

```csharp
ref bool Unused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

