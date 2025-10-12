---
title: CVoxelVisibility
---

```csharp
public interface CVoxelVisibility : ISchemaClass<CVoxelVisibility>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BaseClusterCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L16)

```csharp
ref uint BaseClusterCount { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **EnclosedClusterListBlock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L34)

```csharp
VoxelVisBlockOffset_t EnclosedClusterListBlock { get; }
```

- Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### **EnclosedClustersBlock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L36)

```csharp
VoxelVisBlockOffset_t EnclosedClustersBlock { get; }
```

- Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### **GridSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L24)

```csharp
ref float GridSize { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MasksBlock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L38)

```csharp
VoxelVisBlockOffset_t MasksBlock { get; }
```

- Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### **MaxBounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L22)

```csharp
ref Vector MaxBounds { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MinBounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L20)

```csharp
ref Vector MinBounds { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **NodeBlock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L30)

```csharp
VoxelVisBlockOffset_t NodeBlock { get; }
```

- Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### **PVSBytesPerCluster** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L18)

```csharp
ref uint PVSBytesPerCluster { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RegionBlock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L32)

```csharp
VoxelVisBlockOffset_t RegionBlock { get; }
```

- Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

### **SkyVisibilityCluster** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L26)

```csharp
ref uint SkyVisibilityCluster { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SunVisibilityCluster** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L28)

```csharp
ref uint SunVisibilityCluster { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **VisBlocks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoxelVisibility.cs#L40)

```csharp
VoxelVisBlockOffset_t VisBlocks { get; }
```

- Property Value

- [VoxelVisBlockOffset_t](/docs/api/shared/schemadefinitions/voxelvisblockoffset_t)

