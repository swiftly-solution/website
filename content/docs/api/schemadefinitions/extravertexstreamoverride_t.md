---
title: ExtraVertexStreamOverride_t
---

# Interface ExtraVertexStreamOverride_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ExtraVertexStreamOverride_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ExtraVertexStreamOverride_t : BaseSceneObjectOverride_t, ISchemaClass<BaseSceneObjectOverride_t>, ISchemaClass<ExtraVertexStreamOverride_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [BaseSceneObjectOverride_t](/docs/api/schemadefinitions/basesceneobjectoverride_t)
- [ISchemaClass<BaseSceneObjectOverride_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<ExtraVertexStreamOverride_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AdditionalMeshDrawPrimitiveFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ExtraVertexStreamOverride_t.cs#L22)

```csharp
ref MeshDrawPrimitiveFlags_t AdditionalMeshDrawPrimitiveFlags { get; }
```

#### Property Value

- [MeshDrawPrimitiveFlags_t](/docs/api/schemadefinitions/meshdrawprimitiveflags_t)

### DrawCallIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ExtraVertexStreamOverride_t.cs#L20)

```csharp
ref uint DrawCallIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ExtraBufferBinding

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ExtraVertexStreamOverride_t.cs#L24)

```csharp
CRenderBufferBinding ExtraBufferBinding { get; }
```

#### Property Value

- [CRenderBufferBinding](/docs/api/schemadefinitions/crenderbufferbinding)

### SubSceneObject

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ExtraVertexStreamOverride_t.cs#L18)

```csharp
ref uint SubSceneObject { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

