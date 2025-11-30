---
title: CMaterialDrawDescriptor
---

# Interface CMaterialDrawDescriptor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMaterialDrawDescriptor : ISchemaClass<CMaterialDrawDescriptor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMaterialDrawDescriptor>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Alpha

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L22)

```csharp
ref float Alpha { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AppliedIndexOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L28)

```csharp
ref uint AppliedIndexOffset { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### BaseVertex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L38)

```csharp
ref int BaseVertex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DepthVertexBufferIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L30)

```csharp
ref byte DepthVertexBufferIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### FirstMeshlet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L26)

```csharp
ref uint FirstMeshlet { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IndexBuffer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L46)

```csharp
CRenderBufferBinding IndexBuffer { get; }
```

#### Property Value

- [CRenderBufferBinding](/docs/api/schemadefinitions/crenderbufferbinding)

### IndexCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L44)

```csharp
ref int IndexCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Material

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L50)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### MeshletPackedIVB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L48)

```csharp
CRenderBufferBinding MeshletPackedIVB { get; }
```

#### Property Value

- [CRenderBufferBinding](/docs/api/schemadefinitions/crenderbufferbinding)

### MeshletPackedIVBIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L32)

```csharp
ref byte MeshletPackedIVBIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### NumMeshlets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L24)

```csharp
ref ushort NumMeshlets { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### PrimitiveType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L36)

```csharp
ref RenderPrimitiveType_t PrimitiveType { get; }
```

#### Property Value

- [RenderPrimitiveType_t](/docs/api/schemadefinitions/renderprimitivetype_t)

### RigidMeshParts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L34)

```csharp
ref CUtlLeanVector<CMaterialDrawDescriptor__RigidMeshPart_t, int> RigidMeshParts { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CMaterialDrawDescriptor__RigidMeshPart_t](/docs/api/schemadefinitions/cmaterialdrawdescriptor__rigidmeshpart_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### StartIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L42)

```csharp
ref int StartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L20)

```csharp
ref Vector TintColor { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### UvDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L18)

```csharp
ref float UvDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VertexCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L40)

```csharp
ref int VertexCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

