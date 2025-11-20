---
title: AggregateSceneObject_t
---

```csharp
public interface AggregateSceneObject_t : ISchemaClass<AggregateSceneObject_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AggregateMeshes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L28)

```csharp
ref CUtlVector<AggregateMeshInfo_t> AggregateMeshes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[AggregateMeshInfo_t](/docs/api/shared/schemadefinitions/aggregatemeshinfo_t)>

### AllFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L18)

```csharp
ref ObjectTypeFlags_t AllFlags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/shared/schemadefinitions/objecttypeflags_t)

### AnyFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L20)

```csharp
ref ObjectTypeFlags_t AnyFlags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/shared/schemadefinitions/objecttypeflags_t)

### FragmentTransforms

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L34)

```csharp
ref CUtlVector<matrix3x4_t> FragmentTransforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)>

### InstanceStream

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L24)

```csharp
ref short InstanceStream { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Layer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L22)

```csharp
ref short Layer { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LodSetups

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L30)

```csharp
ref CUtlVector<AggregateLODSetup_t> LodSetups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[AggregateLODSetup_t](/docs/api/shared/schemadefinitions/aggregatelodsetup_t)>

### RenderableModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L36)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RenderableModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### VertexAlbedoStream

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L26)

```csharp
ref short VertexAlbedoStream { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### VisClusterMembership

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L32)

```csharp
ref CUtlVector<ushort> VisClusterMembership { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

