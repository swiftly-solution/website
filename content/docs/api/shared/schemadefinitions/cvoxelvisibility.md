---
title: CVoxelVisibility
---

```csharp
public interface CVoxelVisibility : ISchemaClass<CVoxelVisibility>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BaseClusterCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L17)

```csharp
ref uint BaseClusterCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EnclosedClusterListBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L35)

```csharp
VoxelVisBlockOffset_t EnclosedClusterListBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### EnclosedClustersBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L37)

```csharp
VoxelVisBlockOffset_t EnclosedClustersBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### GridSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L25)

```csharp
ref float GridSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MasksBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L39)

```csharp
VoxelVisBlockOffset_t MasksBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### MaxBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L23)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MinBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L21)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NodeBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L31)

```csharp
VoxelVisBlockOffset_t NodeBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### PVSBytesPerCluster

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L19)

```csharp
ref uint PVSBytesPerCluster { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RegionBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L33)

```csharp
VoxelVisBlockOffset_t RegionBlock { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### SkyVisibilityCluster

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L27)

```csharp
ref uint SkyVisibilityCluster { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SunVisibilityCluster

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L29)

```csharp
ref uint SunVisibilityCluster { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VisBlocks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L41)

```csharp
VoxelVisBlockOffset_t VisBlocks { get; }
```

#### Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

