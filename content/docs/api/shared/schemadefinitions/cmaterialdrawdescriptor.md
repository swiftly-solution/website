---
title: CMaterialDrawDescriptor
---

```csharp
public interface CMaterialDrawDescriptor : ISchemaClass<CMaterialDrawDescriptor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Alpha

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L20)

```csharp
ref float Alpha { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AppliedIndexOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L26)

```csharp
ref uint AppliedIndexOffset { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### BaseVertex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L37)

```csharp
ref int BaseVertex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DepthVertexBufferIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L28)

```csharp
ref byte DepthVertexBufferIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### FirstMeshlet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L24)

```csharp
ref uint FirstMeshlet { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IndexBuffer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L45)

```csharp
CRenderBufferBinding IndexBuffer { get; }
```

#### Property Value

- [CRenderBufferBinding](/docs/api/shared/schemadefinitions/crenderbufferbinding)

### IndexCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L43)

```csharp
ref int IndexCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Material

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L49)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### MeshletPackedIVB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L47)

```csharp
CRenderBufferBinding MeshletPackedIVB { get; }
```

#### Property Value

- [CRenderBufferBinding](/docs/api/shared/schemadefinitions/crenderbufferbinding)

### MeshletPackedIVBIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L30)

```csharp
ref byte MeshletPackedIVBIndex { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### NumMeshlets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L22)

```csharp
ref ushort NumMeshlets { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### PrimitiveType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L35)

```csharp
ref RenderPrimitiveType_t PrimitiveType { get; }
```

#### Property Value

- [RenderPrimitiveType_t](/docs/api/shared/schemadefinitions/renderprimitivetype_t)

### RigidMeshParts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L33)

```csharp
SchemaUntypedField RigidMeshParts { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### StartIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L41)

```csharp
ref int StartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TintColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L18)

```csharp
ref Vector TintColor { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### UvDensity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L16)

```csharp
ref float UvDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VertexCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialDrawDescriptor.cs#L39)

```csharp
ref int VertexCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

