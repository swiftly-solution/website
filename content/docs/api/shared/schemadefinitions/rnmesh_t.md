---
title: RnMesh_t
---

```csharp
public interface RnMesh_t : ISchemaClass<RnMesh_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DebugFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L38)

```csharp
ref uint DebugFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L36)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Materials

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L32)

```csharp
ref CUtlVector<byte> Materials { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### Max

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L19)

```csharp
ref Vector Max { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Min

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L17)

```csharp
ref Vector Min { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Nodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L21)

```csharp
ref CUtlVector<RnNode_t> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnNode_t](/docs/api/shared/schemadefinitions/rnnode_t)>

### OrthographicAreas

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L34)

```csharp
ref Vector OrthographicAreas { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TriangleEdgeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L30)

```csharp
ref CUtlVector<byte> TriangleEdgeFlags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### Triangles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L26)

```csharp
ref CUtlVector<RnTriangle_t> Triangles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnTriangle_t](/docs/api/shared/schemadefinitions/rntriangle_t)>

### Vertices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L24)

```csharp
SchemaUntypedField Vertices { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Wings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L28)

```csharp
ref CUtlVector<RnWing_t> Wings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnWing_t](/docs/api/shared/schemadefinitions/rnwing_t)>

