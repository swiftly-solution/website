---
title: RnHull_t
---

# Interface RnHull_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RnHull_t : ISchemaClass<RnHull_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RnHull_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Bounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L22)

```csharp
AABB_t Bounds { get; }
```

#### Property Value

- [AABB_t](/docs/api/schemadefinitions/aabb_t)

### Centroid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L18)

```csharp
ref Vector Centroid { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Edges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L36)

```csharp
ref CUtlVector<RnHalfEdge_t> Edges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnHalfEdge_t](/docs/api/schemadefinitions/rnhalfedge_t)>

### FacePlanes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L40)

```csharp
ref CUtlVector<RnPlane_t> FacePlanes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnPlane_t](/docs/api/schemadefinitions/rnplane_t)>

### Faces

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L38)

```csharp
ref CUtlVector<RnFace_t> Faces { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnFace_t](/docs/api/schemadefinitions/rnface_t)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L42)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MassProperties

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L26)

```csharp
ref matrix3x4_t MassProperties { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/natives/matrix3x4_t)

### MaxAngularRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L20)

```csharp
ref float MaxAngularRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OrthographicAreas

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L24)

```csharp
ref Vector OrthographicAreas { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RegionSVM

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L44)

```csharp
CRegionSVM? RegionSVM { get; }
```

#### Property Value

- [CRegionSVM](/docs/api/schemadefinitions/cregionsvm)?

### SurfaceArea

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L30)

```csharp
ref float SurfaceArea { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VertexPositions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L34)

```csharp
ref CUtlVector<Vector> VertexPositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector](/docs/api/natives/vector)>

### Vertices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L32)

```csharp
ref CUtlVector<RnVertex_t> Vertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnVertex_t](/docs/api/schemadefinitions/rnvertex_t)>

### Volume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L28)

```csharp
ref float Volume { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

