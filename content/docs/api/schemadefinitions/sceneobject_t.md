---
title: SceneObject_t
---

# Interface SceneObject_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SceneObject_t : ISchemaClass<SceneObject_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SceneObject_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CubeMapPrecomputedHandshake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L38)

```csharp
ref int CubeMapPrecomputedHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FadeEndDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L24)

```csharp
ref float FadeEndDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeStartDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L22)

```csharp
ref float FadeStartDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LODOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L36)

```csharp
ref short LODOverride { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LightProbeVolumePrecomputedHandshake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L40)

```csharp
ref int LightProbeVolumePrecomputedHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LightingOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L32)

```csharp
ref Vector LightingOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ObjectID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L18)

```csharp
ref uint ObjectID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ObjectTypeFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L30)

```csharp
ref ObjectTypeFlags_t ObjectTypeFlags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/schemadefinitions/objecttypeflags_t)

### OverlayRenderOrder

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L34)

```csharp
ref short OverlayRenderOrder { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Renderable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L44)

```csharp
ref CStrongHandle<InfoForResourceTypeCRenderMesh> Renderable { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCRenderMesh](/docs/api/schemadefinitions/infoforresourcetypecrendermesh)>

### RenderableModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L42)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RenderableModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>

### Skin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L28)

```csharp
string Skin { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L26)

```csharp
ref Vector4D TintColor { get; }
```

#### Property Value

- [Vector4D](/docs/api/natives/vector4d)

### Transform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L20)

```csharp
ISchemaFixedArray<Vector4D> Transform { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[Vector4D](/docs/api/natives/vector4d)>

