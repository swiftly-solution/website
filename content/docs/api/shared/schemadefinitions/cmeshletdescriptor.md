---
title: CMeshletDescriptor
---

```csharp
public interface CMeshletDescriptor : ISchemaClass<CMeshletDescriptor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CullingData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L19)

```csharp
CDrawCullingData CullingData { get; }
```

#### Property Value

- [CDrawCullingData](/docs/api/shared/schemadefinitions/cdrawcullingdata)

### PackedAABB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L17)

```csharp
PackedAABB_t PackedAABB { get; }
```

#### Property Value

- [PackedAABB_t](/docs/api/shared/schemadefinitions/packedaabb_t)

### TriangleCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L27)

```csharp
ref byte TriangleCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### TriangleOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L23)

```csharp
ref uint TriangleOffset { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VertexCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L25)

```csharp
ref byte VertexCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### VertexOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L21)

```csharp
ref uint VertexOffset { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

