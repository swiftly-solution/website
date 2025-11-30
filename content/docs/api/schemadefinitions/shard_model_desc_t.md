---
title: shard_model_desc_t
---

# Interface shard_model_desc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface shard_model_desc_t : ISchemaClass<shard_model_desc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<shard_model_desc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### GlassHalfThickness

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L36)

```csharp
ref float GlassHalfThickness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L38)

```csharp
ref bool HasParent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitialPanelVertices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L34)

```csharp
ref CUtlVector<Vector4D> InitialPanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector4D](/docs/api/natives/vector4d)>

### MaterialBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> MaterialBase { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### MaterialDamageOverlay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> MaterialDamageOverlay { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### ModelID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L18)

```csharp
ref int ModelID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PanelSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L26)

```csharp
ref Vector2D PanelSize { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### PanelVertices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L32)

```csharp
ref CUtlVector<Vector2D> PanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector2D](/docs/api/natives/vector2d)>

### ParentFrozen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L40)

```csharp
ref bool ParentFrozen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Solid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L24)

```csharp
ref ShardSolid_t Solid { get; }
```

#### Property Value

- [ShardSolid_t](/docs/api/schemadefinitions/shardsolid_t)

### StressPositionA

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L28)

```csharp
ref Vector2D StressPositionA { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### StressPositionB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L30)

```csharp
ref Vector2D StressPositionB { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### SurfacePropStringToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L42)

```csharp
ref CUtlStringToken SurfacePropStringToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

## Methods

### GlassHalfThicknessUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L53)

```csharp
void GlassHalfThicknessUpdated()
```

### HasParentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L54)

```csharp
void HasParentUpdated()
```

### InitialPanelVerticesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L52)

```csharp
void InitialPanelVerticesUpdated()
```

### MaterialBaseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L45)

```csharp
void MaterialBaseUpdated()
```

### MaterialDamageOverlayUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L46)

```csharp
void MaterialDamageOverlayUpdated()
```

### ModelIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L44)

```csharp
void ModelIDUpdated()
```

### PanelSizeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L48)

```csharp
void PanelSizeUpdated()
```

### PanelVerticesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L51)

```csharp
void PanelVerticesUpdated()
```

### ParentFrozenUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L55)

```csharp
void ParentFrozenUpdated()
```

### SolidUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L47)

```csharp
void SolidUpdated()
```

### StressPositionAUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L49)

```csharp
void StressPositionAUpdated()
```

### StressPositionBUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L50)

```csharp
void StressPositionBUpdated()
```

### SurfacePropStringTokenUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/shard_model_desc_t.cs#L56)

```csharp
void SurfacePropStringTokenUpdated()
```

