---
title: FeSDFRigid_t
---

# Interface FeSDFRigid_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FeSDFRigid_t : ISchemaClass<FeSDFRigid_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FeSDFRigid_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Bounciness

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L22)

```csharp
ref float Bounciness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CollisionMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L26)

```csharp
ref ushort CollisionMask { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Depth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L38)

```csharp
ref int Depth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Distances

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L32)

```csharp
ref CUtlVector<float> Distances { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L30)

```csharp
ref ushort Flags { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Height

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L36)

```csharp
ref int Height { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LocalMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L20)

```csharp
ref Vector LocalMax { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LocalMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L18)

```csharp
ref Vector LocalMin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Node

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L24)

```csharp
ref ushort Node { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### VertexMapIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L28)

```csharp
ref ushort VertexMapIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Width

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSDFRigid_t.cs#L34)

```csharp
ref int Width { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

