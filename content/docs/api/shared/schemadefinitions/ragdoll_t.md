---
title: ragdoll_t
---

```csharp
public interface ragdoll_t : ISchemaClass<ragdoll_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L23)

```csharp
ref bool AllowStretch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BoneIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L21)

```csharp
ref CUtlVector<int> BoneIndex { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HierarchyJoints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L19)

```csharp
ref CUtlVector<ragdollhierarchyjoint_t> HierarchyJoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ragdollhierarchyjoint_t](/docs/api/shared/schemadefinitions/ragdollhierarchyjoint_t)>

### List

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L17)

```csharp
ref CUtlVector<ragdollelement_t> List { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ragdollelement_t](/docs/api/shared/schemadefinitions/ragdollelement_t)>

### Unused

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ragdoll_t.cs#L25)

```csharp
ref bool Unused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

