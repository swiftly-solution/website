---
title: SceneObject_t
---

```csharp
public interface SceneObject_t : ISchemaClass<SceneObject_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CubeMapPrecomputedHandshake

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L37)

```csharp
ref int CubeMapPrecomputedHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FadeEndDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L23)

```csharp
ref float FadeEndDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeStartDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L21)

```csharp
ref float FadeStartDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LODOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L35)

```csharp
ref short LODOverride { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LightProbeVolumePrecomputedHandshake

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L39)

```csharp
ref int LightProbeVolumePrecomputedHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LightingOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L31)

```csharp
ref Vector LightingOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ObjectID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L17)

```csharp
ref uint ObjectID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ObjectTypeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L29)

```csharp
ref ObjectTypeFlags_t ObjectTypeFlags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/shared/schemadefinitions/objecttypeflags_t)

### OverlayRenderOrder

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L33)

```csharp
ref short OverlayRenderOrder { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Renderable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L43)

```csharp
ref CStrongHandle<InfoForResourceTypeCRenderMesh> Renderable { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCRenderMesh](/docs/api/shared/schemadefinitions/infoforresourcetypecrendermesh)>

### RenderableModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L41)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RenderableModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### Skin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L27)

```csharp
string Skin { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TintColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L25)

```csharp
ref Vector4D TintColor { get; }
```

#### Property Value

- [Vector4D](/docs/api/shared/natives/vector4d)

### Transform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SceneObject_t.cs#L19)

```csharp
ISchemaFixedArray<Vector4D> Transform { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector4D](/docs/api/shared/natives/vector4d)>

