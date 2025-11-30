---
title: AggregateSceneObject_t
---

# Interface AggregateSceneObject_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AggregateSceneObject_t : ISchemaClass<AggregateSceneObject_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AggregateSceneObject_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AggregateMeshes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L28)

```csharp
ref CUtlVector<AggregateMeshInfo_t> AggregateMeshes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AggregateMeshInfo_t](/docs/api/schemadefinitions/aggregatemeshinfo_t)>

### AllFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L18)

```csharp
ref ObjectTypeFlags_t AllFlags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/schemadefinitions/objecttypeflags_t)

### AnyFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L20)

```csharp
ref ObjectTypeFlags_t AnyFlags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/schemadefinitions/objecttypeflags_t)

### FragmentTransforms

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L34)

```csharp
ref CUtlVector<matrix3x4_t> FragmentTransforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[matrix3x4_t](/docs/api/natives/matrix3x4_t)>

### InstanceStream

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L24)

```csharp
ref short InstanceStream { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Layer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L22)

```csharp
ref short Layer { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LodSetups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L30)

```csharp
ref CUtlVector<AggregateLODSetup_t> LodSetups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AggregateLODSetup_t](/docs/api/schemadefinitions/aggregatelodsetup_t)>

### RenderableModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L36)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RenderableModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>

### VertexAlbedoStream

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L26)

```csharp
ref short VertexAlbedoStream { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### VisClusterMembership

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateSceneObject_t.cs#L32)

```csharp
ref CUtlVector<ushort> VisClusterMembership { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

