---
title: ModelEmbeddedMesh_t
---

```csharp
public interface ModelEmbeddedMesh_t : ISchemaClass<ModelEmbeddedMesh_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DataBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L21)

```csharp
ref int DataBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IndexBuffers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L27)

```csharp
ref CUtlVector<ModelMeshBufferData_t> IndexBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelMeshBufferData_t](/docs/api/shared/schemadefinitions/modelmeshbufferdata_t)>

### MeshIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L19)

```csharp
ref int MeshIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L23)

```csharp
ref int MorphBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L17)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToolsBuffers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L29)

```csharp
ref CUtlVector<ModelMeshBufferData_t> ToolsBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelMeshBufferData_t](/docs/api/shared/schemadefinitions/modelmeshbufferdata_t)>

### ToolsVBBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L33)

```csharp
ref int ToolsVBBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VBIBBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L31)

```csharp
ref int VBIBBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VertexBuffers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L25)

```csharp
ref CUtlVector<ModelMeshBufferData_t> VertexBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelMeshBufferData_t](/docs/api/shared/schemadefinitions/modelmeshbufferdata_t)>

