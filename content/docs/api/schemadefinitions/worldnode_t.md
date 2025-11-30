---
title: WorldNode_t
---

# Interface WorldNode_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface WorldNode_t : ISchemaClass<WorldNode_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<WorldNode_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AggregateInstanceStreams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L32)

```csharp
ref CUtlVector<AggregateInstanceStreamOnDiskData_t> AggregateInstanceStreams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AggregateInstanceStreamOnDiskData_t](/docs/api/schemadefinitions/aggregateinstancestreamondiskdata_t)>

### AggregateSceneObjects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L22)

```csharp
ref CUtlVector<AggregateSceneObject_t> AggregateSceneObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AggregateSceneObject_t](/docs/api/schemadefinitions/aggregatesceneobject_t)>

### ClutterSceneObjects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L24)

```csharp
ref CUtlVector<ClutterSceneObject_t> ClutterSceneObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ClutterSceneObject_t](/docs/api/schemadefinitions/cluttersceneobject_t)>

### ExtraVertexStreamOverrides

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L26)

```csharp
ref CUtlVector<ExtraVertexStreamOverride_t> ExtraVertexStreamOverrides { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ExtraVertexStreamOverride_t](/docs/api/schemadefinitions/extravertexstreamoverride_t)>

### ExtraVertexStreams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L30)

```csharp
ref CUtlVector<WorldNodeOnDiskBufferData_t> ExtraVertexStreams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[WorldNodeOnDiskBufferData_t](/docs/api/schemadefinitions/worldnodeondiskbufferdata_t)>

### GrassFileName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L40)

```csharp
string GrassFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasBakedGeometryFlag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L44)

```csharp
ref bool HasBakedGeometryFlag { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LayerNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L36)

```csharp
ref CUtlVector<CUtlString> LayerNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### MaterialOverrides

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L28)

```csharp
ref CUtlVector<MaterialOverride_t> MaterialOverrides { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialOverride_t](/docs/api/schemadefinitions/materialoverride_t)>

### NodeLightingInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L42)

```csharp
BakedLightingInfo_t NodeLightingInfo { get; }
```

#### Property Value

- [BakedLightingInfo_t](/docs/api/schemadefinitions/bakedlightinginfo_t)

### SceneObjectLayerIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L38)

```csharp
ref CUtlVector<byte> SceneObjectLayerIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### SceneObjects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L18)

```csharp
ref CUtlVector<SceneObject_t> SceneObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SceneObject_t](/docs/api/schemadefinitions/sceneobject_t)>

### VertexAlbedoStreams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L34)

```csharp
ref CUtlVector<AggregateVertexAlbedoStreamOnDiskData_t> VertexAlbedoStreams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AggregateVertexAlbedoStreamOnDiskData_t](/docs/api/schemadefinitions/aggregatevertexalbedostreamondiskdata_t)>

### VisClusterMembership

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNode_t.cs#L20)

```csharp
ref CUtlVector<ushort> VisClusterMembership { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

