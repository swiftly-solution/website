---
title: WorldNode_t
---

```csharp
public interface WorldNode_t : ISchemaClass<WorldNode_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AggregateInstanceStreams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L31)

```csharp
ref CUtlVector<AggregateInstanceStreamOnDiskData_t> AggregateInstanceStreams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[AggregateInstanceStreamOnDiskData_t](/docs/api/shared/schemadefinitions/aggregateinstancestreamondiskdata_t)>

### AggregateSceneObjects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L21)

```csharp
ref CUtlVector<AggregateSceneObject_t> AggregateSceneObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[AggregateSceneObject_t](/docs/api/shared/schemadefinitions/aggregatesceneobject_t)>

### ClutterSceneObjects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L23)

```csharp
ref CUtlVector<ClutterSceneObject_t> ClutterSceneObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ClutterSceneObject_t](/docs/api/shared/schemadefinitions/cluttersceneobject_t)>

### ExtraVertexStreamOverrides

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L25)

```csharp
ref CUtlVector<ExtraVertexStreamOverride_t> ExtraVertexStreamOverrides { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ExtraVertexStreamOverride_t](/docs/api/shared/schemadefinitions/extravertexstreamoverride_t)>

### ExtraVertexStreams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L29)

```csharp
ref CUtlVector<WorldNodeOnDiskBufferData_t> ExtraVertexStreams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[WorldNodeOnDiskBufferData_t](/docs/api/shared/schemadefinitions/worldnodeondiskbufferdata_t)>

### GrassFileName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L39)

```csharp
string GrassFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasBakedGeometryFlag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L43)

```csharp
ref bool HasBakedGeometryFlag { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LayerNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L35)

```csharp
ref CUtlVector<CUtlString> LayerNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### MaterialOverrides

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L27)

```csharp
ref CUtlVector<MaterialOverride_t> MaterialOverrides { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MaterialOverride_t](/docs/api/shared/schemadefinitions/materialoverride_t)>

### NodeLightingInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L41)

```csharp
BakedLightingInfo_t NodeLightingInfo { get; }
```

#### Property Value

- [BakedLightingInfo_t](/docs/api/shared/schemadefinitions/bakedlightinginfo_t)

### SceneObjectLayerIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L37)

```csharp
ref CUtlVector<byte> SceneObjectLayerIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### SceneObjects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L17)

```csharp
ref CUtlVector<SceneObject_t> SceneObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SceneObject_t](/docs/api/shared/schemadefinitions/sceneobject_t)>

### VertexAlbedoStreams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L33)

```csharp
ref CUtlVector<AggregateVertexAlbedoStreamOnDiskData_t> VertexAlbedoStreams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[AggregateVertexAlbedoStreamOnDiskData_t](/docs/api/shared/schemadefinitions/aggregatevertexalbedostreamondiskdata_t)>

### VisClusterMembership

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L19)

```csharp
ref CUtlVector<ushort> VisClusterMembership { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

