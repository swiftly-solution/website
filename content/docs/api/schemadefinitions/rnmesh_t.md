---
title: RnMesh_t
---

# Interface RnMesh_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RnMesh_t : ISchemaClass<RnMesh_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RnMesh_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DebugFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L39)

```csharp
ref uint DebugFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L37)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Materials

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L33)

```csharp
ref CUtlVector<byte> Materials { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### Max

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L20)

```csharp
ref Vector Max { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Min

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L18)

```csharp
ref Vector Min { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Nodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L22)

```csharp
ref CUtlVector<RnNode_t> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnNode_t](/docs/api/schemadefinitions/rnnode_t)>

### OrthographicAreas

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L35)

```csharp
ref Vector OrthographicAreas { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TriangleEdgeFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L31)

```csharp
ref CUtlVector<byte> TriangleEdgeFlags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### Triangles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L27)

```csharp
ref CUtlVector<RnTriangle_t> Triangles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnTriangle_t](/docs/api/schemadefinitions/rntriangle_t)>

### Vertices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L25)

```csharp
SchemaUntypedField Vertices { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Wings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RnMesh_t.cs#L29)

```csharp
ref CUtlVector<RnWing_t> Wings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnWing_t](/docs/api/schemadefinitions/rnwing_t)>

