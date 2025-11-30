---
title: CMeshletDescriptor
---

# Interface CMeshletDescriptor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMeshletDescriptor : ISchemaClass<CMeshletDescriptor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMeshletDescriptor>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CullingData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L20)

```csharp
CDrawCullingData CullingData { get; }
```

#### Property Value

- [CDrawCullingData](/docs/api/schemadefinitions/cdrawcullingdata)

### PackedAABB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L18)

```csharp
PackedAABB_t PackedAABB { get; }
```

#### Property Value

- [PackedAABB_t](/docs/api/schemadefinitions/packedaabb_t)

### TriangleCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L28)

```csharp
ref byte TriangleCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### TriangleOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L24)

```csharp
ref uint TriangleOffset { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VertexCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L26)

```csharp
ref byte VertexCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### VertexOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMeshletDescriptor.cs#L22)

```csharp
ref uint VertexOffset { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

