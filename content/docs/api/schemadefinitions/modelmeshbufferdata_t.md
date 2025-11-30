---
title: ModelMeshBufferData_t
---

# Interface ModelMeshBufferData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ModelMeshBufferData_t : ISchemaClass<ModelMeshBufferData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ModelMeshBufferData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlockIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L18)

```csharp
ref int BlockIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompressedZSTD

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L28)

```csharp
ref bool CompressedZSTD { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateBufferSRV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L30)

```csharp
ref bool CreateBufferSRV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateBufferUAV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L32)

```csharp
ref bool CreateBufferUAV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreatePooledBuffer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L36)

```csharp
ref bool CreatePooledBuffer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateRawBuffer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L34)

```csharp
ref bool CreateRawBuffer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ElementCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L20)

```csharp
ref uint ElementCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ElementSizeInBytes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L22)

```csharp
ref uint ElementSizeInBytes { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### InputLayoutFields

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L38)

```csharp
ref CUtlVector<RenderInputLayoutField_t> InputLayoutFields { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RenderInputLayoutField_t](/docs/api/schemadefinitions/renderinputlayoutfield_t)>

### MeshoptCompressed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L24)

```csharp
ref bool MeshoptCompressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MeshoptIndexSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelMeshBufferData_t.cs#L26)

```csharp
ref bool MeshoptIndexSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

