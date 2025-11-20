---
title: RnHull_t
---

```csharp
public interface RnHull_t : ISchemaClass<RnHull_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Bounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L22)

```csharp
AABB_t Bounds { get; }
```

#### Property Value

- [AABB_t](/docs/api/shared/schemadefinitions/aabb_t)

### Centroid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L18)

```csharp
ref Vector Centroid { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Edges

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L36)

```csharp
ref CUtlVector<RnHalfEdge_t> Edges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnHalfEdge_t](/docs/api/shared/schemadefinitions/rnhalfedge_t)>

### FacePlanes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L40)

```csharp
ref CUtlVector<RnPlane_t> FacePlanes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnPlane_t](/docs/api/shared/schemadefinitions/rnplane_t)>

### Faces

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L38)

```csharp
ref CUtlVector<RnFace_t> Faces { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnFace_t](/docs/api/shared/schemadefinitions/rnface_t)>

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L42)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MassProperties

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L26)

```csharp
ref matrix3x4_t MassProperties { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

### MaxAngularRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L20)

```csharp
ref float MaxAngularRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OrthographicAreas

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L24)

```csharp
ref Vector OrthographicAreas { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RegionSVM

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L44)

```csharp
CRegionSVM? RegionSVM { get; }
```

#### Property Value

- [CRegionSVM](/docs/api/shared/schemadefinitions/cregionsvm)?

### SurfaceArea

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L30)

```csharp
ref float SurfaceArea { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VertexPositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L34)

```csharp
ref CUtlVector<Vector> VertexPositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### Vertices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L32)

```csharp
ref CUtlVector<RnVertex_t> Vertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnVertex_t](/docs/api/shared/schemadefinitions/rnvertex_t)>

### Volume

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnHull_t.cs#L28)

```csharp
ref float Volume { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

