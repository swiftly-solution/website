---
title: ModelEmbeddedMesh_t
---

```csharp
public interface ModelEmbeddedMesh_t : ISchemaClass<ModelEmbeddedMesh_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DataBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L22)

```csharp
ref int DataBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IndexBuffers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L28)

```csharp
ref CUtlVector<ModelMeshBufferData_t> IndexBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelMeshBufferData_t](/docs/api/shared/schemadefinitions/modelmeshbufferdata_t)>

### MeshIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L20)

```csharp
ref int MeshIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L24)

```csharp
ref int MorphBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToolsBuffers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L30)

```csharp
ref CUtlVector<ModelMeshBufferData_t> ToolsBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelMeshBufferData_t](/docs/api/shared/schemadefinitions/modelmeshbufferdata_t)>

### ToolsVBBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L34)

```csharp
ref int ToolsVBBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VBIBBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L32)

```csharp
ref int VBIBBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VertexBuffers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L26)

```csharp
ref CUtlVector<ModelMeshBufferData_t> VertexBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelMeshBufferData_t](/docs/api/shared/schemadefinitions/modelmeshbufferdata_t)>

