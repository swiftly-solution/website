---
title: NodeData_t
---

```csharp
public interface NodeData_t : ISchemaClass<NodeData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChildNodeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L27)

```csharp
ref CUtlVector<int> ChildNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MaxBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L23)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MinBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L21)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MinimumDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L25)

```csharp
ref float MinimumDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Origin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L19)

```csharp
ref Vector Origin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Parent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L17)

```csharp
ref int Parent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorldNodePrefix

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L29)

```csharp
string WorldNodePrefix { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

