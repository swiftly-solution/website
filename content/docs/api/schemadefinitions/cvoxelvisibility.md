---
title: CVoxelVisibility
---

# Interface CVoxelVisibility

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoxelVisibility : ISchemaClass<CVoxelVisibility>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CVoxelVisibility>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BaseClusterCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L18)

```csharp
ref uint BaseClusterCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EnclosedClusterListBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L36)

```csharp
VoxelVisBlockOffset_t EnclosedClusterListBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/schemadefinitions/voxelvisblockoffset_t)

### EnclosedClustersBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L38)

```csharp
VoxelVisBlockOffset_t EnclosedClustersBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/schemadefinitions/voxelvisblockoffset_t)

### GridSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L26)

```csharp
ref float GridSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MasksBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L40)

```csharp
VoxelVisBlockOffset_t MasksBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/schemadefinitions/voxelvisblockoffset_t)

### MaxBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L24)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L22)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### NodeBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L32)

```csharp
VoxelVisBlockOffset_t NodeBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/schemadefinitions/voxelvisblockoffset_t)

### PVSBytesPerCluster

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L20)

```csharp
ref uint PVSBytesPerCluster { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RegionBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L34)

```csharp
VoxelVisBlockOffset_t RegionBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/schemadefinitions/voxelvisblockoffset_t)

### SkyVisibilityCluster

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L28)

```csharp
ref uint SkyVisibilityCluster { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SunVisibilityCluster

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L30)

```csharp
ref uint SunVisibilityCluster { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VisBlocks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L42)

```csharp
VoxelVisBlockOffset_t VisBlocks { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/schemadefinitions/voxelvisblockoffset_t)

