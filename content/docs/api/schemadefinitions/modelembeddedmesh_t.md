---
title: ModelEmbeddedMesh_t
---

# Interface ModelEmbeddedMesh_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ModelEmbeddedMesh_t : ISchemaClass<ModelEmbeddedMesh_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ModelEmbeddedMesh_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DataBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L22)

```csharp
ref int DataBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IndexBuffers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L28)

```csharp
ref CUtlVector<ModelMeshBufferData_t> IndexBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ModelMeshBufferData_t](/docs/api/schemadefinitions/modelmeshbufferdata_t)>

### MeshIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L20)

```csharp
ref int MeshIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L24)

```csharp
ref int MorphBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToolsBuffers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L30)

```csharp
ref CUtlVector<ModelMeshBufferData_t> ToolsBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ModelMeshBufferData_t](/docs/api/schemadefinitions/modelmeshbufferdata_t)>

### ToolsVBBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L34)

```csharp
ref int ToolsVBBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VBIBBlock

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L32)

```csharp
ref int VBIBBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VertexBuffers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelEmbeddedMesh_t.cs#L26)

```csharp
ref CUtlVector<ModelMeshBufferData_t> VertexBuffers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ModelMeshBufferData_t](/docs/api/schemadefinitions/modelmeshbufferdata_t)>

