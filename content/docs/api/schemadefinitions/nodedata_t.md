---
title: NodeData_t
---

# Interface NodeData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface NodeData_t : ISchemaClass<NodeData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<NodeData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChildNodeIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L28)

```csharp
ref CUtlVector<int> ChildNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MaxBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L24)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L22)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinimumDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L26)

```csharp
ref float MinimumDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L20)

```csharp
ref Vector Origin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Parent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L18)

```csharp
ref int Parent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorldNodePrefix

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NodeData_t.cs#L30)

```csharp
string WorldNodePrefix { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

