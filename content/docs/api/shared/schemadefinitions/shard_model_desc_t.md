---
title: shard_model_desc_t
---

```csharp
public interface shard_model_desc_t : ISchemaClass<shard_model_desc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### GlassHalfThickness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L36)

```csharp
ref float GlassHalfThickness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasParent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L38)

```csharp
ref bool HasParent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitialPanelVertices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L34)

```csharp
ref CUtlVector<Vector4D> InitialPanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector4D](/docs/api/shared/natives/vector4d)>

### MaterialBase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> MaterialBase { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### MaterialDamageOverlay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> MaterialDamageOverlay { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### ModelID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L18)

```csharp
ref int ModelID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PanelSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L26)

```csharp
ref Vector2D PanelSize { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### PanelVertices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L32)

```csharp
ref CUtlVector<Vector2D> PanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector2D](/docs/api/shared/natives/vector2d)>

### ParentFrozen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L40)

```csharp
ref bool ParentFrozen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Solid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L24)

```csharp
ref ShardSolid_t Solid { get; }
```

#### Property Value

- [ShardSolid_t](/docs/api/shared/schemadefinitions/shardsolid_t)

### StressPositionA

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L28)

```csharp
ref Vector2D StressPositionA { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### StressPositionB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L30)

```csharp
ref Vector2D StressPositionB { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### SurfacePropStringToken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L42)

```csharp
ref CUtlStringToken SurfacePropStringToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

## Methods

### GlassHalfThicknessUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L53)

```csharp
void GlassHalfThicknessUpdated()
```

### HasParentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L54)

```csharp
void HasParentUpdated()
```

### InitialPanelVerticesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L52)

```csharp
void InitialPanelVerticesUpdated()
```

### MaterialBaseUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L45)

```csharp
void MaterialBaseUpdated()
```

### MaterialDamageOverlayUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L46)

```csharp
void MaterialDamageOverlayUpdated()
```

### ModelIDUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L44)

```csharp
void ModelIDUpdated()
```

### PanelSizeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L48)

```csharp
void PanelSizeUpdated()
```

### PanelVerticesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L51)

```csharp
void PanelVerticesUpdated()
```

### ParentFrozenUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L55)

```csharp
void ParentFrozenUpdated()
```

### SolidUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L47)

```csharp
void SolidUpdated()
```

### StressPositionAUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L49)

```csharp
void StressPositionAUpdated()
```

### StressPositionBUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L50)

```csharp
void StressPositionBUpdated()
```

### SurfacePropStringTokenUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L56)

```csharp
void SurfacePropStringTokenUpdated()
```

